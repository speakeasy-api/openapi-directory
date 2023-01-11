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
    
req = operations.GenerateDataSetRequest(
    headers=operations.GenerateDataSetHeaders(
        x_amz_algorithm="quisquam",
        x_amz_content_sha256="sequi",
        x_amz_credential="quia",
        x_amz_date="est",
        x_amz_security_token="voluptatem",
        x_amz_signature="voluptate",
        x_amz_signed_headers="facilis",
        x_amz_target="MarketplaceCommerceAnalytics20150701.GenerateDataSet",
    ),
    request=shared.GenerateDataSetRequest(
        customer_defined_values={
            "ipsum": "repudiandae",
            "iusto": "quis",
        },
        data_set_publication_date="2013-05-15T08:13:46Z",
        data_set_type="monthly_revenue_billing_and_revenue_data",
        destination_s3_bucket_name="sunt",
        destination_s3_prefix="laborum",
        role_name_arn="quibusdam",
        sns_topic_arn="eum",
    ),
)
    
res = s.generate_data_set(req)

if res.generate_data_set_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->