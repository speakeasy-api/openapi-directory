import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class SingleContainers:
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

    
    def delete_containers_name_or_id_(self, request: operations.DeleteContainersNameOrIDRequest) -> operations.DeleteContainersNameOrIDResponse:
        r"""Remove a single container
        Remove a single container that is identified by container ID or name from a space (corresponding IBM Containers command: `cf ic delete <container>`). The container must be stopped before it can be deleted, unless the `force` query parameter is set to true.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteContainersNameOrIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_json(self, request: operations.GetContainersJSONRequest) -> operations.GetContainersJSONResponse:
        r"""List single containers in a space.
        This endpoint returns a list of all single containers in a space that are currently in a running state (corresponding IBM Containers command: `cf ic ps`). To list all single containers independent of their current state, set the `all` query parameter to true.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/json"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[Any]])
                res.containers = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_id_status(self, request: operations.GetContainersIDStatusRequest) -> operations.GetContainersIDStatusResponse:
        r"""List the current state of a container.
        This endpoint returns the current state of a container. This state can either be a transient state, such as BUILDING and NETWORKING, or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{id}/status", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersIDStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_container_status = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_name_or_id_json(self, request: operations.GetContainersNameOrIDJSONRequest) -> operations.GetContainersNameOrIDJSONResponse:
        r"""Inspect a single container
        This endpoint retrieves detailed information about a single container (corresponding IBM Containers command: `cf ic inspect <container>`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersNameOrIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.container_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_create(self, request: operations.PostContainersCreateRequest) -> operations.PostContainersCreateResponse:
        r"""Create and start a single container
        This endpoint creates and starts a single container in your space based on the Docker image that is specified in the Image field of the request json. A single container in IBM Containers is similar to a container that you create in your local Docker environment. Single containers are a good way to start with IBM Containers and to learn about how containers work in the IBM Cloud and the features that IBM Containers provides. They are also recommended when you want to run simple app tests or during the development process of an app. 
        
         In the Docker API there are two separate APIs to create and start a container. However in IBM Containers a container is created and started in a single API call. Therefore, this API merges parameters from the Docker API to create and start container. 
        
         To create a container with IBM Containers, you must at least define the image that the container is based on.
        
        - Image: You must include the full path to the image in your private Bluemix registry in the format: `registry.ng.bluemix.net/<namespace>/<image>`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/create"
        
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

        res = operations.PostContainersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.container_id = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_name_or_id_pause(self, request: operations.PostContainersNameOrIDPauseRequest) -> operations.PostContainersNameOrIDPauseResponse:
        r"""Pause a single container
        Pause all processes in a running single container with a given container ID or name (corresponding IBM Containers command: `cf ic pause <container>`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/pause", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersNameOrIDPauseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_name_or_id_rename(self, request: operations.PostContainersNameOrIDRenameRequest) -> operations.PostContainersNameOrIDRenameResponse:
        r"""Rename a single container
        Change the current name of an existing single container that is identified by the container ID or name (corresponding IBM Containers command: `cf ic rename <old_name> <new_name>`). 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/rename", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersNameOrIDRenameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_name_or_id_restart(self, request: operations.PostContainersNameOrIDRestartRequest) -> operations.PostContainersNameOrIDRestartResponse:
        r"""Restart a single container
        Restart a container with a given container ID or name (corresponding IBM Containers command: `cf ic restart <container>`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/restart", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersNameOrIDRestartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_name_or_id_start(self, request: operations.PostContainersNameOrIDStartRequest) -> operations.PostContainersNameOrIDStartResponse:
        r"""Start a single container
        Start a single container with a given container name or ID (corresponding IBM Containers command: `cf ic start <container>`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/start", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersNameOrIDStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_name_or_id_stop(self, request: operations.PostContainersNameOrIDStopRequest) -> operations.PostContainersNameOrIDStopResponse:
        r"""Stop a single container
        Stop a single container with a given container name or ID (corresponding IBM Containers command: `cf ic stop <container>`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/stop", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersNameOrIDStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_name_or_id_unpause(self, request: operations.PostContainersNameOrIDUnpauseRequest) -> operations.PostContainersNameOrIDUnpauseResponse:
        r"""Unpause a single container
        Unpause all processes that are currently stopped inside a single containers with a given container ID or name (corresponding IBM Containers command: `cf ic unpause <container>`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/unpause", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersNameOrIDUnpauseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    