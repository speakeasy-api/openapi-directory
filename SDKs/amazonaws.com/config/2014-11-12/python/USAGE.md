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
    
req = operations.BatchGetAggregateResourceConfigRequest(
    headers=operations.BatchGetAggregateResourceConfigHeaders(
        x_amz_algorithm="dolor",
        x_amz_content_sha256="nulla",
        x_amz_credential="ipsa",
        x_amz_date="ipsum",
        x_amz_security_token="ab",
        x_amz_signature="dolores",
        x_amz_signed_headers="sunt",
        x_amz_target="StarlingDoveService.BatchGetAggregateResourceConfig",
    ),
    request=shared.BatchGetAggregateResourceConfigRequest(
        configuration_aggregator_name="quas",
        resource_identifiers=[
            shared.AggregateResourceIdentifier(
                resource_id="dicta",
                resource_name="minima",
                resource_type="AWS::ShieldRegional::Protection",
                source_account_id="nesciunt",
                source_region="ducimus",
            ),
            shared.AggregateResourceIdentifier(
                resource_id="dolores",
                resource_name="magni",
                resource_type="AWS::RDS::DBCluster",
                source_account_id="qui",
                source_region="ab",
            ),
            shared.AggregateResourceIdentifier(
                resource_id="accusantium",
                resource_name="aliquam",
                resource_type="AWS::RDS::DBClusterSnapshot",
                source_account_id="et",
                source_region="ipsa",
            ),
        ],
    ),
)
    
res = s.batch_get_aggregate_resource_config(req)

if res.batch_get_aggregate_resource_config_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->