import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class ContainerGroups:
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

    
    def delete_containers_groups_name_or_id_(self, request: operations.DeleteContainersGroupsNameOrIDRequest) -> operations.DeleteContainersGroupsNameOrIDResponse:
        r"""Stop and delete all container instances in a container group.
        Stops and deletes the container instances that run in a container group (corresponding IBM Containers command: `cf ic group rm <group_name>`). When you delete a container group, all floating private IP addresses are released.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/groups/{name_or_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteContainersGroupsNameOrIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_groups(self, request: operations.GetContainersGroupsRequest) -> operations.GetContainersGroupsResponse:
        r"""List all container groups in a space
        This endpoint returns a list of all container groups in a space independent of their current state. (corresponding IBM Containers command: `cf ic group list`).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/groups"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[Any]])
                res.containers_groups_get_list_items = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_groups_name_or_id_(self, request: operations.GetContainersGroupsNameOrIDRequest) -> operations.GetContainersGroupsNameOrIDResponse:
        r"""Inspect a container group.
        This endpoint retrieves detailed information about a container group with a given name (corresponding IBM Containers command: `cf ic group inspect GROUP`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/groups/{name_or_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersGroupsNameOrIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.containers_groups_name_or_id_get_details = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def patch_containers_groups_name_or_id_(self, request: operations.PatchContainersGroupsNameOrIDRequest) -> operations.PatchContainersGroupsNameOrIDResponse:
        r"""Update a container group.
        Update the number of container instances that run in a container group (corresponding IBM Containers command: `cf ic group update <option> <group>`). 
        
        Note: You can run only one update at a time.  
        
         The desired number is the number of container instances that you require. It must be within the current limits of Max and Min. To increase the number of desired container instances above the Max value, you must first execute an update on the Max value. Once this update is completed, you can increase the desired number of container instances. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/groups/{name_or_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchContainersGroupsNameOrIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_groups(self, request: operations.PostContainersGroupsRequest) -> operations.PostContainersGroupsResponse:
        r"""Create and start a container group.
        This endpoint creates and starts a new container group in your space. A container group consists of two or more single containers that are all created from the same container image and as a consequence are configured in the same way. Container groups offer different options at no cost to make your app highly available, such as in-built load balancing, auto-recovery of unhealthy container instances, and auto-scaling of container instances based on CPU and memory usage.
        
        To create a container group with IBM Containers, you must at least define a container group name and the image that the container group is based on. Required attributes:
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        - Name: The container group name must start with a letter and then can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-). 
        - Image: You must include the full path to the image in your private Bluemix registry in the format:`registry.ng.bluemix.net/<namespace>/<image>`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/groups"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainersGroupsPostCreatedInfo])
                res.containers_groups_post_created_info = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_groups_name_or_id_maproute(self, request: operations.PostContainersGroupsNameOrIDMaprouteRequest) -> operations.PostContainersGroupsNameOrIDMaprouteResponse:
        r"""Map a public route to a container group.
        If you want your container group to be accessible from the Internet, you need to expose a public port and map a public route to it (corresponding IBM Containers command: `cf ic route map -n <host> -d <domain> <group>`). Every route consists of the host name and domain.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/groups/{name_or_id}/maproute", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersGroupsNameOrIDMaprouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainersGroupsNameOrIDMaproutePostInfo])
                res.containers_groups_name_or_id_maproute_post_info = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_groups_name_or_id_unmaproute(self, request: operations.PostContainersGroupsNameOrIDUnmaprouteRequest) -> operations.PostContainersGroupsNameOrIDUnmaprouteResponse:
        r"""Unmap a public route from a container group
        This endpoint unmaps a public route from a container group (corresponding IBM Containers command: `cf ic route unmap -n <host> -d <domain> <group>`). If no other public route is mapped to the container group, then the container group is no longer available from the internet. 
        
         When you unmap a route from a container group, the route is not deleted and can be mapped to other container groups. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/groups/{name_or_id}/unmaproute", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersGroupsNameOrIDUnmaprouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainersGroupsNameOrIDMaproutePostInfo])
                res.containers_groups_name_or_id_maproute_post_info = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    