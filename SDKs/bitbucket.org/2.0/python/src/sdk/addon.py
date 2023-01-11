import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Addon:
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

    
    def delete_addon(self, request: operations.DeleteAddonRequest) -> operations.DeleteAddonResponse:
        r"""Deletes the application for the user.
        
        This endpoint is intended to be used by Bitbucket Connect apps
        and only supports JWT authentication -- that is how Bitbucket
        identifies the particular installation of the app. Developers
        with applications registered in the \"Develop Apps\" section
        of Bitbucket Marketplace need not use this endpoint as
        updates for those applications can be sent out via the
        UI of that section.
        
        ```
        $ curl -X DELETE https://api.bitbucket.org/2.0/addon \
          -H \"Authorization: JWT <JWT Token>\"
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/addon"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAddonResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_addon_linkers_linker_key_values(self, request: operations.DeleteAddonLinkersLinkerKeyValuesRequest) -> operations.DeleteAddonLinkersLinkerKeyValuesResponse:
        r"""Delete all [linker](/cloud/bitbucket/modules/linker/) values for the
        specified linker of the authenticated application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/addon/linkers/{linker_key}/values", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAddonLinkersLinkerKeyValuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_addon_linkers_linker_key_values_value_id_(self, request: operations.DeleteAddonLinkersLinkerKeyValuesValueIDRequest) -> operations.DeleteAddonLinkersLinkerKeyValuesValueIDResponse:
        r"""Delete a single [linker](/cloud/bitbucket/modules/linker/) value
        of the authenticated application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/addon/linkers/{linker_key}/values/{value_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAddonLinkersLinkerKeyValuesValueIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_addon_linkers(self, request: operations.GetAddonLinkersRequest) -> operations.GetAddonLinkersResponse:
        r"""Gets a list of all [linkers](/cloud/bitbucket/modules/linker/)
        for the authenticated application.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/addon/linkers"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddonLinkersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_addon_linkers_linker_key_(self, request: operations.GetAddonLinkersLinkerKeyRequest) -> operations.GetAddonLinkersLinkerKeyResponse:
        r"""Gets a [linker](/cloud/bitbucket/modules/linker/) specified by `linker_key`
        for the authenticated application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/addon/linkers/{linker_key}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddonLinkersLinkerKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_addon_linkers_linker_key_values(self, request: operations.GetAddonLinkersLinkerKeyValuesRequest) -> operations.GetAddonLinkersLinkerKeyValuesResponse:
        r"""Gets a list of all [linker](/cloud/bitbucket/modules/linker/) values for the
        specified linker of the authenticated application.
        
        A linker value lets applications supply values to modify its regular expression.
        
        The base regular expression must use a Bitbucket-specific match group `(?K)`
        which will be translated to `([\w\-]+)`. A value must match this pattern.
        
        [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/addon/linkers/{linker_key}/values", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddonLinkersLinkerKeyValuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_addon_linkers_linker_key_values_value_id_(self, request: operations.GetAddonLinkersLinkerKeyValuesValueIDRequest) -> operations.GetAddonLinkersLinkerKeyValuesValueIDResponse:
        r"""Get a single [linker](/cloud/bitbucket/modules/linker/) value
        of the authenticated application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/addon/linkers/{linker_key}/values/{value_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddonLinkersLinkerKeyValuesValueIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_addon_linkers_linker_key_values(self, request: operations.PostAddonLinkersLinkerKeyValuesRequest) -> operations.PostAddonLinkersLinkerKeyValuesResponse:
        r"""Creates a [linker](/cloud/bitbucket/modules/linker/) value for the specified
        linker of authenticated application.
        
        A linker value lets applications supply values to modify its regular expression.
        
        The base regular expression must use a Bitbucket-specific match group `(?K)`
        which will be translated to `([\w\-]+)`. A value must match this pattern.
        
        [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/addon/linkers/{linker_key}/values", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAddonLinkersLinkerKeyValuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def put_addon(self, request: operations.PutAddonRequest) -> operations.PutAddonResponse:
        r"""Updates the application installation for the user.
        
        This endpoint is intended to be used by Bitbucket Connect apps
        and only supports JWT authentication -- that is how Bitbucket
        identifies the particular installation of the app. Developers
        with applications registered in the \"Develop Apps\" section
        of Bitbucket Marketplace need not use this endpoint as
        updates for those applications can be sent out via the
        UI of that section.
        
        A new, valid descriptor must be provided in the body of the
        PUT request.
        
        ```
        $ curl -X PUT https://api.bitbucket.org/2.0/addon \
          -H \"Authorization: JWT <JWT Token>\" \
          --header \"Content-Type: application/json\" \
          --data '{\"descriptor\": $NEW_DESCRIPTOR}'
        ```
        
        Note that the scopes of the application cannot be increased
        in the new descriptor nor reduced to none.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/addon"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAddonResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def put_addon_linkers_linker_key_values(self, request: operations.PutAddonLinkersLinkerKeyValuesRequest) -> operations.PutAddonLinkersLinkerKeyValuesResponse:
        r"""Bulk update [linker](/cloud/bitbucket/modules/linker/) values for the specified
        linker of the authenticated application.
        
        A linker value lets applications supply values to modify its regular expression.
        
        The base regular expression must use a Bitbucket-specific match group `(?K)`
        which will be translated to `([\w\-]+)`. A value must match this pattern.
        
        [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/addon/linkers/{linker_key}/values", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAddonLinkersLinkerKeyValuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    