# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConvertRecoveryPointToSnapshotRequest;
import org.openapis.openapi.models.operations.ConvertRecoveryPointToSnapshotResponse;
import org.openapis.openapi.models.operations.ConvertRecoveryPointToSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConvertRecoveryPointToSnapshotRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConvertRecoveryPointToSnapshotRequest req = new ConvertRecoveryPointToSnapshotRequest(                new ConvertRecoveryPointToSnapshotRequest("provident", "distinctio") {{
                                retentionPeriod = 844266L;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("illum", "vel") {{
                                        key = "nulla";
                                        value = "corrupti";
                                    }}),
                                    add(new Tag("suscipit", "iure") {{
                                        key = "error";
                                        value = "deserunt";
                                    }}),
                                    add(new Tag("ipsa", "delectus") {{
                                        key = "magnam";
                                        value = "debitis";
                                    }}),
                                }};
                            }};, ConvertRecoveryPointToSnapshotXAmzTargetEnum.REDSHIFT_SERVERLESS_CONVERT_RECOVERY_POINT_TO_SNAPSHOT) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            ConvertRecoveryPointToSnapshotResponse res = sdk.convertRecoveryPointToSnapshot(req);

            if (res.convertRecoveryPointToSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [convertRecoveryPointToSnapshot](docs/sdk/README.md#convertrecoverypointtosnapshot) - Converts a recovery point to a snapshot. For more information about recovery points and snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html">Working with snapshots and recovery points</a>.
* [createEndpointAccess](docs/sdk/README.md#createendpointaccess) - Creates an Amazon Redshift Serverless managed VPC endpoint.
* [createNamespace](docs/sdk/README.md#createnamespace) - Creates a namespace in Amazon Redshift Serverless.
* [createSnapshot](docs/sdk/README.md#createsnapshot) - Creates a snapshot of all databases in a namespace. For more information about snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html"> Working with snapshots and recovery points</a>.
* [createUsageLimit](docs/sdk/README.md#createusagelimit) - Creates a usage limit for a specified Amazon Redshift Serverless usage type. The usage limit is identified by the returned usage limit identifier. 
* [createWorkgroup](docs/sdk/README.md#createworkgroup) - Creates an workgroup in Amazon Redshift Serverless.
* [deleteEndpointAccess](docs/sdk/README.md#deleteendpointaccess) - Deletes an Amazon Redshift Serverless managed VPC endpoint.
* [deleteNamespace](docs/sdk/README.md#deletenamespace) - Deletes a namespace from Amazon Redshift Serverless. Before you delete the namespace, you can create a final snapshot that has all of the data within the namespace.
* [deleteResourcePolicy](docs/sdk/README.md#deleteresourcepolicy) - Deletes the specified resource policy.
* [deleteSnapshot](docs/sdk/README.md#deletesnapshot) - Deletes a snapshot from Amazon Redshift Serverless.
* [deleteUsageLimit](docs/sdk/README.md#deleteusagelimit) - Deletes a usage limit from Amazon Redshift Serverless.
* [deleteWorkgroup](docs/sdk/README.md#deleteworkgroup) - Deletes a workgroup.
* [getCredentials](docs/sdk/README.md#getcredentials) - <p>Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless.</p> <p>By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).</p> <pre><code> &lt;p&gt;The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources.&lt;/p&gt; &lt;p&gt;If the &lt;code&gt;DbName&lt;/code&gt; parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.&lt;/p&gt; </code></pre>
* [getEndpointAccess](docs/sdk/README.md#getendpointaccess) - Returns information, such as the name, about a VPC endpoint.
* [getNamespace](docs/sdk/README.md#getnamespace) - Returns information about a namespace in Amazon Redshift Serverless.
* [getRecoveryPoint](docs/sdk/README.md#getrecoverypoint) - Returns information about a recovery point.
* [getResourcePolicy](docs/sdk/README.md#getresourcepolicy) - Returns a resource policy.
* [getSnapshot](docs/sdk/README.md#getsnapshot) - Returns information about a specific snapshot.
* [getTableRestoreStatus](docs/sdk/README.md#gettablerestorestatus) - Returns information about a <code>TableRestoreStatus</code> object.
* [getUsageLimit](docs/sdk/README.md#getusagelimit) - Returns information about a usage limit.
* [getWorkgroup](docs/sdk/README.md#getworkgroup) - Returns information about a specific workgroup.
* [listEndpointAccess](docs/sdk/README.md#listendpointaccess) - Returns an array of <code>EndpointAccess</code> objects and relevant information.
* [listNamespaces](docs/sdk/README.md#listnamespaces) - Returns information about a list of specified namespaces.
* [listRecoveryPoints](docs/sdk/README.md#listrecoverypoints) - Returns an array of recovery points.
* [listSnapshots](docs/sdk/README.md#listsnapshots) - Returns a list of snapshots.
* [listTableRestoreStatus](docs/sdk/README.md#listtablerestorestatus) - Returns information about an array of <code>TableRestoreStatus</code> objects.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags assigned to a resource.
* [listUsageLimits](docs/sdk/README.md#listusagelimits) - Lists all usage limits within Amazon Redshift Serverless.
* [listWorkgroups](docs/sdk/README.md#listworkgroups) - Returns information about a list of specified workgroups.
* [putResourcePolicy](docs/sdk/README.md#putresourcepolicy) - Creates or updates a resource policy. Currently, you can use policies to share snapshots across Amazon Web Services accounts.
* [restoreFromRecoveryPoint](docs/sdk/README.md#restorefromrecoverypoint) - Restore the data from a recovery point.
* [restoreFromSnapshot](docs/sdk/README.md#restorefromsnapshot) - Restores a namespace from a snapshot.
* [restoreTableFromSnapshot](docs/sdk/README.md#restoretablefromsnapshot) - Restores a table from a snapshot to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.
* [tagResource](docs/sdk/README.md#tagresource) - Assigns one or more tags to a resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes a tag or set of tags from a resource.
* [updateEndpointAccess](docs/sdk/README.md#updateendpointaccess) - Updates an Amazon Redshift Serverless managed endpoint.
* [updateNamespace](docs/sdk/README.md#updatenamespace) - Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example, you must specify both <code>adminUsername</code> and <code>adminUserPassword</code> to update either field, but you can't update both <code>kmsKeyId</code> and <code>logExports</code> in a single request.
* [updateSnapshot](docs/sdk/README.md#updatesnapshot) - Updates a snapshot.
* [updateUsageLimit](docs/sdk/README.md#updateusagelimit) - Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.
* [updateWorkgroup](docs/sdk/README.md#updateworkgroup) - Updates a workgroup with the specified configuration settings. You can't update multiple parameters in one request. For example, you can update <code>baseCapacity</code> or <code>port</code> in a single request, but you can't update both in the same request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
