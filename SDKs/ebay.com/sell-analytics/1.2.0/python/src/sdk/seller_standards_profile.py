import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SellerStandardsProfile:
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

    
    def find_seller_standards_profiles(self, request: operations.FindSellerStandardsProfilesRequest) -> operations.FindSellerStandardsProfilesResponse:
        r"""This call retrieves all the standards profiles for the associated seller. A standards profile is a set of eBay seller metrics and the seller's associated compliance values (either TOP_RATED, ABOVE_STANDARD, or BELOW_STANDARD). A seller's multiple profiles are distinguished by two criteria, a &quot;program&quot; and a &quot;cycle.&quot; A profile's program is one of three regions where the seller may have done business, or PROGRAM_GLOBAL to indicate all marketplaces where the seller has done business. The cycle value specifies whether the standards compliance values were determined at the last official eBay evaluation or at the time of the request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/seller_standards_profile"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FindSellerStandardsProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FindSellerStandardsProfilesResponse])
                res.find_seller_standards_profiles_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_seller_standards_profile(self, request: operations.GetSellerStandardsProfileRequest) -> operations.GetSellerStandardsProfileResponse:
        r"""This call retrieves a single standards profile for the associated seller. A standards profile is a set of eBay seller metrics and the seller's associated compliance values (either TOP_RATED, ABOVE_STANDARD, or BELOW_STANDARD). A seller can have multiple profiles distinguished by two criteria, a &quot;program&quot; and a &quot;cycle.&quot; A profile's program is one of three regions where the seller may have done business, or PROGRAM_GLOBAL to indicate all marketplaces where the seller has done business. The cycle value specifies whether the standards compliance values were determined at the last official eBay evaluation (CURRENT) or at the time of the request (PROJECTED). Both cycle and a program values are required URI parameters for this method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/seller_standards_profile/{program}/{cycle}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSellerStandardsProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StandardsProfile])
                res.standards_profile = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    