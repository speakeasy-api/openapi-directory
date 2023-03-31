<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GenerateDataSetRequest(
    generate_data_set_request=shared.GenerateDataSetRequest(
        customer_defined_values={
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        data_set_publication_date="2021-09-24T02:21:06.409Z",
        data_set_type="disbursed_amount_by_customer_geo",
        destination_s3_bucket_name="deserunt",
        destination_s3_prefix="suscipit",
        role_name_arn="iure",
        sns_topic_arn="magnam",
    ),
    x_amz_algorithm="debitis",
    x_amz_content_sha256="ipsa",
    x_amz_credential="delectus",
    x_amz_date="tempora",
    x_amz_security_token="suscipit",
    x_amz_signature="molestiae",
    x_amz_signed_headers="minus",
    x_amz_target="MarketplaceCommerceAnalytics20150701.GenerateDataSet",
)
    
res = s.generate_data_set(req)

if res.generate_data_set_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->