import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CatalogsGlobal:
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

    
    def catalog_index(self) -> operations.CatalogIndexResponse:
        r"""Get the index of the catalog API
        The operation will give you all the operations you will be able to do and all the LOV used in this API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/user/catalogs/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CatalogIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CatalogIndex])
                res.catalog_index = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def catalog_get_beez_up_columns(self) -> operations.CatalogGetBeezUpColumnsResponse:
        r"""Get the BeezUP columns
        Get the BeezUP columns, this columns are used for mapping during the manual catalog importation process.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/user/catalogs/beezupColumns"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CatalogGetBeezUpColumnsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.BeezUpColumnConfiguration]])
                res.beez_up_column_configurations = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    