
__doc__ = """ SDK Documentation: https://developers.exlibrisgroup.com/alma/apis/ - Detailed documentation on these APIs at the Ex Libris Developer Network."""
import requests
from sdk.models import shared
from . import utils

from .lending_requests import LendingRequests
from .printouts import Printouts
from .requested_resources import RequestedResources
from .test import Test


SERVERS = [
	"https://api-eu.hosted.exlibrisgroup.com",
	"https://api-na.hosted.exlibrisgroup.com",
	"https://api-ap.hosted.exlibrisgroup.com",
	"https://api-cn.hosted.exlibrisgroup.com",
	"https://api-ca.hosted.exlibrisgroup.com",
]


class SDK:
    r"""SDK Documentation: https://developers.exlibrisgroup.com/alma/apis/ - Detailed documentation on these APIs at the Ex Libris Developer Network."""
    lending_requests: LendingRequests
    printouts: Printouts
    requested_resources: RequestedResources
    test: Test

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        self._init_sdks()
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.lending_requests = LendingRequests(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.printouts = Printouts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.requested_resources = RequestedResources(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.test = Test(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    