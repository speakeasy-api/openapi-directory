# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/docdb-elastic/2022-11-28/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    request_body=operations.CreateClusterRequestBody(
        admin_user_name="corrupti",
        admin_user_password="provident",
        auth_type="SECRET_ARN",
        client_token="quibusdam",
        cluster_name="unde",
        kms_key_id="nulla",
        preferred_maintenance_window="corrupti",
        shard_capacity=847252,
        shard_count=423655,
        subnet_ids=[
            "deserunt",
            "suscipit",
            "iure",
        ],
        tags={
            "debitis": "ipsa",
            "delectus": "tempora",
        },
        vpc_security_group_ids=[
            "molestiae",
            "minus",
        ],
    ),
    x_amz_algorithm="placeat",
    x_amz_content_sha256="voluptatum",
    x_amz_credential="iusto",
    x_amz_date="excepturi",
    x_amz_security_token="nisi",
    x_amz_signature="recusandae",
    x_amz_signed_headers="temporibus",
)
    
res = s.create_cluster(req)

if res.create_cluster_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_cluster` - Creates a new Elastic DocumentDB cluster and returns its Cluster structure.
* `create_cluster_snapshot` - Creates a snapshot of a cluster.
* `delete_cluster` - Delete a Elastic DocumentDB cluster.
* `delete_cluster_snapshot` - Delete a Elastic DocumentDB snapshot.
* `get_cluster` - Returns information about a specific Elastic DocumentDB cluster.
* `get_cluster_snapshot` - Returns information about a specific Elastic DocumentDB snapshot
* `list_cluster_snapshots` - Returns information about Elastic DocumentDB snapshots for a specified cluster.
* `list_clusters` - Returns information about provisioned Elastic DocumentDB clusters.
* `list_tags_for_resource` - Lists all tags on a Elastic DocumentDB resource
* `restore_cluster_from_snapshot` - Restores a Elastic DocumentDB cluster from a snapshot.
* `tag_resource` - Adds metadata tags to a Elastic DocumentDB resource
* `untag_resource` - Removes metadata tags to a Elastic DocumentDB resource
* `update_cluster` - Modifies a Elastic DocumentDB cluster. This includes updating admin-username/password, upgrading API version setting up a backup window and maintenance window
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
