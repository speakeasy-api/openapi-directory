<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = operations.CreateAttachmentForObjectRequest(
    attachment_request=shared.AttachmentRequest(
        connect_to_app=False,
        file=shared.AttachmentRequestFile(
            content="corrupti".encode(),
            file="provident",
        ),
        name="distinctio",
        parent="quibusdam",
        resource_subtype="external",
        url="unde",
    ),
    opt_fields=[
        "corrupti",
        "illum",
        "vel",
        "error",
    ],
    opt_pretty=False,
)
    
res = s.attachments.create_attachment_for_object(req)

if res.create_attachment_for_object_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->