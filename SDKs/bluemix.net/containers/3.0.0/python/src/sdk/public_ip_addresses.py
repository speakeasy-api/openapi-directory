import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class PublicIPAddresses:
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

    
    def get_containers_floating_ips(self, request: operations.GetContainersFloatingIpsRequest) -> operations.GetContainersFloatingIpsResponse:
        r"""List available public IP addresses in a space
        This endpoint returns a list of all public IP addresses that are allocated to a space and not bound to a container. If you want to list all public IP addresses that are allocated to a space, even those that are already bound to a container, use the `all` query parameter (corrsponding IBM Containers command: `cf ic ip list`).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/floating-ips"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersFloatingIpsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[Any]])
                res.floating_ips = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_floating_ips_request(self, request: operations.PostContainersFloatingIpsRequestRequest) -> operations.PostContainersFloatingIpsRequestResponse:
        r"""Request a public IP address for a space
        This endpoint requests a new public IP address for a space (corresponding IBM Containers command: `cf ic ip request`). The number of public IP addresses depends on the quota that is assigned to the space. If there is not enough quota left to request a new public IP address, you can either contact your organization manager to increase the quota, or unbind an existing IP address from a container by running `cf ic ip unbind <ip_adress> <container>` command, or  calling the `POST /container/{name_or_id}/floating-ips/{ip}/unbind` endpoint.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/floating-ips/request"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersFloatingIpsRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.post_containers_floating_ips_request_200_application_json_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_floating_ips_ip_release(self, request: operations.PostContainersFloatingIpsIPReleaseRequest) -> operations.PostContainersFloatingIpsIPReleaseResponse:
        r"""Release public IP address
        This endpoint releases a public IP address from a space (corresponding IBM Containers command: `cf ic ip release <ip_adress>`). The public IP address is no longer allocated to the space. If a container was bound to the IP address, it is automatically unbound.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/floating-ips/{ip}/release", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersFloatingIpsIPReleaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_name_or_id_floating_ips_ip_bind(self, request: operations.PostContainersNameOrIDFloatingIpsIPBindRequest) -> operations.PostContainersNameOrIDFloatingIpsIPBindResponse:
        r"""Bind a public IP address to a single container
        This endpoint binds an available public IP address to a single container (corresponding IBM Containers command: `cf ic ip bind <ip_adress> <container>`). After a container is bound to a public IP address, it can be accessed at `https://<public_ip_adress>:<public_port>`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/floating-ips/{ip}/bind", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersNameOrIDFloatingIpsIPBindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
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

    
    def post_containers_name_or_id_floating_ips_ip_unbind(self, request: operations.PostContainersNameOrIDFloatingIpsIPUnbindRequest) -> operations.PostContainersNameOrIDFloatingIpsIPUnbindResponse:
        r"""Unbind a public IP address from a container
        This endpoint unbinds a public IP address from a container (corresponding IBM Containers command: `cf ic ip unbind <ip_adress> <container>`). The container that is unbound from the IP address will not be accessible from the internet anymore. The public IP address will be further allocated to the space and can be used to be bound to other containers. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/floating-ips/{ip}/unbind", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersNameOrIDFloatingIpsIPUnbindResponse(status_code=r.status_code, content_type=content_type)
        
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

    