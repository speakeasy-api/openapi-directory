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
import org.openapis.openapi.models.operations.CreateClusterRequest;
import org.openapis.openapi.models.operations.CreateClusterRequestBody;
import org.openapis.openapi.models.operations.CreateClusterRequestBodyAuthTypeEnum;
import org.openapis.openapi.models.operations.CreateClusterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateClusterRequest req = new CreateClusterRequest(                new CreateClusterRequestBody("provident", "distinctio", CreateClusterRequestBodyAuthTypeEnum.SECRET_ARN, "unde", 857946L, 544883L) {{
                                clientToken = "illum";
                                kmsKeyId = "vel";
                                preferredMaintenanceWindow = "error";
                                subnetIds = new String[]{{
                                    add("suscipit"),
                                    add("iure"),
                                    add("magnam"),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("ipsa", "delectus");
                                    put("tempora", "suscipit");
                                    put("molestiae", "minus");
                                    put("placeat", "voluptatum");
                                }};
                                vpcSecurityGroupIds = new String[]{{
                                    add("excepturi"),
                                    add("nisi"),
                                }};
                            }};) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "ab";
                xAmzDate = "quis";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "perferendis";
            }};            

            CreateClusterResponse res = sdk.createCluster(req);

            if (res.createClusterOutput != null) {
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

* [createCluster](docs/sdk/README.md#createcluster) - Creates a new Elastic DocumentDB cluster and returns its Cluster structure.
* [createClusterSnapshot](docs/sdk/README.md#createclustersnapshot) - Creates a snapshot of a cluster.
* [deleteCluster](docs/sdk/README.md#deletecluster) - Delete a Elastic DocumentDB cluster.
* [deleteClusterSnapshot](docs/sdk/README.md#deleteclustersnapshot) - Delete a Elastic DocumentDB snapshot.
* [getCluster](docs/sdk/README.md#getcluster) - Returns information about a specific Elastic DocumentDB cluster.
* [getClusterSnapshot](docs/sdk/README.md#getclustersnapshot) - Returns information about a specific Elastic DocumentDB snapshot
* [listClusterSnapshots](docs/sdk/README.md#listclustersnapshots) - Returns information about Elastic DocumentDB snapshots for a specified cluster.
* [listClusters](docs/sdk/README.md#listclusters) - Returns information about provisioned Elastic DocumentDB clusters.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all tags on a Elastic DocumentDB resource
* [restoreClusterFromSnapshot](docs/sdk/README.md#restoreclusterfromsnapshot) - Restores a Elastic DocumentDB cluster from a snapshot.
* [tagResource](docs/sdk/README.md#tagresource) - Adds metadata tags to a Elastic DocumentDB resource
* [untagResource](docs/sdk/README.md#untagresource) - Removes metadata tags to a Elastic DocumentDB resource
* [updateCluster](docs/sdk/README.md#updatecluster) - Modifies a Elastic DocumentDB cluster. This includes updating admin-username/password, upgrading API version setting up a backup window and maintenance window
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
