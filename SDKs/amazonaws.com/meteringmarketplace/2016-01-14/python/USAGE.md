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
    
req = operations.BatchMeterUsageRequest(
    headers=operations.BatchMeterUsageHeaders(
        x_amz_algorithm="nihil",
        x_amz_content_sha256="dolorem",
        x_amz_credential="impedit",
        x_amz_date="laboriosam",
        x_amz_security_token="iste",
        x_amz_signature="soluta",
        x_amz_signed_headers="ut",
        x_amz_target="AWSMPMeteringService.BatchMeterUsage",
    ),
    request=shared.BatchMeterUsageRequest(
        product_code="vel",
        usage_records=[
            shared.UsageRecord(
                customer_identifier="soluta",
                dimension="alias",
                quantity=3089778739814785022,
                timestamp="1984-04-21T17:27:21Z",
                usage_allocations=[
                    shared.UsageAllocation(
                        allocated_usage_quantity=4453435121235553912,
                        tags=[
                            shared.Tag(
                                key="dolore",
                                value="quidem",
                            ),
                            shared.Tag(
                                key="doloribus",
                                value="at",
                            ),
                            shared.Tag(
                                key="dolore",
                                value="et",
                            ),
                        ],
                    ),
                ],
            ),
        ],
    ),
)
    
res = s.batch_meter_usage(req)

if res.batch_meter_usage_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->