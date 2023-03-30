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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.ConvertRecoveryPointToSnapshotRequest{
        Headers: operations.ConvertRecoveryPointToSnapshotHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "RedshiftServerless.ConvertRecoveryPointToSnapshot",
        },
        Request: shared.ConvertRecoveryPointToSnapshotRequest{
            RecoveryPointID: "illum",
            RetentionPeriod: 423655,
            SnapshotName: "error",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "suscipit",
                    Value: "iure",
                },
                shared.Tag{
                    Key: "magnam",
                    Value: "debitis",
                },
                shared.Tag{
                    Key: "ipsa",
                    Value: "delectus",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.ConvertRecoveryPointToSnapshot(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `ConvertRecoveryPointToSnapshot` - Converts a recovery point to a snapshot. For more information about recovery points and snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html">Working with snapshots and recovery points</a>.
* `CreateEndpointAccess` - Creates an Amazon Redshift Serverless managed VPC endpoint.
* `CreateNamespace` - Creates a namespace in Amazon Redshift Serverless.
* `CreateSnapshot` - Creates a snapshot of all databases in a namespace. For more information about snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html"> Working with snapshots and recovery points</a>.
* `CreateUsageLimit` - Creates a usage limit for a specified Amazon Redshift Serverless usage type. The usage limit is identified by the returned usage limit identifier. 
* `CreateWorkgroup` - Creates an workgroup in Amazon Redshift Serverless.
* `DeleteEndpointAccess` - Deletes an Amazon Redshift Serverless managed VPC endpoint.
* `DeleteNamespace` - Deletes a namespace from Amazon Redshift Serverless. Before you delete the namespace, you can create a final snapshot that has all of the data within the namespace.
* `DeleteResourcePolicy` - Deletes the specified resource policy.
* `DeleteSnapshot` - Deletes a snapshot from Amazon Redshift Serverless.
* `DeleteUsageLimit` - Deletes a usage limit from Amazon Redshift Serverless.
* `DeleteWorkgroup` - Deletes a workgroup.
* `GetCredentials` - <p>Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless.</p> <p>By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).</p> <pre><code> &lt;p&gt;The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources.&lt;/p&gt; &lt;p&gt;If the &lt;code&gt;DbName&lt;/code&gt; parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.&lt;/p&gt; </code></pre>
* `GetEndpointAccess` - Returns information, such as the name, about a VPC endpoint.
* `GetNamespace` - Returns information about a namespace in Amazon Redshift Serverless.
* `GetRecoveryPoint` - Returns information about a recovery point.
* `GetResourcePolicy` - Returns a resource policy.
* `GetSnapshot` - Returns information about a specific snapshot.
* `GetTableRestoreStatus` - Returns information about a <code>TableRestoreStatus</code> object.
* `GetUsageLimit` - Returns information about a usage limit.
* `GetWorkgroup` - Returns information about a specific workgroup.
* `ListEndpointAccess` - Returns an array of <code>EndpointAccess</code> objects and relevant information.
* `ListNamespaces` - Returns information about a list of specified namespaces.
* `ListRecoveryPoints` - Returns an array of recovery points.
* `ListSnapshots` - Returns a list of snapshots.
* `ListTableRestoreStatus` - Returns information about an array of <code>TableRestoreStatus</code> objects.
* `ListTagsForResource` - Lists the tags assigned to a resource.
* `ListUsageLimits` - Lists all usage limits within Amazon Redshift Serverless.
* `ListWorkgroups` - Returns information about a list of specified workgroups.
* `PutResourcePolicy` - Creates or updates a resource policy. Currently, you can use policies to share snapshots across Amazon Web Services accounts.
* `RestoreFromRecoveryPoint` - Restore the data from a recovery point.
* `RestoreFromSnapshot` - Restores a namespace from a snapshot.
* `RestoreTableFromSnapshot` - Restores a table from a snapshot to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.
* `TagResource` - Assigns one or more tags to a resource.
* `UntagResource` - Removes a tag or set of tags from a resource.
* `UpdateEndpointAccess` - Updates an Amazon Redshift Serverless managed endpoint.
* `UpdateNamespace` - Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example, you must specify both <code>adminUsername</code> and <code>adminUserPassword</code> to update either field, but you can't update both <code>kmsKeyId</code> and <code>logExports</code> in a single request.
* `UpdateSnapshot` - Updates a snapshot.
* `UpdateUsageLimit` - Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.
* `UpdateWorkgroup` - Updates a workgroup with the specified configuration settings. You can't update multiple parameters in one request. For example, you can update <code>baseCapacity</code> or <code>port</code> in a single request, but you can't update both in the same request.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
