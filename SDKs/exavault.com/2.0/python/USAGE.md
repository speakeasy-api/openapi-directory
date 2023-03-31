<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAccountRequest(
    ev_access_token="19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
    ev_api_key="exampleaccount-zwSuWUZ8S38h33qPS8v0s",
    include="masterUser",
)
    
res = s.account.get_account(req)

if res.account_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->