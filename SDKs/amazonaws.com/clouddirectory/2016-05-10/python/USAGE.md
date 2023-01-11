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
        x_amz_algorithm="doloremque",
        x_amz_content_sha256="animi",
        x_amz_credential="exercitationem",
        x_amz_date="quia",
        x_amz_security_token="ut",
        x_amz_signature="hic",
        x_amz_signed_headers="veniam",
        x_amz_data_partition="et",
    ),
    request=operations.AddFacetToObjectRequestBody(
        object_attribute_list=[
            shared.AttributeKeyAndValue(
                key=shared.AttributeKey(
                    facet_name="animi",
                    name="atque",
                    schema_arn="omnis",
                ),
                value=shared.TypedAttributeValue(
                    binary_value="unde",
                    boolean_value=True,
                    datetime_value="2005-01-16T03:32:55Z",
                    number_value="et",
                    string_value="quia",
                ),
            ),
            shared.AttributeKeyAndValue(
                key=shared.AttributeKey(
                    facet_name="qui",
                    name="voluptates",
                    schema_arn="consequatur",
                ),
                value=shared.TypedAttributeValue(
                    binary_value="explicabo",
                    boolean_value=True,
                    datetime_value="1975-12-26T09:00:02Z",
                    number_value="ipsum",
                    string_value="autem",
                ),
            ),
            shared.AttributeKeyAndValue(
                key=shared.AttributeKey(
                    facet_name="perferendis",
                    name="dolorem",
                    schema_arn="odit",
                ),
                value=shared.TypedAttributeValue(
                    binary_value="maxime",
                    boolean_value=False,
                    datetime_value="2000-05-18T09:59:51Z",
                    number_value="dolore",
                    string_value="est",
                ),
            ),
        ],
        object_reference=operations.AddFacetToObjectRequestBodyObjectReference(
            selector="velit",
        ),
        schema_facet=operations.AddFacetToObjectRequestBodySchemaFacet(
            facet_name="eveniet",
            schema_arn="nam",
        ),
    ),
)
    
res = s.add_facet_to_object(req)

if res.add_facet_to_object_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->