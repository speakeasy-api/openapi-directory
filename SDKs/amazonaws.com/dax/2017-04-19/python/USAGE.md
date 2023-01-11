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
    
req = operations.CreateClusterRequest(
    headers=operations.CreateClusterHeaders(
        x_amz_algorithm="dolor",
        x_amz_content_sha256="dolor",
        x_amz_credential="ducimus",
        x_amz_date="in",
        x_amz_security_token="enim",
        x_amz_signature="iusto",
        x_amz_signed_headers="dolor",
        x_amz_target="AmazonDAXV3.CreateCluster",
    ),
    request=shared.CreateClusterRequest(
        availability_zones=[
            "dolores",
        ],
        cluster_endpoint_encryption_type="TLS",
        cluster_name="voluptatem",
        description="rerum",
        iam_role_arn="reiciendis",
        node_type="aut",
        notification_topic_arn="unde",
        parameter_group_name="saepe",
        preferred_maintenance_window="ratione",
        replication_factor=2367153732642039729,
        sse_specification=shared.SseSpecification(
            enabled=False,
        ),
        security_group_ids=[
            "veniam",
            "consequatur",
            "corporis",
        ],
        subnet_group_name="est",
        tags=[
            shared.Tag(
                key="adipisci",
                value="est",
            ),
        ],
    ),
)
    
res = s.create_cluster(req)

if res.create_cluster_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->