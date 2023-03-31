<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchGetAggregateResourceConfigRequest(
    batch_get_aggregate_resource_config_request=shared.BatchGetAggregateResourceConfigRequest(
        configuration_aggregator_name="corrupti",
        resource_identifiers=[
            shared.AggregateResourceIdentifier(
                resource_id="distinctio",
                resource_name="quibusdam",
                resource_type="AWS::DataSync::LocationNFS",
                source_account_id="nulla",
                source_region="corrupti",
            ),
            shared.AggregateResourceIdentifier(
                resource_id="illum",
                resource_name="vel",
                resource_type="AWS::GuardDuty::IPSet",
                source_account_id="deserunt",
                source_region="suscipit",
            ),
            shared.AggregateResourceIdentifier(
                resource_id="iure",
                resource_name="magnam",
                resource_type="AWS::IoTSiteWise::Dashboard",
                source_account_id="ipsa",
                source_region="delectus",
            ),
        ],
    ),
    x_amz_algorithm="tempora",
    x_amz_content_sha256="suscipit",
    x_amz_credential="molestiae",
    x_amz_date="minus",
    x_amz_security_token="placeat",
    x_amz_signature="voluptatum",
    x_amz_signed_headers="iusto",
    x_amz_target="StarlingDoveService.BatchGetAggregateResourceConfig",
)
    
res = s.batch_get_aggregate_resource_config(req)

if res.batch_get_aggregate_resource_config_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->