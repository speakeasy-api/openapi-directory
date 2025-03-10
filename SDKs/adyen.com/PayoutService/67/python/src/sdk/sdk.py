"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from .initialization import Initialization
from .instant_payouts import InstantPayouts
from .reviewing import Reviewing

SERVERS = [
    "https://pal-test.adyen.com/pal/servlet/Payout/v67",
]
"""Contains the list of servers available to the SDK"""

class SDK:
    r"""A set of API endpoints that allow you to store payout details, confirm, or decline a payout.
    
    For more information, refer to [Online payouts](https://docs.adyen.com/online-payments/online-payouts).
    ## Authentication
    To use the Payout API, you need to have [two API credentials](https://docs.adyen.com/online-payments/online-payouts#payouts-to-bank-accounts-and-wallets): one for storing payout details and submitting payouts, and another one for confirming or declining payouts. If you don't have the required API credentials, contact our [Support Team](https://www.adyen.help/hc/en-us/requests/new).
    
    Both of these API credentials must be authenticated with [basic authentication](https://docs.adyen.com/development-resources/api-credentials#basic-authentication).The following example shows how to authenticate your request when submitting a payout:
    
    ```
    curl
    -U \"storePayout@Company.YOUR_COMPANY_ACCOUNT\":\"YOUR_BASIC_AUTHENTICATION_PASSWORD\" \
    -H \"Content-Type: application/json\" \
    ...
    ```
    
    ## Versioning
    Payments API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.
    
    For example:
    ```
    https://pal-test.adyen.com/pal/servlet/Payout/v67/payout
    ```
    
    ## Going live
    
    To authenticate to the live endpoints, you need [API credentials](https://docs.adyen.com/development-resources/api-credentials) from your live Customer Area.
    
    The live endpoint URLs contain a prefix which is unique to your company account:
    ```
    
    https://{PREFIX}-pal-live.adyenpayments.com/pal/servlet/Payout/v67/payout
    ```
    
    Get your `{PREFIX}` from your live Customer Area under **Developers** > **API URLs** > **Prefix**.
    """
    initialization: Initialization
    instant_payouts: InstantPayouts
    reviewing: Reviewing

    _client: requests_http.Session
    _security_client: requests_http.Session
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self,
                 server_url: str = None,
                 url_params: dict[str, str] = None,
                 client: requests_http.Session = None
                 ) -> None:
        """Instantiates the SDK configuring it with the provided parameters.
        
        :param server_url: The server URL to use for all operations
        :type server_url: str
        :param url_params: Parameters to optionally template the server URL with
        :type url_params: dict[str, str]
        :param client: The requests.Session HTTP client to use for all operations
        :type client: requests_http.Session        
        """
        self._client = requests_http.Session()
        
        
        if server_url is not None:
            if url_params is not None:
                self._server_url = utils.template_url(server_url, url_params)
            else:
                self._server_url = server_url

        if client is not None:
            self._client = client
        
        self._security_client = self._client
        

        self._init_sdks()
    
    def _init_sdks(self):
        self.initialization = Initialization(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.instant_payouts = InstantPayouts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.reviewing = Reviewing(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
    