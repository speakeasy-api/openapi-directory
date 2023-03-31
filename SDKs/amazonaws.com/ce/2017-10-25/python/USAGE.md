<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateAnomalyMonitorRequest(
    create_anomaly_monitor_request=shared.CreateAnomalyMonitorRequest(
        anomaly_monitor=shared.AnomalyMonitor(
            creation_date="corrupti",
            dimensional_value_count=592845,
            last_evaluated_date="distinctio",
            last_updated_date="quibusdam",
            monitor_arn="unde",
            monitor_dimension="SERVICE",
            monitor_name="nulla",
            monitor_specification=shared.Expression(
                and_=[
                    shared.Expression(),
                    shared.Expression(),
                    shared.Expression(),
                ],
                cost_categories=shared.CostCategoryValues(
                    key="illum",
                    match_options=[
                        "CONTAINS",
                        "CASE_SENSITIVE",
                    ],
                    values=[
                        "iure",
                        "magnam",
                    ],
                ),
                dimensions=shared.DimensionValues(
                    key="AGREEMENT_END_DATE_TIME_BEFORE",
                    match_options=[
                        "GREATER_THAN_OR_EQUAL",
                    ],
                    values=[
                        "suscipit",
                        "molestiae",
                    ],
                ),
                not_=shared.Expression(),
                or_=[
                    shared.Expression(),
                    shared.Expression(),
                    shared.Expression(),
                    shared.Expression(),
                ],
                tags=shared.TagValues(
                    key="placeat",
                    match_options=[
                        "ENDS_WITH",
                        "CONTAINS",
                        "ENDS_WITH",
                    ],
                    values=[
                        "temporibus",
                        "ab",
                        "quis",
                        "veritatis",
                    ],
                ),
            ),
            monitor_type="CUSTOM",
        ),
        resource_tags=[
            shared.ResourceTag(
                key="ipsam",
                value="repellendus",
            ),
        ],
    ),
    x_amz_algorithm="sapiente",
    x_amz_content_sha256="quo",
    x_amz_credential="odit",
    x_amz_date="at",
    x_amz_security_token="at",
    x_amz_signature="maiores",
    x_amz_signed_headers="molestiae",
    x_amz_target="AWSInsightsIndexService.CreateAnomalyMonitor",
)
    
res = s.create_anomaly_monitor(req)

if res.create_anomaly_monitor_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->