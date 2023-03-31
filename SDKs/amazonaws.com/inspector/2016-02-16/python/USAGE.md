<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddAttributesToFindingsRequest(
    add_attributes_to_findings_request=shared.AddAttributesToFindingsRequest(
        attributes=[
            shared.Attribute(
                key="provident",
                value="distinctio",
            ),
            shared.Attribute(
                key="quibusdam",
                value="unde",
            ),
            shared.Attribute(
                key="nulla",
                value="corrupti",
            ),
        ],
        finding_arns=[
            "vel",
            "error",
            "deserunt",
            "suscipit",
        ],
    ),
    x_amz_algorithm="iure",
    x_amz_content_sha256="magnam",
    x_amz_credential="debitis",
    x_amz_date="ipsa",
    x_amz_security_token="delectus",
    x_amz_signature="tempora",
    x_amz_signed_headers="suscipit",
    x_amz_target="InspectorService.AddAttributesToFindings",
)
    
res = s.add_attributes_to_findings(req)

if res.add_attributes_to_findings_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->