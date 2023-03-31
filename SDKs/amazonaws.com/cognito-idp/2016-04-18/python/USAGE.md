<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddCustomAttributesRequest(
    add_custom_attributes_request=shared.AddCustomAttributesRequest(
        custom_attributes=[
            shared.SchemaAttributeType(
                attribute_data_type="DateTime",
                developer_only_attribute=False,
                mutable=False,
                name="distinctio",
                number_attribute_constraints=shared.NumberAttributeConstraintsType(
                    max_value="quibusdam",
                    min_value="unde",
                ),
                required=False,
                string_attribute_constraints=shared.StringAttributeConstraintsType(
                    max_length="nulla",
                    min_length="corrupti",
                ),
            ),
            shared.SchemaAttributeType(
                attribute_data_type="Boolean",
                developer_only_attribute=False,
                mutable=False,
                name="vel",
                number_attribute_constraints=shared.NumberAttributeConstraintsType(
                    max_value="error",
                    min_value="deserunt",
                ),
                required=False,
                string_attribute_constraints=shared.StringAttributeConstraintsType(
                    max_length="suscipit",
                    min_length="iure",
                ),
            ),
            shared.SchemaAttributeType(
                attribute_data_type="Number",
                developer_only_attribute=False,
                mutable=False,
                name="debitis",
                number_attribute_constraints=shared.NumberAttributeConstraintsType(
                    max_value="ipsa",
                    min_value="delectus",
                ),
                required=False,
                string_attribute_constraints=shared.StringAttributeConstraintsType(
                    max_length="tempora",
                    min_length="suscipit",
                ),
            ),
        ],
        user_pool_id="molestiae",
    ),
    x_amz_algorithm="minus",
    x_amz_content_sha256="placeat",
    x_amz_credential="voluptatum",
    x_amz_date="iusto",
    x_amz_security_token="excepturi",
    x_amz_signature="nisi",
    x_amz_signed_headers="recusandae",
    x_amz_target="AWSCognitoIdentityProviderService.AddCustomAttributes",
)
    
res = s.add_custom_attributes(req)

if res.add_custom_attributes_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->