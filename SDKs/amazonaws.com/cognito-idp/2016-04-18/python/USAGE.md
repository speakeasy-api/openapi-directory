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
    
req = operations.AddCustomAttributesRequest(
    headers=operations.AddCustomAttributesHeaders(
        x_amz_algorithm="consectetur",
        x_amz_content_sha256="voluptatibus",
        x_amz_credential="doloremque",
        x_amz_date="neque",
        x_amz_security_token="sint",
        x_amz_signature="iste",
        x_amz_signed_headers="temporibus",
        x_amz_target="AWSCognitoIdentityProviderService.AddCustomAttributes",
    ),
    request=shared.AddCustomAttributesRequest(
        custom_attributes=[
            shared.SchemaAttributeType(
                attribute_data_type="Boolean",
                developer_only_attribute=False,
                mutable=True,
                name="ducimus",
                number_attribute_constraints=shared.NumberAttributeConstraintsType(
                    max_value="ut",
                    min_value="incidunt",
                ),
                required=False,
                string_attribute_constraints=shared.StringAttributeConstraintsType(
                    max_length="voluptatem",
                    min_length="voluptates",
                ),
            ),
            shared.SchemaAttributeType(
                attribute_data_type="DateTime",
                developer_only_attribute=True,
                mutable=False,
                name="ut",
                number_attribute_constraints=shared.NumberAttributeConstraintsType(
                    max_value="quaerat",
                    min_value="ut",
                ),
                required=True,
                string_attribute_constraints=shared.StringAttributeConstraintsType(
                    max_length="vel",
                    min_length="et",
                ),
            ),
            shared.SchemaAttributeType(
                attribute_data_type="DateTime",
                developer_only_attribute=False,
                mutable=True,
                name="inventore",
                number_attribute_constraints=shared.NumberAttributeConstraintsType(
                    max_value="impedit",
                    min_value="molestiae",
                ),
                required=False,
                string_attribute_constraints=shared.StringAttributeConstraintsType(
                    max_length="dignissimos",
                    min_length="consectetur",
                ),
            ),
        ],
        user_pool_id="repellendus",
    ),
)
    
res = s.add_custom_attributes(req)

if res.add_custom_attributes_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->