<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddTagsToOnPremisesInstancesRequest(
    add_tags_to_on_premises_instances_input=shared.AddTagsToOnPremisesInstancesInput(
        instance_names=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        tags=[
            shared.Tag(
                key="nulla",
                value="corrupti",
            ),
            shared.Tag(
                key="illum",
                value="vel",
            ),
            shared.Tag(
                key="error",
                value="deserunt",
            ),
        ],
    ),
    x_amz_algorithm="suscipit",
    x_amz_content_sha256="iure",
    x_amz_credential="magnam",
    x_amz_date="debitis",
    x_amz_security_token="ipsa",
    x_amz_signature="delectus",
    x_amz_signed_headers="tempora",
    x_amz_target="CodeDeploy_20141006.AddTagsToOnPremisesInstances",
)
    
res = s.add_tags_to_on_premises_instances(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->