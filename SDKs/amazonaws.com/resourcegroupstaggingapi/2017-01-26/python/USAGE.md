<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.DescribeReportCreationRequest(
    headers=operations.DescribeReportCreationHeaders(
        x_amz_algorithm="placeat",
        x_amz_content_sha256="doloribus",
        x_amz_credential="quibusdam",
        x_amz_date="pariatur",
        x_amz_security_token="sint",
        x_amz_signature="ipsam",
        x_amz_signed_headers="qui",
        x_amz_target="ResourceGroupsTaggingAPI_20170126.DescribeReportCreation",
    ),
    request={
        "dolores": "aut",
        "est": "nobis",
    },
)
    
res = s.describe_report_creation(req)

if res.describe_report_creation_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->