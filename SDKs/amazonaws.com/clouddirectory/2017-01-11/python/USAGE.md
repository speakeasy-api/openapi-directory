<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddFacetToObjectRequest(
    request_body=operations.AddFacetToObjectRequestBody(
        object_attribute_list=[
            shared.AttributeKeyAndValue(
                key=shared.AttributeKey(
                    facet_name="provident",
                    name="distinctio",
                    schema_arn="quibusdam",
                ),
                value=shared.TypedAttributeValue(
                    binary_value="unde",
                    boolean_value=False,
                    datetime_value="2021-05-14T08:28:11.899Z",
                    number_value="illum",
                    string_value="vel",
                ),
            ),
            shared.AttributeKeyAndValue(
                key=shared.AttributeKey(
                    facet_name="error",
                    name="deserunt",
                    schema_arn="suscipit",
                ),
                value=shared.TypedAttributeValue(
                    binary_value="iure",
                    boolean_value=False,
                    datetime_value="2022-02-09T12:04:06.508Z",
                    number_value="ipsa",
                    string_value="delectus",
                ),
            ),
            shared.AttributeKeyAndValue(
                key=shared.AttributeKey(
                    facet_name="tempora",
                    name="suscipit",
                    schema_arn="molestiae",
                ),
                value=shared.TypedAttributeValue(
                    binary_value="minus",
                    boolean_value=False,
                    datetime_value="2021-05-31T20:38:28.793Z",
                    number_value="iusto",
                    string_value="excepturi",
                ),
            ),
        ],
        object_reference=operations.AddFacetToObjectRequestBodyObjectReference(
            selector="nisi",
        ),
        schema_facet=operations.AddFacetToObjectRequestBodySchemaFacet(
            facet_name="recusandae",
            schema_arn="temporibus",
        ),
    ),
    x_amz_algorithm="ab",
    x_amz_content_sha256="quis",
    x_amz_credential="veritatis",
    x_amz_date="deserunt",
    x_amz_security_token="perferendis",
    x_amz_signature="ipsam",
    x_amz_signed_headers="repellendus",
    x_amz_data_partition="sapiente",
)
    
res = s.add_facet_to_object(req)

if res.add_facet_to_object_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->