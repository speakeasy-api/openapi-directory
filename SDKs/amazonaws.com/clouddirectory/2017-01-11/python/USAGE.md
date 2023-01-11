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
    
req = operations.AddFacetToObjectRequest(
    headers=operations.AddFacetToObjectHeaders(
        x_amz_algorithm="facilis",
        x_amz_content_sha256="omnis",
        x_amz_credential="mollitia",
        x_amz_date="velit",
        x_amz_security_token="illum",
        x_amz_signature="eum",
        x_amz_signed_headers="quo",
        x_amz_data_partition="et",
    ),
    request=operations.AddFacetToObjectRequestBody(
        object_attribute_list=[
            shared.AttributeKeyAndValue(
                key=shared.AttributeKey(
                    facet_name="omnis",
                    name="tempora",
                    schema_arn="aliquid",
                ),
                value=shared.TypedAttributeValue(
                    binary_value="molestiae",
                    boolean_value=False,
                    datetime_value="2009-08-18T16:12:12Z",
                    number_value="cum",
                    string_value="a",
                ),
            ),
            shared.AttributeKeyAndValue(
                key=shared.AttributeKey(
                    facet_name="quo",
                    name="delectus",
                    schema_arn="et",
                ),
                value=shared.TypedAttributeValue(
                    binary_value="ipsum",
                    boolean_value=False,
                    datetime_value="1971-08-07T18:15:28Z",
                    number_value="et",
                    string_value="cupiditate",
                ),
            ),
        ],
        object_reference=operations.AddFacetToObjectRequestBodyObjectReference(
            selector="sed",
        ),
        schema_facet=operations.AddFacetToObjectRequestBodySchemaFacet(
            facet_name="praesentium",
            schema_arn="excepturi",
        ),
    ),
)
    
res = s.add_facet_to_object(req)

if res.add_facet_to_object_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->