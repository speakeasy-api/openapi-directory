import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Score:
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

    
    def add_score_collaborator(self, request: operations.AddScoreCollaboratorRequest) -> operations.AddScoreCollaboratorResponse:
        r"""Add a new collaborator
        Share a score with a single user or a group. This API call allows to add, invite and update the collaborators of a resource.
        - To add an existing Flat user to the resource, specify its unique identifier in the `user` property.
        - To invite an external user to the resource, specify its email in the `userEmail` property.
        - To add a Flat group to the resource, specify its unique identifier in the `group` property.
        - To update an existing collaborator, process the same request with different rights.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/collaborators", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddScoreCollaboratorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceCollaborator])
                res.resource_collaborator = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
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

    
    def add_score_track(self, request: operations.AddScoreTrackRequest) -> operations.AddScoreTrackResponse:
        r"""Add a new video or audio track to the score
        Use this method to add new track to the score. This track can then be played on flat.io or in an embedded score.
        This API method support medias hosted on SoundCloud, YouTube and Vimeo.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/tracks", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddScoreTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScoreTrack])
                res.score_track = out
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

    
    def create_score(self, request: operations.CreateScoreRequest) -> operations.CreateScoreResponse:
        r"""Create a new score
        Use this API method to **create a new music score in the current User account**. You will need a MusicXML 3 (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`), a MIDI (`audio/midi`), Guitar Pro (GP3, GP4, GP5, GPX, GP), PowerTab, TuxGuitar, or MuseScore file to create the new Flat document.
        
        This API call will automatically create the first revision of the document, the score can be modified by the using our web application or by uploading a new revision of this file (`POST /v2/scores/{score}/revisions/{revision}`).
        
        The currently authenticated user will be granted owner of the file and will be able to add other collaborators (users and groups).
        
        If no `collection` is specified, the API will create the score in the most appropriate collection. This can be the `root` collection or a different collection based on the user's settings or API authentication method.
        If a `collection` is specified and this one has more public privacy settings than the score (e.g. `public` vs `private` for the score), the privacy settings of the created score will be adjusted to the collection ones.
        You can check the adjusted privacy settings in the returned score `privacy`, and optionally adjust these settings if needed using `PUT /scores/{score}`.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/scores"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateScoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScoreDetails])
                res.score_details = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def create_score_revision(self, request: operations.CreateScoreRevisionRequest) -> operations.CreateScoreRevisionResponse:
        r"""Create a new revision
        Update a score by uploading a new revision for this one.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/revisions", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateScoreRevisionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScoreRevision])
                res.score_revision = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
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

    
    def delete_score(self, request: operations.DeleteScoreRequest) -> operations.DeleteScoreResponse:
        r"""Delete a score
        This method can be used by the owner/admin (`aclAdmin` rights) of a score as well as regular collaborators.
        
        When called by an owner/admin, it will schedule the deletion of the score, its revisions, and complete history.
        The score won't be accessible anymore after calling this method and the user's quota will directly be updated.
        
        When called by a regular collaborator (`aclRead` / `aclWrite`), the score will be unshared (i.e. removed from the account & own collections).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteScoreResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def delete_score_comment(self, request: operations.DeleteScoreCommentRequest) -> operations.DeleteScoreCommentResponse:
        r"""Delete a comment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/comments/{comment}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteScoreCommentResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def delete_score_track(self, request: operations.DeleteScoreTrackRequest) -> operations.DeleteScoreTrackResponse:
        r"""Remove an audio or video track linked to the score
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/tracks/{track}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteScoreTrackResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def edit_score(self, request: operations.EditScoreRequest) -> operations.EditScoreResponse:
        r"""Edit a score's metadata
        This API method allows you to change the metadata of a score document (e.g. its `title` or `privacy`), all the properties are optional.
        
        To edit the file itself, create a new revision using the appropriate method (`POST /v2/scores/{score}/revisions/{revision}`).
        
        When editing the `title`, `subtitle`, `composer`, `lyricist`, `arranger` or `licenseText`, the metadatas will be instantly be updated, and a real-time action will be pushed to update the document lazily.
        This pending document modification will be automatically be saved as a new version by either a connected client or our internal versioning service.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditScoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScoreDetails])
                res.score_details = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
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

    
    def fork_score(self, request: operations.ForkScoreRequest) -> operations.ForkScoreResponse:
        r"""Fork a score
        This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.
        
        When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/fork", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ForkScoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScoreDetails])
                res.score_details = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
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

    
    def ger_user_likes(self, request: operations.GerUserLikesRequest) -> operations.GerUserLikesResponse:
        r"""List liked scores
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user}/likes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GerUserLikesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ScoreDetails]])
                res.score_details = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def get_group_scores(self, request: operations.GetGroupScoresRequest) -> operations.GetGroupScoresResponse:
        r"""List group's scores
        Get the list of scores shared with a group.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{group}/scores", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupScoresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ScoreDetails]])
                res.score_details = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def get_score(self, request: operations.GetScoreRequest) -> operations.GetScoreResponse:
        r"""Get a score's metadata
        Get the details of a score identified by the `score` parameter in the URL.
        The currently authenticated user must have at least a read access to the document to use this API call.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScoreDetails])
                res.score_details = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
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

    
    def get_score_collaborator(self, request: operations.GetScoreCollaboratorRequest) -> operations.GetScoreCollaboratorResponse:
        r"""Get a collaborator
        Get the information about a collaborator (User or Group).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/collaborators/{collaborator}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScoreCollaboratorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceCollaborator])
                res.resource_collaborator = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
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

    
    def get_score_collaborators(self, request: operations.GetScoreCollaboratorsRequest) -> operations.GetScoreCollaboratorsResponse:
        r"""List the collaborators
        This API call will list the different collaborators of a score and their rights on the document. The returned list will at least contain the owner of the document.
        
        Collaborators can be a single user (the object `user` will be populated) or a group (the object `group` will be populated).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/collaborators", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScoreCollaboratorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ResourceCollaborator]])
                res.resource_collaborators = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
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

    
    def get_score_comments(self, request: operations.GetScoreCommentsRequest) -> operations.GetScoreCommentsResponse:
        r"""List comments
        This method lists the different comments added on a music score (documents and inline) sorted by their post dates.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScoreCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ScoreComment]])
                res.score_comments = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
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

    
    def get_score_revision(self, request: operations.GetScoreRevisionRequest) -> operations.GetScoreRevisionResponse:
        r"""Get a score revision
        When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to get a specific
        revision metadata.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/revisions/{revision}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScoreRevisionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScoreRevision])
                res.score_revision = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
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

    
    def get_score_revision_data(self, request: operations.GetScoreRevisionDataRequest) -> operations.GetScoreRevisionDataResponse:
        r"""Get a score revision data
        Retrieve the file corresponding to a score revision (the following formats are available): Flat JSON/Adagio JSON `json`, MusicXML
        `mxl`/`xml`, MP3 `mp3`, WAV `wav`, MIDI `midi`, a tumbnail of the first page `thumbnail.png` or auto sync points `synchronizationPoints`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/revisions/{revision}/{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScoreRevisionDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.get_score_revision_data_200_application_json_binary_string = out
            if utils.match_content_type(content_type, "application/vnd.recordare.musicxml"):
                res.get_score_revision_data_200_application_vnd_recordare_musicxml_binary_string = r.content
            if utils.match_content_type(content_type, "application/vnd.recordare.musicxml+xml"):
                res.get_score_revision_data_200_application_vnd_recordare_musicxml_plus_xml_binary_string = r.content
            if utils.match_content_type(content_type, "audio/midi"):
                res.get_score_revision_data_200_audio_midi_binary_string = r.content
            if utils.match_content_type(content_type, "audio/mp3"):
                res.get_score_revision_data_200_audio_mp3_binary_string = r.content
            if utils.match_content_type(content_type, "audio/wav"):
                res.get_score_revision_data_200_audio_wav_binary_string = r.content
            if utils.match_content_type(content_type, "image/png"):
                res.get_score_revision_data_200_image_png_binary_string = r.content
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
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

    
    def get_score_revisions(self, request: operations.GetScoreRevisionsRequest) -> operations.GetScoreRevisionsResponse:
        r"""List the revisions
        When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to list all of them, sorted by last modification.
        
        Depending the plan of the account, this list can be trunked to the few last revisions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/revisions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScoreRevisionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ScoreRevision]])
                res.score_revisions = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
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

    
    def get_score_submissions(self, request: operations.GetScoreSubmissionsRequest) -> operations.GetScoreSubmissionsResponse:
        r"""List submissions related to the score
        This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/submissions", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScoreSubmissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssignmentSubmission]])
                res.assignment_submissions = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def get_score_track(self, request: operations.GetScoreTrackRequest) -> operations.GetScoreTrackResponse:
        r"""Retrieve the details of an audio or video track linked to a score
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/tracks/{track}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScoreTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScoreTrack])
                res.score_track = out
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

    
    def get_user_scores(self, request: operations.GetUserScoresRequest) -> operations.GetUserScoresResponse:
        r"""List user's scores
        Get the list of public scores owned by a User.
        
        **DEPRECATED**: Please note that the current behavior will be deprecrated on **2019-01-01**.
        This method will no longer list private and shared scores, but only public scores of a Flat account.
        If you want to access to private scores, please use the [Collections API](#tag/Collection) instead.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user}/scores", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserScoresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ScoreDetails]])
                res.score_details = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def list_score_tracks(self, request: operations.ListScoreTracksRequest) -> operations.ListScoreTracksResponse:
        r"""List the audio or video tracks linked to a score
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/tracks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListScoreTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ScoreTrack]])
                res.score_tracks = out
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

    
    def mark_score_comment_resolved(self, request: operations.MarkScoreCommentResolvedRequest) -> operations.MarkScoreCommentResolvedResponse:
        r"""Mark the comment as resolved
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/comments/{comment}/resolved", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MarkScoreCommentResolvedResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def mark_score_comment_unresolved(self, request: operations.MarkScoreCommentUnresolvedRequest) -> operations.MarkScoreCommentUnresolvedResponse:
        r"""Mark the comment as unresolved
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/comments/{comment}/resolved", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MarkScoreCommentUnresolvedResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def post_score_comment(self, request: operations.PostScoreCommentRequest) -> operations.PostScoreCommentResponse:
        r"""Post a new comment
        Post a document or a contextualized comment on a document.
        
        Please note that this method includes an anti-spam system for public scores. We don't guarantee that your comments will be accepted and displayed to end-user. Comments are be blocked by returning a `403` HTTP error and hidden from other users when the `spam` property is `true`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostScoreCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScoreComment])
                res.score_comment = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
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

    
    def remove_score_collaborator(self, request: operations.RemoveScoreCollaboratorRequest) -> operations.RemoveScoreCollaboratorResponse:
        r"""Delete a collaborator
        Remove the specified collaborator from the score
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/collaborators/{collaborator}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveScoreCollaboratorResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def untrash_score(self, request: operations.UntrashScoreRequest) -> operations.UntrashScoreResponse:
        r"""Untrash a score
        This method will remove the score from the `trash` collection and from the deletion queue, and add it back to the original collections.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/untrash", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UntrashScoreResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def update_score_comment(self, request: operations.UpdateScoreCommentRequest) -> operations.UpdateScoreCommentResponse:
        r"""Update an existing comment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/comments/{comment}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateScoreCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScoreComment])
                res.score_comment = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
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

    
    def update_score_track(self, request: operations.UpdateScoreTrackRequest) -> operations.UpdateScoreTrackResponse:
        r"""Update an audio or video track linked to a score
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/tracks/{track}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateScoreTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScoreTrack])
                res.score_track = out
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

    