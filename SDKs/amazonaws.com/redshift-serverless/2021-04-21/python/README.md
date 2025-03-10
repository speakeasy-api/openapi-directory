# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/redshift-serverless/2021-04-21/python
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


req = operations.ConvertRecoveryPointToSnapshotRequest(
    convert_recovery_point_to_snapshot_request=shared.ConvertRecoveryPointToSnapshotRequest(
        recovery_point_id="corrupti",
        retention_period=592845,
        snapshot_name="distinctio",
        tags=[
            shared.Tag(
                key="unde",
                value="nulla",
            ),
            shared.Tag(
                key="corrupti",
                value="illum",
            ),
            shared.Tag(
                key="vel",
                value="error",
            ),
            shared.Tag(
                key="deserunt",
                value="suscipit",
            ),
        ],
    ),
    x_amz_algorithm="iure",
    x_amz_content_sha256="magnam",
    x_amz_credential="debitis",
    x_amz_date="ipsa",
    x_amz_security_token="delectus",
    x_amz_signature="tempora",
    x_amz_signed_headers="suscipit",
    x_amz_target="RedshiftServerless.ConvertRecoveryPointToSnapshot",
)
    
res = s.convert_recovery_point_to_snapshot(req)

if res.convert_recovery_point_to_snapshot_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `convert_recovery_point_to_snapshot` - Converts a recovery point to a snapshot. For more information about recovery points and snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html">Working with snapshots and recovery points</a>.
* `create_endpoint_access` - Creates an Amazon Redshift Serverless managed VPC endpoint.
* `create_namespace` - Creates a namespace in Amazon Redshift Serverless.
* `create_snapshot` - Creates a snapshot of all databases in a namespace. For more information about snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html"> Working with snapshots and recovery points</a>.
* `create_usage_limit` - Creates a usage limit for a specified Amazon Redshift Serverless usage type. The usage limit is identified by the returned usage limit identifier. 
* `create_workgroup` - Creates an workgroup in Amazon Redshift Serverless.
* `delete_endpoint_access` - Deletes an Amazon Redshift Serverless managed VPC endpoint.
* `delete_namespace` - Deletes a namespace from Amazon Redshift Serverless. Before you delete the namespace, you can create a final snapshot that has all of the data within the namespace.
* `delete_resource_policy` - Deletes the specified resource policy.
* `delete_snapshot` - Deletes a snapshot from Amazon Redshift Serverless.
* `delete_usage_limit` - Deletes a usage limit from Amazon Redshift Serverless.
* `delete_workgroup` - Deletes a workgroup.
* `get_credentials` - <p>Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless.</p> <p>By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).</p> <pre><code> &lt;p&gt;The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources.&lt;/p&gt; &lt;p&gt;If the &lt;code&gt;DbName&lt;/code&gt; parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.&lt;/p&gt; </code></pre>
* `get_endpoint_access` - Returns information, such as the name, about a VPC endpoint.
* `get_namespace` - Returns information about a namespace in Amazon Redshift Serverless.
* `get_recovery_point` - Returns information about a recovery point.
* `get_resource_policy` - Returns a resource policy.
* `get_snapshot` - Returns information about a specific snapshot.
* `get_table_restore_status` - Returns information about a <code>TableRestoreStatus</code> object.
* `get_usage_limit` - Returns information about a usage limit.
* `get_workgroup` - Returns information about a specific workgroup.
* `list_endpoint_access` - Returns an array of <code>EndpointAccess</code> objects and relevant information.
* `list_namespaces` - Returns information about a list of specified namespaces.
* `list_recovery_points` - Returns an array of recovery points.
* `list_snapshots` - Returns a list of snapshots.
* `list_table_restore_status` - Returns information about an array of <code>TableRestoreStatus</code> objects.
* `list_tags_for_resource` - Lists the tags assigned to a resource.
* `list_usage_limits` - Lists all usage limits within Amazon Redshift Serverless.
* `list_workgroups` - Returns information about a list of specified workgroups.
* `put_resource_policy` - Creates or updates a resource policy. Currently, you can use policies to share snapshots across Amazon Web Services accounts.
* `restore_from_recovery_point` - Restore the data from a recovery point.
* `restore_from_snapshot` - Restores a namespace from a snapshot.
* `restore_table_from_snapshot` - Restores a table from a snapshot to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.
* `tag_resource` - Assigns one or more tags to a resource.
* `untag_resource` - Removes a tag or set of tags from a resource.
* `update_endpoint_access` - Updates an Amazon Redshift Serverless managed endpoint.
* `update_namespace` - Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example, you must specify both <code>adminUsername</code> and <code>adminUserPassword</code> to update either field, but you can't update both <code>kmsKeyId</code> and <code>logExports</code> in a single request.
* `update_snapshot` - Updates a snapshot.
* `update_usage_limit` - Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.
* `update_workgroup` - Updates a workgroup with the specified configuration settings. You can't update multiple parameters in one request. For example, you can update <code>baseCapacity</code> or <code>port</code> in a single request, but you can't update both in the same request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
