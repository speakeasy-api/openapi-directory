import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Collection:
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

    
    def add_score_to_collection(self, request: operations.AddScoreToCollectionRequest) -> operations.AddScoreToCollectionResponse:
        r"""Add a score to the collection
        This operation will add a score to a collection. The default behavior will make the score available across multiple collections.
        You must have the capability `canAddScores` on the provided `collection` to perform the action.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection}/scores/{score}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AddScoreToCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScoreDetails])
                res.score_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def create_collection(self, request: operations.CreateCollectionRequest) -> operations.CreateCollectionResponse:
        r"""Create a new collection
        This method will create a new collection and add it to your `root` collection.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/collections"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Collection])
                res.collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def delete_collection(self, request: operations.DeleteCollectionRequest) -> operations.DeleteCollectionResponse:
        r"""Delete the collection
        This method will schedule the deletion of the collection. Until deleted, the collection will be available in the `trash`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def delete_score_from_collection(self, request: operations.DeleteScoreFromCollectionRequest) -> operations.DeleteScoreFromCollectionResponse:
        r"""Delete a score from the collection
        This method will delete a score from the collection. Unlike [`DELETE /scores/{score}`](#operation/deleteScore), this score will not remove the score from your account, but only from the collection.
        This can be used to *move* a score from one collection to another, or simply remove a score from one collection when this one is contained in multiple collections.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection}/scores/{score}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteScoreFromCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def edit_collection(self, request: operations.EditCollectionRequest) -> operations.EditCollectionResponse:
        r"""Update a collection's metadata
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Collection])
                res.collection = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def get_collection(self, request: operations.GetCollectionRequest) -> operations.GetCollectionResponse:
        r"""Get collection details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Collection])
                res.collection = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def list_collection_scores(self, request: operations.ListCollectionScoresRequest) -> operations.ListCollectionScoresResponse:
        r"""List the scores contained in a collection
        Use this method to list the scores contained in a collection.
        If no sort option is provided, the scores are sorted by `modificationDate` `desc`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection}/scores", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCollectionScoresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ScoreDetails]])
                res.score_details = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def list_collections(self, request: operations.ListCollectionsRequest) -> operations.ListCollectionsResponse:
        r"""List the collections
        Use this method to list the user's collections contained in `parent` (by default in the `root` collection).
        If no sort option is provided, the collections are sorted by `creationDate` `desc`.
        
        Note that this method will not include the `parent` collection in the listing.
        For example, if you need the details of the `root` collection, you can use `GET /v2/collections/root`.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/collections"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCollectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Collection]])
                res.collections = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def untrash_collection(self, request: operations.UntrashCollectionRequest) -> operations.UntrashCollectionResponse:
        r"""Untrash a collection
        This method will restore the collection by removing it from the `trash` and add it back to the `root` collection.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection}/untrash", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UntrashCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    