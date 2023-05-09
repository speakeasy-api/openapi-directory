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
import org.openapis.openapi.models.operations.CopyBackupToRegionRequest;
import org.openapis.openapi.models.operations.CopyBackupToRegionResponse;
import org.openapis.openapi.models.operations.CopyBackupToRegionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CopyBackupToRegionRequest;
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

            CopyBackupToRegionRequest req = new CopyBackupToRegionRequest(                new CopyBackupToRegionRequest("provident", "distinctio") {{
                                tagList = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("corrupti", "illum") {{
                                        key = "unde";
                                        value = "nulla";
                                    }}),
                                    add(new Tag("deserunt", "suscipit") {{
                                        key = "vel";
                                        value = "error";
                                    }}),
                                    add(new Tag("debitis", "ipsa") {{
                                        key = "iure";
                                        value = "magnam";
                                    }}),
                                    add(new Tag("suscipit", "molestiae") {{
                                        key = "delectus";
                                        value = "tempora";
                                    }}),
                                }};
                            }};, CopyBackupToRegionXAmzTargetEnum.BALDR_API_SERVICE_COPY_BACKUP_TO_REGION) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            CopyBackupToRegionResponse res = sdk.copyBackupToRegion(req);

            if (res.copyBackupToRegionResponse != null) {
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

* [copyBackupToRegion](docs/sdk/README.md#copybackuptoregion) - Copy an AWS CloudHSM cluster backup to a different region.
* [createCluster](docs/sdk/README.md#createcluster) - Creates a new AWS CloudHSM cluster.
* [createHsm](docs/sdk/README.md#createhsm) - Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.
* [deleteBackup](docs/sdk/README.md#deletebackup) - Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see <a>RestoreBackup</a>.
* [deleteCluster](docs/sdk/README.md#deletecluster) - Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.
* [deleteHsm](docs/sdk/README.md#deletehsm) - Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use <a>DescribeClusters</a>.
* [describeBackups](docs/sdk/README.md#describebackups) - <p>Gets information about backups of AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more backups to get.</p>
* [describeClusters](docs/sdk/README.md#describeclusters) - <p>Gets information about AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more clusters to get.</p>
* [initializeCluster](docs/sdk/README.md#initializecluster) - Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use <a>DescribeClusters</a>.
* [listTags](docs/sdk/README.md#listtags) - <p>Gets a list of tags for the specified AWS CloudHSM cluster.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more tags to get.</p>
* [modifyBackupAttributes](docs/sdk/README.md#modifybackupattributes) - Modifies attributes for AWS CloudHSM backup.
* [modifyCluster](docs/sdk/README.md#modifycluster) - Modifies AWS CloudHSM cluster.
* [restoreBackup](docs/sdk/README.md#restorebackup) - Restores a specified AWS CloudHSM backup that is in the <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see <a>DeleteBackup</a>.
* [tagResource](docs/sdk/README.md#tagresource) - Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.
* [untagResource](docs/sdk/README.md#untagresource) - Removes the specified tag or tags from the specified AWS CloudHSM cluster.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
