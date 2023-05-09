# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/redshift-serverless/2021-04-21/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ConvertRecoveryPointToSnapshot(ctx, operations.ConvertRecoveryPointToSnapshotRequest{
        ConvertRecoveryPointToSnapshotRequest: shared.ConvertRecoveryPointToSnapshotRequest{
            RecoveryPointID: "corrupti",
            RetentionPeriod: sdk.Int64(592845),
            SnapshotName: "distinctio",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "unde",
                    Value: "nulla",
                },
                shared.Tag{
                    Key: "corrupti",
                    Value: "illum",
                },
                shared.Tag{
                    Key: "vel",
                    Value: "error",
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: "suscipit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.ConvertRecoveryPointToSnapshotXAmzTargetEnumRedshiftServerlessConvertRecoveryPointToSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConvertRecoveryPointToSnapshotResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [ConvertRecoveryPointToSnapshot](docs/sdk/README.md#convertrecoverypointtosnapshot) - Converts a recovery point to a snapshot. For more information about recovery points and snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html">Working with snapshots and recovery points</a>.
* [CreateEndpointAccess](docs/sdk/README.md#createendpointaccess) - Creates an Amazon Redshift Serverless managed VPC endpoint.
* [CreateNamespace](docs/sdk/README.md#createnamespace) - Creates a namespace in Amazon Redshift Serverless.
* [CreateSnapshot](docs/sdk/README.md#createsnapshot) - Creates a snapshot of all databases in a namespace. For more information about snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html"> Working with snapshots and recovery points</a>.
* [CreateUsageLimit](docs/sdk/README.md#createusagelimit) - Creates a usage limit for a specified Amazon Redshift Serverless usage type. The usage limit is identified by the returned usage limit identifier. 
* [CreateWorkgroup](docs/sdk/README.md#createworkgroup) - Creates an workgroup in Amazon Redshift Serverless.
* [DeleteEndpointAccess](docs/sdk/README.md#deleteendpointaccess) - Deletes an Amazon Redshift Serverless managed VPC endpoint.
* [DeleteNamespace](docs/sdk/README.md#deletenamespace) - Deletes a namespace from Amazon Redshift Serverless. Before you delete the namespace, you can create a final snapshot that has all of the data within the namespace.
* [DeleteResourcePolicy](docs/sdk/README.md#deleteresourcepolicy) - Deletes the specified resource policy.
* [DeleteSnapshot](docs/sdk/README.md#deletesnapshot) - Deletes a snapshot from Amazon Redshift Serverless.
* [DeleteUsageLimit](docs/sdk/README.md#deleteusagelimit) - Deletes a usage limit from Amazon Redshift Serverless.
* [DeleteWorkgroup](docs/sdk/README.md#deleteworkgroup) - Deletes a workgroup.
* [GetCredentials](docs/sdk/README.md#getcredentials) - <p>Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless.</p> <p>By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).</p> <pre><code> &lt;p&gt;The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources.&lt;/p&gt; &lt;p&gt;If the &lt;code&gt;DbName&lt;/code&gt; parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.&lt;/p&gt; </code></pre>
* [GetEndpointAccess](docs/sdk/README.md#getendpointaccess) - Returns information, such as the name, about a VPC endpoint.
* [GetNamespace](docs/sdk/README.md#getnamespace) - Returns information about a namespace in Amazon Redshift Serverless.
* [GetRecoveryPoint](docs/sdk/README.md#getrecoverypoint) - Returns information about a recovery point.
* [GetResourcePolicy](docs/sdk/README.md#getresourcepolicy) - Returns a resource policy.
* [GetSnapshot](docs/sdk/README.md#getsnapshot) - Returns information about a specific snapshot.
* [GetTableRestoreStatus](docs/sdk/README.md#gettablerestorestatus) - Returns information about a <code>TableRestoreStatus</code> object.
* [GetUsageLimit](docs/sdk/README.md#getusagelimit) - Returns information about a usage limit.
* [GetWorkgroup](docs/sdk/README.md#getworkgroup) - Returns information about a specific workgroup.
* [ListEndpointAccess](docs/sdk/README.md#listendpointaccess) - Returns an array of <code>EndpointAccess</code> objects and relevant information.
* [ListNamespaces](docs/sdk/README.md#listnamespaces) - Returns information about a list of specified namespaces.
* [ListRecoveryPoints](docs/sdk/README.md#listrecoverypoints) - Returns an array of recovery points.
* [ListSnapshots](docs/sdk/README.md#listsnapshots) - Returns a list of snapshots.
* [ListTableRestoreStatus](docs/sdk/README.md#listtablerestorestatus) - Returns information about an array of <code>TableRestoreStatus</code> objects.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags assigned to a resource.
* [ListUsageLimits](docs/sdk/README.md#listusagelimits) - Lists all usage limits within Amazon Redshift Serverless.
* [ListWorkgroups](docs/sdk/README.md#listworkgroups) - Returns information about a list of specified workgroups.
* [PutResourcePolicy](docs/sdk/README.md#putresourcepolicy) - Creates or updates a resource policy. Currently, you can use policies to share snapshots across Amazon Web Services accounts.
* [RestoreFromRecoveryPoint](docs/sdk/README.md#restorefromrecoverypoint) - Restore the data from a recovery point.
* [RestoreFromSnapshot](docs/sdk/README.md#restorefromsnapshot) - Restores a namespace from a snapshot.
* [RestoreTableFromSnapshot](docs/sdk/README.md#restoretablefromsnapshot) - Restores a table from a snapshot to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.
* [TagResource](docs/sdk/README.md#tagresource) - Assigns one or more tags to a resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes a tag or set of tags from a resource.
* [UpdateEndpointAccess](docs/sdk/README.md#updateendpointaccess) - Updates an Amazon Redshift Serverless managed endpoint.
* [UpdateNamespace](docs/sdk/README.md#updatenamespace) - Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example, you must specify both <code>adminUsername</code> and <code>adminUserPassword</code> to update either field, but you can't update both <code>kmsKeyId</code> and <code>logExports</code> in a single request.
* [UpdateSnapshot](docs/sdk/README.md#updatesnapshot) - Updates a snapshot.
* [UpdateUsageLimit](docs/sdk/README.md#updateusagelimit) - Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.
* [UpdateWorkgroup](docs/sdk/README.md#updateworkgroup) - Updates a workgroup with the specified configuration settings. You can't update multiple parameters in one request. For example, you can update <code>baseCapacity</code> or <code>port</code> in a single request, but you can't update both in the same request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
