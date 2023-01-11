import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def private_project_article_delete(self, request: operations.PrivateProjectArticleDeleteRequest) -> operations.PrivateProjectArticleDeleteResponse:
        r"""Delete project article
        Delete project article
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}/articles/{article_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectArticleDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_article_details(self, request: operations.PrivateProjectArticleDetailsRequest) -> operations.PrivateProjectArticleDetailsResponse:
        r"""Project article details
        Project article details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}/articles/{article_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectArticleDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProjectArticle])
                res.project_article = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_article_file(self, request: operations.PrivateProjectArticleFileRequest) -> operations.PrivateProjectArticleFileResponse:
        r"""Project article file details
        Project article file details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}/articles/{article_id}/files/{file_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectArticleFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrivateFile])
                res.private_file = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_article_files(self, request: operations.PrivateProjectArticleFilesRequest) -> operations.PrivateProjectArticleFilesResponse:
        r"""Project article list files
        List article files
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}/articles/{article_id}/files", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectArticleFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PrivateFile]])
                res.private_files = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_articles_create(self, request: operations.PrivateProjectArticlesCreateRequest) -> operations.PrivateProjectArticlesCreateResponse:
        r"""Create project article
        Create a new Article and associate it with this project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}/articles", request.path_params)
        
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

        res = operations.PrivateProjectArticlesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Location])
                res.location = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_articles_list(self, request: operations.PrivateProjectArticlesListRequest) -> operations.PrivateProjectArticlesListResponse:
        r"""List project articles
        List project articles
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}/articles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectArticlesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Article]])
                res.articles = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_collaborator_delete(self, request: operations.PrivateProjectCollaboratorDeleteRequest) -> operations.PrivateProjectCollaboratorDeleteResponse:
        r"""Remove project collaborator
        Remove project collaborator
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}/collaborators/{user_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectCollaboratorDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_collaborators_invite(self, request: operations.PrivateProjectCollaboratorsInviteRequest) -> operations.PrivateProjectCollaboratorsInviteResponse:
        r"""Invite project collaborators
        Invite users to collaborate on project or view the project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}/collaborators", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectCollaboratorsInviteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseMessage])
                res.response_message = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_collaborators_list(self, request: operations.PrivateProjectCollaboratorsListRequest) -> operations.PrivateProjectCollaboratorsListResponse:
        r"""List project collaborators
        List Project collaborators and invited users
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}/collaborators", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectCollaboratorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ProjectCollaborator]])
                res.project_collaborators = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_create(self, request: operations.PrivateProjectCreateRequest) -> operations.PrivateProjectCreateResponse:
        r"""Create project
        Create a new project
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/projects"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Location])
                res.location = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_delete(self, request: operations.PrivateProjectDeleteRequest) -> operations.PrivateProjectDeleteResponse:
        r"""Delete project
        A project can be deleted only if: - it is not public - it does not have public articles.
        
        When an individual project is deleted, all the articles are moved to my data of each owner.
        
        When a group project is deleted, all the articles and files are deleted as well. Only project owner, group admin and above can delete a project.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_details(self, request: operations.PrivateProjectDetailsRequest) -> operations.PrivateProjectDetailsResponse:
        r"""View project details
        View a private project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProjectCompletePrivate])
                res.project_complete_private = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_leave(self, request: operations.PrivateProjectLeaveRequest) -> operations.PrivateProjectLeaveResponse:
        r"""Private Project Leave
        Please note: project's owner cannot leave the project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}/leave", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectLeaveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_note(self, request: operations.PrivateProjectNoteRequest) -> operations.PrivateProjectNoteResponse:
        r"""Project note details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}/notes/{note_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectNoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProjectNotePrivate])
                res.project_note_private = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_note_delete(self, request: operations.PrivateProjectNoteDeleteRequest) -> operations.PrivateProjectNoteDeleteResponse:
        r"""Delete project note
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}/notes/{note_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectNoteDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_note_update(self, request: operations.PrivateProjectNoteUpdateRequest) -> operations.PrivateProjectNoteUpdateResponse:
        r"""Update project note
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}/notes/{note_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectNoteUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            res.headers = r.headers
            
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_notes_create(self, request: operations.PrivateProjectNotesCreateRequest) -> operations.PrivateProjectNotesCreateResponse:
        r"""Create project note
        Create a new project note
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}/notes", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectNotesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Location])
                res.location = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_notes_list(self, request: operations.PrivateProjectNotesListRequest) -> operations.PrivateProjectNotesListResponse:
        r"""List project notes
        List project notes
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}/notes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectNotesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ProjectNote]])
                res.project_notes = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_publish(self, request: operations.PrivateProjectPublishRequest) -> operations.PrivateProjectPublishResponse:
        r"""Private Project Publish
        Publish a project. Possible after all items inside it are public
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}/publish", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectPublishResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseMessage])
                res.response_message = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_project_update(self, request: operations.PrivateProjectUpdateRequest) -> operations.PrivateProjectUpdateResponse:
        r"""Update project
        Updating an project by passing body parameters
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/projects/{project_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            res.headers = r.headers
            
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_projects_list(self, request: operations.PrivateProjectsListRequest) -> operations.PrivateProjectsListResponse:
        r"""Private Projects
        List private projects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/projects"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ProjectPrivate]])
                res.project_privates = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_projects_search(self, request: operations.PrivateProjectsSearchRequest) -> operations.PrivateProjectsSearchResponse:
        r"""Private Projects search
        Search inside the private projects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/projects/search"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateProjectsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ProjectPrivate]])
                res.project_privates = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def project_articles(self, request: operations.ProjectArticlesRequest) -> operations.ProjectArticlesResponse:
        r"""Public Project Articles
        List articles in project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{project_id}/articles", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectArticlesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Article]])
                res.articles = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def project_details(self, request: operations.ProjectDetailsRequest) -> operations.ProjectDetailsResponse:
        r"""Public Project
        View a project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{project_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProjectComplete])
                res.project_complete = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def projects_list(self, request: operations.ProjectsListRequest) -> operations.ProjectsListResponse:
        r"""Public Projects
        Returns a list of public projects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/projects"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Project]])
                res.projects = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def projects_search(self, request: operations.ProjectsSearchRequest) -> operations.ProjectsSearchResponse:
        r"""Public Projects Search
        Returns a list of public articles
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/projects/search"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Project]])
                res.projects = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 500:
            pass

        return res

    