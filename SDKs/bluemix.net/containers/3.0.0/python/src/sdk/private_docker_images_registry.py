import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PrivateDockerImagesRegistry:
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

    
    def get_registry_namespaces(self, request: operations.GetRegistryNamespacesRequest) -> operations.GetRegistryNamespacesResponse:
        r"""Retrieve the namespace of an organization.
        This endpoint retrieves the namespace that was set for the organization that owns the current space (corresponding IBM Containers command: `cf ic namespace get`).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/registry/namespaces"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegistryNamespacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Namespace])
                res.namespace = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_registry_namespaces_namespace_(self, request: operations.GetRegistryNamespacesNamespaceRequest) -> operations.GetRegistryNamespacesNamespaceResponse:
        r"""Check the availability of a namespace
        This endpoint checks whether a namespace is available in Bluemix and can be used to set up the private Docker images registry for an organization. When a HTTP code `201 Ok` is returned, the namespace is already assigned to another organization in Bluemix and cannot be used. When a HTTP code `404 Not found` is returned, the namespace can be used for your organization. 
        
         Consider the following rules when choosing a namespace for your organization: 
        
        - Every organization can have one namespace at a time only 
        - The namespace must be unique in Bluemix. 
        - The namespace can be 4-30 characters long. 
        - The namespace must start with at least one letter or number. 
        - The namespace can only contain lowercase letters, numbers or underscores (_). 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registry/namespaces/{namespace}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegistryNamespacesNamespaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Namespace])
                res.namespace = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def put_registry_namespaces_namespace_(self, request: operations.PutRegistryNamespacesNamespaceRequest) -> operations.PutRegistryNamespacesNamespaceResponse:
        r"""Set a namespace for your private Bluemix registry.
        Set up your own Docker images registry in Bluemix by defining a namespace for your organization (corresponding IBM Containers command: `cf ic namespace set <namespace>`). The namespace is used to generate a unique URL to your private Bluemix registry. In your private registry you store all Docker images that you want to share across your organization. To create a container from an image, you must first push the image to your registry. 
        
         The namespace cannot be changed after is has been set. Consider the following rules to choose a namespace for your organization: 
        
        - Every organization can have one namespace at a time only 
        - The namespace must be unique in Bluemix. 
        - The namespace can be 4-30 characters long. 
        - The namespace must start with at least one letter or number. 
        - The namespace can only contain lowercase letters, numbers or underscores (_).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registry/namespaces/{namespace}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRegistryNamespacesNamespaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Namespace])
                res.namespace = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    