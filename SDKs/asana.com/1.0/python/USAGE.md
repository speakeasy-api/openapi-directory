<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        personal_access_token=shared.SchemePersonalAccessToken(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    )
)
    
req = operations.CreateAttachmentForTaskRequest(
    path_params=operations.CreateAttachmentForTaskPathParams(
        task_gid="delectus",
    ),
    query_params=operations.CreateAttachmentForTaskQueryParams(
        limit=4628205130743140522,
        offset="eveniet",
        opt_fields=[
            "sit",
            "est",
        ],
        opt_pretty=True,
    ),
    request=shared.AttachmentRequest(
        file=shared.AttachmentRequestFile(
            content="ipsa".encode(),
            file="assumenda",
        ),
        name="id",
        resource_subtype="asana_file_attachments",
        url="ipsam",
    ),
)
    
res = s.attachments.create_attachment_for_task(req)

if res.create_attachment_for_task_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->