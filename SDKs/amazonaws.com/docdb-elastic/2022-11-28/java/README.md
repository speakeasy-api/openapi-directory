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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateClusterRequestBodyAuthTypeEnum;
import org.openapis.openapi.models.operations.CreateClusterRequestBody;
import org.openapis.openapi.models.operations.CreateClusterRequest;
import org.openapis.openapi.models.operations.CreateClusterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateClusterRequest req = new CreateClusterRequest() {{
                requestBody = new CreateClusterRequestBody() {{
                    adminUserName = "corrupti";
                    adminUserPassword = "provident";
                    authType = "SECRET_ARN";
                    clientToken = "quibusdam";
                    clusterName = "unde";
                    kmsKeyId = "nulla";
                    preferredMaintenanceWindow = "corrupti";
                    shardCapacity = 847252;
                    shardCount = 423655;
                    subnetIds = new String[]{{
                        add("deserunt"),
                        add("suscipit"),
                        add("iure"),
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("debitis", "ipsa");
                        put("delectus", "tempora");
                    }};
                    vpcSecurityGroupIds = new String[]{{
                        add("molestiae"),
                        add("minus"),
                    }};
                }};
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "iusto";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "temporibus";
            }}            

            CreateClusterResponse res = sdk.createCluster(req);

            if (res.createClusterOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createCluster` - Creates a new Elastic DocumentDB cluster and returns its Cluster structure.
* `createClusterSnapshot` - Creates a snapshot of a cluster.
* `deleteCluster` - Delete a Elastic DocumentDB cluster.
* `deleteClusterSnapshot` - Delete a Elastic DocumentDB snapshot.
* `getCluster` - Returns information about a specific Elastic DocumentDB cluster.
* `getClusterSnapshot` - Returns information about a specific Elastic DocumentDB snapshot
* `listClusterSnapshots` - Returns information about Elastic DocumentDB snapshots for a specified cluster.
* `listClusters` - Returns information about provisioned Elastic DocumentDB clusters.
* `listTagsForResource` - Lists all tags on a Elastic DocumentDB resource
* `restoreClusterFromSnapshot` - Restores a Elastic DocumentDB cluster from a snapshot.
* `tagResource` - Adds metadata tags to a Elastic DocumentDB resource
* `untagResource` - Removes metadata tags to a Elastic DocumentDB resource
* `updateCluster` - Modifies a Elastic DocumentDB cluster. This includes updating admin-username/password, upgrading API version setting up a backup window and maintenance window
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
