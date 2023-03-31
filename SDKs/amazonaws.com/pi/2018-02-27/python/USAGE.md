<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.DescribeDimensionKeysRequest(
    describe_dimension_keys_request=shared.DescribeDimensionKeysRequest(
        additional_metrics=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        end_time="2021-04-14T16:47:33.722Z",
        filter={
            "illum": "vel",
            "error": "deserunt",
            "suscipit": "iure",
        },
        group_by=shared.DimensionGroup(
            dimensions=[
                "debitis",
                "ipsa",
            ],
            group="delectus",
            limit=272656,
        ),
        identifier="suscipit",
        max_results=477665,
        metric="minus",
        next_token="placeat",
        partition_by=shared.DimensionGroup(
            dimensions=[
                "iusto",
                "excepturi",
                "nisi",
            ],
            group="recusandae",
            limit=836079,
        ),
        period_in_seconds=71036,
        service_type="RDS",
        start_time="2022-05-09T10:00:51.349Z",
    ),
    max_results="perferendis",
    next_token="ipsam",
    x_amz_algorithm="repellendus",
    x_amz_content_sha256="sapiente",
    x_amz_credential="quo",
    x_amz_date="odit",
    x_amz_security_token="at",
    x_amz_signature="at",
    x_amz_signed_headers="maiores",
    x_amz_target="PerformanceInsightsv20180227.DescribeDimensionKeys",
)
    
res = s.describe_dimension_keys(req)

if res.describe_dimension_keys_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->