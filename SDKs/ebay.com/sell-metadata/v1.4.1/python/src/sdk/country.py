import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Country:
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

    
    def get_sales_tax_jurisdictions(self, request: operations.GetSalesTaxJurisdictionsRequest) -> operations.GetSalesTaxJurisdictionsResponse:
        r"""This method retrieves all the sales tax jurisdictions for the country that you specify in the countryCode path parameter. Countries with valid sales tax jurisdictions are Canada and the US. The response from this call tells you the jurisdictions for which a seller can configure tax tables. Although setting up tax tables is optional, you can use the createOrReplaceSalesTax in the Account API call to configure the tax tables for the jurisdictions you sell to.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/country/{countryCode}/sales_tax_jurisdiction", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSalesTaxJurisdictionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SalesTaxJurisdictions])
                res.sales_tax_jurisdictions = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    