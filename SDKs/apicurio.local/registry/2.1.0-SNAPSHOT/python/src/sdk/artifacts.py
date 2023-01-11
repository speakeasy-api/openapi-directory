import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Artifacts:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def create_artifact(self, request: operations.CreateArtifactRequest) -> operations.CreateArtifactResponse:
        r"""Create artifact
        Creates a new artifact by posting the artifact content.  The body of the request should
        be the raw content of the artifact.  This is typically in JSON format for *most* of the 
        supported types, but may be in another format for a few (for example, `PROTOBUF`).
        
        The registry attempts to figure out what kind of artifact is being added from the
        following supported list:
        
        * Avro (`AVRO`)
        * Protobuf (`PROTOBUF`)
        * JSON Schema (`JSON`)
        * Kafka Connect (`KCONNECT`)
        * OpenAPI (`OPENAPI`)
        * AsyncAPI (`ASYNCAPI`)
        * GraphQL (`GRAPHQL`)
        * Web Services Description Language (`WSDL`)
        * XML Schema (`XSD`)
        
        Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType` 
        HTTP request header, or include a hint in the request's `Content-Type`.  For example:
        
        ```
        Content-Type: application/json; artifactType=AVRO
        ```
        
        An artifact is created using the content provided in the body of the request.  This
        content is created under a unique artifact ID that can be provided in the request
        using the `X-Registry-ArtifactId` request header.  If not provided in the request,
        the server generates a unique ID for the artifact.  It is typically recommended
        that callers provide the ID, because this is typically a meaningful identifier, 
        and for most use cases should be supplied by the caller.
        
        If an artifact with the provided artifact ID already exists, the default behavior
        is for the server to reject the content with a 409 error.  However, the caller can
        supply the `ifExists` query parameter to alter this default behavior. The `ifExists`
        query parameter can have one of the following values:
        
        * `FAIL` (*default*) - server rejects the content with a 409 error
        * `UPDATE` - server updates the existing artifact and returns the new metadata
        * `RETURN` - server does not create or add content to the server, but instead 
        returns the metadata for the existing artifact
        * `RETURN_OR_UPDATE` - server returns an existing **version** that matches the 
        provided content if such a version exists, otherwise a new version is created
        
        This operation may fail for one of the following reasons:
        
        * An invalid `ArtifactType` was indicated (HTTP error `400`)
        * No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)
        * Provided content (request body) was empty (HTTP error `400`)
        * An artifact with the provided ID already exists (HTTP error `409`)
        * The content violates one of the configured global rules (HTTP error `409`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{groupId}/artifacts", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtifactMetaData])
                res.artifact_meta_data = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RuleViolationError])
                res.rule_violation_error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def delete_artifact(self, request: operations.DeleteArtifactRequest) -> operations.DeleteArtifactResponse:
        r"""Delete artifact
        Deletes an artifact completely, resulting in all versions of the artifact also being
        deleted.  This may fail for one of the following reasons:
        
        * No artifact with the `artifactId` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{groupId}/artifacts/{artifactId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def delete_artifacts_in_group(self, request: operations.DeleteArtifactsInGroupRequest) -> operations.DeleteArtifactsInGroupResponse:
        r"""Deletes all artifacts in a group
        Deletes all of the artifacts that exist in a given group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{groupId}/artifacts", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteArtifactsInGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_content_by_global_id(self, request: operations.GetContentByGlobalIDRequest) -> operations.GetContentByGlobalIDResponse:
        r"""Get artifact by global ID
        Gets the content for an artifact version in the registry using its globally unique
        identifier.
        
        This operation may fail for one of the following reasons:
        
        * No artifact version with this `globalId` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ids/globalIds/{globalId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContentByGlobalIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.file_content = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_content_by_hash(self, request: operations.GetContentByHashRequest) -> operations.GetContentByHashResponse:
        r"""Get artifact content by SHA-256 hash
        Gets the content for an artifact version in the registry using the 
        SHA-256 hash of the content.  This content hash may be shared by multiple artifact
        versions in the case where the artifact versions have identical content.
        
        This operation may fail for one of the following reasons:
        
        * No content with this `contentHash` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ids/contentHashes/{contentHash}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContentByHashResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.file_content = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_content_by_id(self, request: operations.GetContentByIDRequest) -> operations.GetContentByIDResponse:
        r"""Get artifact content by ID
        Gets the content for an artifact version in the registry using the unique content
        identifier for that content.  This content ID may be shared by multiple artifact
        versions in the case where the artifact versions are identical.
        
        This operation may fail for one of the following reasons:
        
        * No content with this `contentId` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ids/contentIds/{contentId}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContentByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.file_content = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_latest_artifact(self, request: operations.GetLatestArtifactRequest) -> operations.GetLatestArtifactResponse:
        r"""Get latest artifact
        Returns the latest version of the artifact in its raw form.  The `Content-Type` of the
        response depends on the artifact type.  In most cases, this is `application/json`, but 
        for some types it may be different (for example, `PROTOBUF`).
        
        This operation may fail for one of the following reasons:
        
        * No artifact with this `artifactId` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{groupId}/artifacts/{artifactId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.file_content = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def list_artifacts_in_group(self, request: operations.ListArtifactsInGroupRequest) -> operations.ListArtifactsInGroupResponse:
        r"""List artifacts in group
        Returns a list of all artifacts in the group.  This list is paged.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{groupId}/artifacts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListArtifactsInGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtifactSearchResults])
                res.artifact_search_results = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def search_artifacts(self, request: operations.SearchArtifactsRequest) -> operations.SearchArtifactsResponse:
        r"""Search for artifacts
        Returns a paginated list of all artifacts that match the provided filter criteria.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/artifacts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchArtifactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtifactSearchResults])
                res.artifact_search_results = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def search_artifacts_by_content(self, request: operations.SearchArtifactsByContentRequest) -> operations.SearchArtifactsByContentResponse:
        r"""Search for artifacts by content
        Returns a paginated list of all artifacts with at least one version that matches the
        posted content.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/artifacts"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchArtifactsByContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtifactSearchResults])
                res.artifact_search_results = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def update_artifact(self, request: operations.UpdateArtifactRequest) -> operations.UpdateArtifactResponse:
        r"""Update artifact
        Updates an artifact by uploading new content.  The body of the request should
        be the raw content of the artifact.  This is typically in JSON format for *most*
        of the supported types, but may be in another format for a few (for example, `PROTOBUF`).
        The type of the content should be compatible with the artifact's type (it would be
        an error to update an `AVRO` artifact with new `OPENAPI` content, for example).
        
        The update could fail for a number of reasons including:
        
        * Provided content (request body) was empty (HTTP error `400`)
        * No artifact with the `artifactId` exists (HTTP error `404`)
        * The new content violates one of the rules configured for the artifact (HTTP error `409`)
        * A server error occurred (HTTP error `500`)
        
        When successful, this creates a new version of the artifact, making it the most recent
        (and therefore official) version of the artifact.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{groupId}/artifacts/{artifactId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtifactMetaData])
                res.artifact_meta_data = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def update_artifact_state(self, request: operations.UpdateArtifactStateRequest) -> operations.UpdateArtifactStateResponse:
        r"""Update artifact state
        Updates the state of the artifact.  For example, you can use this to mark the latest
        version of an artifact as `DEPRECATED`.  The operation changes the state of the latest 
        version of the artifact.  If multiple versions exist, only the most recent is changed.
        
        This operation can fail for the following reasons:
        
        * No artifact with this `artifactId` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{groupId}/artifacts/{artifactId}/state", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateArtifactStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    