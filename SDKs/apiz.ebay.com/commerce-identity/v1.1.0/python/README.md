# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/apiz.ebay.com/commerce-identity/v1.1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.user.get_user()

if res.user_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### user

* `get_user` - This method retrieves the account profile information for an authenticated user, which requires a User access token. What is returned is controlled by the scopes. For a business account you use the default scope commerce.identity.readonly, which returns all the fields in the businessAccount container. These are returned because this is all public information. For an individual account, the fields returned in the individualAccount container are based on the scope you use. Using the default scope, only public information, such as eBay user ID, are returned. For details about what each scope returns, see the Identity API Overview. URLs for this method Production URL: https://apiz.ebay.com/commerce/identity/v1/user/ Sandbox URL: https://apiz.sandbox.ebay.com/commerce/identity/v1/user/ In the Sandbox, this method returns mock data. Note: You must use the correct scope or scopes for the data you want returned.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
