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
    
req = operations.DescribeDimensionKeysRequest(
    headers=operations.DescribeDimensionKeysHeaders(
        x_amz_algorithm="mollitia",
        x_amz_content_sha256="distinctio",
        x_amz_credential="ipsam",
        x_amz_date="dolor",
        x_amz_security_token="aut",
        x_amz_signature="veniam",
        x_amz_signed_headers="ullam",
        x_amz_target="PerformanceInsightsv20180227.DescribeDimensionKeys",
    ),
    request=shared.DescribeDimensionKeysRequest(
        end_time="1986-12-15T18:29:59Z",
        filter={
            "inventore": "est",
            "nisi": "consequatur",
            "fugiat": "tenetur",
        },
        group_by=shared.DimensionGroup(
            dimensions=[
                "aliquam",
            ],
            group="aspernatur",
            limit=4017103272747439088,
        ),
        identifier="inventore",
        max_results=3526406646607909592,
        metric="saepe",
        next_token="voluptas",
        partition_by=shared.DimensionGroup(
            dimensions=[
                "optio",
                "omnis",
            ],
            group="ut",
            limit=8667532264838713382,
        ),
        period_in_seconds=8056810507064755208,
        service_type="RDS",
        start_time="1976-11-04T06:14:44Z",
    ),
)
    
res = s.describe_dimension_keys(req)

if res.describe_dimension_keys_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->