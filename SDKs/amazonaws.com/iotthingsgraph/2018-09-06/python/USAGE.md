<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateEntityToThingRequest(
    associate_entity_to_thing_request=shared.AssociateEntityToThingRequest(
        entity_id="corrupti",
        namespace_version=592845,
        thing_name="distinctio",
    ),
    x_amz_algorithm="quibusdam",
    x_amz_content_sha256="unde",
    x_amz_credential="nulla",
    x_amz_date="corrupti",
    x_amz_security_token="illum",
    x_amz_signature="vel",
    x_amz_signed_headers="error",
    x_amz_target="IotThingsGraphFrontEndService.AssociateEntityToThing",
)
    
res = s.associate_entity_to_thing(req)

if res.associate_entity_to_thing_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->