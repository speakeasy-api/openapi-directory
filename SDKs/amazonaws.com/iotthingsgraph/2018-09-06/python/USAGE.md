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
    
req = operations.AssociateEntityToThingRequest(
    headers=operations.AssociateEntityToThingHeaders(
        x_amz_algorithm="impedit",
        x_amz_content_sha256="est",
        x_amz_credential="dolor",
        x_amz_date="facilis",
        x_amz_security_token="ut",
        x_amz_signature="tenetur",
        x_amz_signed_headers="voluptatibus",
        x_amz_target="IotThingsGraphFrontEndService.AssociateEntityToThing",
    ),
    request=shared.AssociateEntityToThingRequest(
        entity_id="cupiditate",
        namespace_version=6514906014667812376,
        thing_name="in",
    ),
)
    
res = s.associate_entity_to_thing(req)

if res.associate_entity_to_thing_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->