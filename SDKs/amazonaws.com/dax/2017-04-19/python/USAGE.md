<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateClusterRequest(
    create_cluster_request=shared.CreateClusterRequest(
        availability_zones=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        cluster_endpoint_encryption_type="TLS",
        cluster_name="nulla",
        description="corrupti",
        iam_role_arn="illum",
        node_type="vel",
        notification_topic_arn="error",
        parameter_group_name="deserunt",
        preferred_maintenance_window="suscipit",
        replication_factor=437587,
        sse_specification=shared.SSESpecification(
            enabled=False,
        ),
        security_group_ids=[
            "debitis",
            "ipsa",
        ],
        subnet_group_name="delectus",
        tags=[
            shared.Tag(
                key="suscipit",
                value="molestiae",
            ),
            shared.Tag(
                key="minus",
                value="placeat",
            ),
        ],
    ),
    x_amz_algorithm="voluptatum",
    x_amz_content_sha256="iusto",
    x_amz_credential="excepturi",
    x_amz_date="nisi",
    x_amz_security_token="recusandae",
    x_amz_signature="temporibus",
    x_amz_signed_headers="ab",
    x_amz_target="AmazonDAXV3.CreateCluster",
)
    
res = s.create_cluster(req)

if res.create_cluster_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->