# SDK

## Overview

The new Amazon Elastic DocumentDB service endpoint.

Amazon Web Services documentation
<https://docs.aws.amazon.com/docdb-elastic/>
### Available Operations

* [createCluster](#createcluster) - Creates a new Elastic DocumentDB cluster and returns its Cluster structure.
* [createClusterSnapshot](#createclustersnapshot) - Creates a snapshot of a cluster.
* [deleteCluster](#deletecluster) - Delete a Elastic DocumentDB cluster.
* [deleteClusterSnapshot](#deleteclustersnapshot) - Delete a Elastic DocumentDB snapshot.
* [getCluster](#getcluster) - Returns information about a specific Elastic DocumentDB cluster.
* [getClusterSnapshot](#getclustersnapshot) - Returns information about a specific Elastic DocumentDB snapshot
* [listClusterSnapshots](#listclustersnapshots) - Returns information about Elastic DocumentDB snapshots for a specified cluster.
* [listClusters](#listclusters) - Returns information about provisioned Elastic DocumentDB clusters.
* [listTagsForResource](#listtagsforresource) - Lists all tags on a Elastic DocumentDB resource
* [restoreClusterFromSnapshot](#restoreclusterfromsnapshot) - Restores a Elastic DocumentDB cluster from a snapshot.
* [tagResource](#tagresource) - Adds metadata tags to a Elastic DocumentDB resource
* [untagResource](#untagresource) - Removes metadata tags to a Elastic DocumentDB resource
* [updateCluster](#updatecluster) - Modifies a Elastic DocumentDB cluster. This includes updating admin-username/password, upgrading API version setting up a backup window and maintenance window

## createCluster

Creates a new Elastic DocumentDB cluster and returns its Cluster structure.

### Example Usage

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
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateClusterRequest req = new CreateClusterRequest(                new CreateClusterRequestBody("repellendus", "sapiente", CreateClusterRequestBodyAuthTypeEnum.SECRET_ARN, "odit", 870013L, 870088L) {{
                                clientToken = "maiores";
                                kmsKeyId = "molestiae";
                                preferredMaintenanceWindow = "quod";
                                subnetIds = new String[]{{
                                    add("esse"),
                                    add("totam"),
                                    add("porro"),
                                    add("dolorum"),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("nam", "officia");
                                }};
                                vpcSecurityGroupIds = new String[]{{
                                    add("fugit"),
                                    add("deleniti"),
                                    add("hic"),
                                }};
                            }};) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            CreateClusterResponse res = sdk.sdk.createCluster(req);

            if (res.createClusterOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createClusterSnapshot

Creates a snapshot of a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClusterSnapshotRequest;
import org.openapis.openapi.models.operations.CreateClusterSnapshotRequestBody;
import org.openapis.openapi.models.operations.CreateClusterSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateClusterSnapshotRequest req = new CreateClusterSnapshotRequest(                new CreateClusterSnapshotRequestBody("cum", "esse") {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("excepturi", "aspernatur");
                                }};
                            }};) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ad";
                xAmzCredential = "natus";
                xAmzDate = "sed";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "natus";
            }};            

            CreateClusterSnapshotResponse res = sdk.sdk.createClusterSnapshot(req);

            if (res.createClusterSnapshotOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCluster

Delete a Elastic DocumentDB cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteClusterRequest;
import org.openapis.openapi.models.operations.DeleteClusterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteClusterRequest req = new DeleteClusterRequest("hic") {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "iste";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "saepe";
            }};            

            DeleteClusterResponse res = sdk.sdk.deleteCluster(req);

            if (res.deleteClusterOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteClusterSnapshot

Delete a Elastic DocumentDB snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteClusterSnapshotRequest;
import org.openapis.openapi.models.operations.DeleteClusterSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteClusterSnapshotRequest req = new DeleteClusterSnapshotRequest("architecto") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "est";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "dolorem";
            }};            

            DeleteClusterSnapshotResponse res = sdk.sdk.deleteClusterSnapshot(req);

            if (res.deleteClusterSnapshotOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCluster

Returns information about a specific Elastic DocumentDB cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClusterRequest;
import org.openapis.openapi.models.operations.GetClusterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetClusterRequest req = new GetClusterRequest("explicabo") {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "enim";
                xAmzCredential = "omnis";
                xAmzDate = "nemo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "accusantium";
            }};            

            GetClusterResponse res = sdk.sdk.getCluster(req);

            if (res.getClusterOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClusterSnapshot

Returns information about a specific Elastic DocumentDB snapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClusterSnapshotRequest;
import org.openapis.openapi.models.operations.GetClusterSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetClusterSnapshotRequest req = new GetClusterSnapshotRequest("culpa") {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            GetClusterSnapshotResponse res = sdk.sdk.getClusterSnapshot(req);

            if (res.getClusterSnapshotOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listClusterSnapshots

Returns information about Elastic DocumentDB snapshots for a specified cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListClusterSnapshotsRequest;
import org.openapis.openapi.models.operations.ListClusterSnapshotsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListClusterSnapshotsRequest req = new ListClusterSnapshotsRequest() {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "commodi";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "velit";
                clusterArn = "error";
                maxResults = 158969L;
                nextToken = "quis";
            }};            

            ListClusterSnapshotsResponse res = sdk.sdk.listClusterSnapshots(req);

            if (res.listClusterSnapshotsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listClusters

Returns information about provisioned Elastic DocumentDB clusters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListClustersRequest;
import org.openapis.openapi.models.operations.ListClustersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListClustersRequest req = new ListClustersRequest() {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "animi";
                xAmzCredential = "enim";
                xAmzDate = "odit";
                xAmzSecurityToken = "quo";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "tenetur";
                maxResults = 368725L;
                nextToken = "id";
            }};            

            ListClustersResponse res = sdk.sdk.listClusters(req);

            if (res.listClustersOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists all tags on a Elastic DocumentDB resource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("aut") {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "error";
                xAmzCredential = "temporibus";
                xAmzDate = "laborum";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## restoreClusterFromSnapshot

Restores a Elastic DocumentDB cluster from a snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestoreClusterFromSnapshotRequest;
import org.openapis.openapi.models.operations.RestoreClusterFromSnapshotRequestBody;
import org.openapis.openapi.models.operations.RestoreClusterFromSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RestoreClusterFromSnapshotRequest req = new RestoreClusterFromSnapshotRequest(                new RestoreClusterFromSnapshotRequestBody("nihil") {{
                                kmsKeyId = "praesentium";
                                subnetIds = new String[]{{
                                    add("ipsa"),
                                    add("omnis"),
                                    add("voluptate"),
                                    add("cum"),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("doloremque", "reprehenderit");
                                }};
                                vpcSecurityGroupIds = new String[]{{
                                    add("maiores"),
                                    add("dicta"),
                                }};
                            }};, "corporis") {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "dicta";
                xAmzDate = "harum";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "commodi";
            }};            

            RestoreClusterFromSnapshotResponse res = sdk.sdk.restoreClusterFromSnapshot(req);

            if (res.restoreClusterFromSnapshotOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds metadata tags to a Elastic DocumentDB resource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("ipsum", "quidem");
                                            }});, "molestias") {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "modi";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "quasi";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes metadata tags to a Elastic DocumentDB resource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("sint",                 new String[]{{
                                add("itaque"),
                            }}) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "enim";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "deserunt";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCluster

Modifies a Elastic DocumentDB cluster. This includes updating admin-username/password, upgrading API version setting up a backup window and maintenance window

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClusterRequest;
import org.openapis.openapi.models.operations.UpdateClusterRequestBody;
import org.openapis.openapi.models.operations.UpdateClusterRequestBodyAuthTypeEnum;
import org.openapis.openapi.models.operations.UpdateClusterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateClusterRequest req = new UpdateClusterRequest(                new UpdateClusterRequestBody() {{
                                adminUserPassword = "quibusdam";
                                authType = UpdateClusterRequestBodyAuthTypeEnum.PLAIN_TEXT;
                                clientToken = "modi";
                                preferredMaintenanceWindow = "qui";
                                shardCapacity = 397821L;
                                shardCount = 586513L;
                                subnetIds = new String[]{{
                                    add("perferendis"),
                                    add("magni"),
                                    add("assumenda"),
                                }};
                                vpcSecurityGroupIds = new String[]{{
                                    add("alias"),
                                    add("fugit"),
                                }};
                            }};, "dolorum") {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "facilis";
                xAmzDate = "tempore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "eum";
            }};            

            UpdateClusterResponse res = sdk.sdk.updateCluster(req);

            if (res.updateClusterOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
