# SDK

## Overview

For more information about AWS CloudHSM, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a> and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudhsmv2/>
### Available Operations

* [copyBackupToRegion](#copybackuptoregion) - Copy an AWS CloudHSM cluster backup to a different region.
* [createCluster](#createcluster) - Creates a new AWS CloudHSM cluster.
* [createHsm](#createhsm) - Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.
* [deleteBackup](#deletebackup) - Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see <a>RestoreBackup</a>.
* [deleteCluster](#deletecluster) - Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.
* [deleteHsm](#deletehsm) - Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use <a>DescribeClusters</a>.
* [describeBackups](#describebackups) - <p>Gets information about backups of AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more backups to get.</p>
* [describeClusters](#describeclusters) - <p>Gets information about AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more clusters to get.</p>
* [initializeCluster](#initializecluster) - Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use <a>DescribeClusters</a>.
* [listTags](#listtags) - <p>Gets a list of tags for the specified AWS CloudHSM cluster.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more tags to get.</p>
* [modifyBackupAttributes](#modifybackupattributes) - Modifies attributes for AWS CloudHSM backup.
* [modifyCluster](#modifycluster) - Modifies AWS CloudHSM cluster.
* [restoreBackup](#restorebackup) - Restores a specified AWS CloudHSM backup that is in the <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see <a>DeleteBackup</a>.
* [tagResource](#tagresource) - Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.
* [untagResource](#untagresource) - Removes the specified tag or tags from the specified AWS CloudHSM cluster.

## copyBackupToRegion

Copy an AWS CloudHSM cluster backup to a different region.

### Example Usage

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
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CopyBackupToRegionRequest req = new CopyBackupToRegionRequest(                new CopyBackupToRegionRequest("ab", "quis") {{
                                tagList = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("ipsam", "repellendus") {{
                                        key = "deserunt";
                                        value = "perferendis";
                                    }}),
                                }};
                            }};, CopyBackupToRegionXAmzTargetEnum.BALDR_API_SERVICE_COPY_BACKUP_TO_REGION) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quo";
                xAmzCredential = "odit";
                xAmzDate = "at";
                xAmzSecurityToken = "at";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "molestiae";
            }};            

            CopyBackupToRegionResponse res = sdk.sdk.copyBackupToRegion(req);

            if (res.copyBackupToRegionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCluster

Creates a new AWS CloudHSM cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClusterRequest;
import org.openapis.openapi.models.operations.CreateClusterResponse;
import org.openapis.openapi.models.operations.CreateClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.BackupRetentionPolicy;
import org.openapis.openapi.models.shared.BackupRetentionTypeEnum;
import org.openapis.openapi.models.shared.CreateClusterRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateClusterRequest req = new CreateClusterRequest(                new CreateClusterRequest("quod",                 new String[]{{
                                                add("totam"),
                                                add("porro"),
                                            }}) {{
                                backupRetentionPolicy = new BackupRetentionPolicy() {{
                                    type = BackupRetentionTypeEnum.DAYS;
                                    value = "dolorum";
                                }};;
                                sourceBackupId = "dicta";
                                tagList = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("fugit", "deleniti") {{
                                        key = "officia";
                                        value = "occaecati";
                                    }}),
                                    add(new Tag("totam", "beatae") {{
                                        key = "hic";
                                        value = "optio";
                                    }}),
                                    add(new Tag("modi", "qui") {{
                                        key = "commodi";
                                        value = "molestiae";
                                    }}),
                                }};
                            }};, CreateClusterXAmzTargetEnum.BALDR_API_SERVICE_CREATE_CLUSTER) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "cum";
                xAmzCredential = "esse";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
            }};            

            CreateClusterResponse res = sdk.sdk.createCluster(req);

            if (res.createClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createHsm

Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHsmRequest;
import org.openapis.openapi.models.operations.CreateHsmResponse;
import org.openapis.openapi.models.operations.CreateHsmXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateHsmRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateHsmRequest req = new CreateHsmRequest(                new CreateHsmRequest("natus", "sed") {{
                                ipAddress = "iste";
                            }};, CreateHsmXAmzTargetEnum.BALDR_API_SERVICE_CREATE_HSM) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
            }};            

            CreateHsmResponse res = sdk.sdk.createHsm(req);

            if (res.createHsmResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBackup

Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see <a>RestoreBackup</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBackupRequest;
import org.openapis.openapi.models.operations.DeleteBackupResponse;
import org.openapis.openapi.models.operations.DeleteBackupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteBackupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBackupRequest req = new DeleteBackupRequest(                new DeleteBackupRequest("iste");, DeleteBackupXAmzTargetEnum.BALDR_API_SERVICE_DELETE_BACKUP) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "quidem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "est";
            }};            

            DeleteBackupResponse res = sdk.sdk.deleteBackup(req);

            if (res.deleteBackupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCluster

Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteClusterRequest;
import org.openapis.openapi.models.operations.DeleteClusterResponse;
import org.openapis.openapi.models.operations.DeleteClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteClusterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteClusterRequest req = new DeleteClusterRequest(                new DeleteClusterRequest("laborum");, DeleteClusterXAmzTargetEnum.BALDR_API_SERVICE_DELETE_CLUSTER) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "corporis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "omnis";
            }};            

            DeleteClusterResponse res = sdk.sdk.deleteCluster(req);

            if (res.deleteClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteHsm

Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use <a>DescribeClusters</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHsmRequest;
import org.openapis.openapi.models.operations.DeleteHsmResponse;
import org.openapis.openapi.models.operations.DeleteHsmXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteHsmRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteHsmRequest req = new DeleteHsmRequest(                new DeleteHsmRequest("minima") {{
                                eniId = "excepturi";
                                eniIp = "accusantium";
                                hsmId = "iure";
                            }};, DeleteHsmXAmzTargetEnum.BALDR_API_SERVICE_DELETE_HSM) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "sapiente";
                xAmzDate = "architecto";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "culpa";
            }};            

            DeleteHsmResponse res = sdk.sdk.deleteHsm(req);

            if (res.deleteHsmResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBackups

<p>Gets information about backups of AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more backups to get.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBackupsRequest;
import org.openapis.openapi.models.operations.DescribeBackupsResponse;
import org.openapis.openapi.models.operations.DescribeBackupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeBackupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBackupsRequest req = new DescribeBackupsRequest(                new DescribeBackupsRequest() {{
                                filters = new java.util.HashMap<String, String[]>() {{
                                    put("mollitia", new String[]{{
                                        add("numquam"),
                                        add("commodi"),
                                        add("quam"),
                                    }});
                                    put("molestiae", new String[]{{
                                        add("error"),
                                    }});
                                    put("quia", new String[]{{
                                        add("vitae"),
                                        add("laborum"),
                                    }});
                                    put("animi", new String[]{{
                                        add("odit"),
                                        add("quo"),
                                    }});
                                }};
                                maxResults = 196582L;
                                nextToken = "tenetur";
                                sortAscending = false;
                            }};, DescribeBackupsXAmzTargetEnum.BALDR_API_SERVICE_DESCRIBE_BACKUPS) {{
                maxResults = "ipsam";
                nextToken = "id";
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quasi";
                xAmzDate = "error";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "quasi";
            }};            

            DescribeBackupsResponse res = sdk.sdk.describeBackups(req);

            if (res.describeBackupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeClusters

<p>Gets information about AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more clusters to get.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeClustersRequest;
import org.openapis.openapi.models.operations.DescribeClustersResponse;
import org.openapis.openapi.models.operations.DescribeClustersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeClustersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeClustersRequest req = new DescribeClustersRequest(                new DescribeClustersRequest() {{
                                filters = new java.util.HashMap<String, String[]>() {{
                                    put("vero", new String[]{{
                                        add("praesentium"),
                                        add("voluptatibus"),
                                    }});
                                    put("ipsa", new String[]{{
                                        add("voluptate"),
                                        add("cum"),
                                        add("perferendis"),
                                    }});
                                    put("doloremque", new String[]{{
                                        add("ut"),
                                        add("maiores"),
                                    }});
                                    put("dicta", new String[]{{
                                        add("dolore"),
                                        add("iusto"),
                                    }});
                                }};
                                maxResults = 118727L;
                                nextToken = "harum";
                            }};, DescribeClustersXAmzTargetEnum.BALDR_API_SERVICE_DESCRIBE_CLUSTERS) {{
                maxResults = "enim";
                nextToken = "accusamus";
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "quae";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "excepturi";
            }};            

            DescribeClustersResponse res = sdk.sdk.describeClusters(req);

            if (res.describeClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## initializeCluster

Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use <a>DescribeClusters</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InitializeClusterRequest;
import org.openapis.openapi.models.operations.InitializeClusterResponse;
import org.openapis.openapi.models.operations.InitializeClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.InitializeClusterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InitializeClusterRequest req = new InitializeClusterRequest(                new InitializeClusterRequest("modi", "praesentium", "rem");, InitializeClusterXAmzTargetEnum.BALDR_API_SERVICE_INITIALIZE_CLUSTER) {{
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "repudiandae";
                xAmzDate = "sint";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "incidunt";
            }};            

            InitializeClusterResponse res = sdk.sdk.initializeCluster(req);

            if (res.initializeClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTags

<p>Gets a list of tags for the specified AWS CloudHSM cluster.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more tags to get.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsRequest;
import org.openapis.openapi.models.operations.ListTagsResponse;
import org.openapis.openapi.models.operations.ListTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsRequest req = new ListTagsRequest(                new ListTagsRequest("consequatur") {{
                                maxResults = 667411L;
                                nextToken = "quibusdam";
                            }};, ListTagsXAmzTargetEnum.BALDR_API_SERVICE_LIST_TAGS) {{
                maxResults = "explicabo";
                nextToken = "deserunt";
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "labore";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "cupiditate";
            }};            

            ListTagsResponse res = sdk.sdk.listTags(req);

            if (res.listTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyBackupAttributes

Modifies attributes for AWS CloudHSM backup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyBackupAttributesRequest;
import org.openapis.openapi.models.operations.ModifyBackupAttributesResponse;
import org.openapis.openapi.models.operations.ModifyBackupAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ModifyBackupAttributesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyBackupAttributesRequest req = new ModifyBackupAttributesRequest(                new ModifyBackupAttributesRequest("perferendis", false);, ModifyBackupAttributesXAmzTargetEnum.BALDR_API_SERVICE_MODIFY_BACKUP_ATTRIBUTES) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "ipsam";
                xAmzDate = "alias";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "excepturi";
            }};            

            ModifyBackupAttributesResponse res = sdk.sdk.modifyBackupAttributes(req);

            if (res.modifyBackupAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyCluster

Modifies AWS CloudHSM cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyClusterRequest;
import org.openapis.openapi.models.operations.ModifyClusterResponse;
import org.openapis.openapi.models.operations.ModifyClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.BackupRetentionPolicy;
import org.openapis.openapi.models.shared.BackupRetentionTypeEnum;
import org.openapis.openapi.models.shared.ModifyClusterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyClusterRequest req = new ModifyClusterRequest(                new ModifyClusterRequest(                new BackupRetentionPolicy() {{
                                                type = BackupRetentionTypeEnum.DAYS;
                                                value = "facilis";
                                            }};, "tempore");, ModifyClusterXAmzTargetEnum.BALDR_API_SERVICE_MODIFY_CLUSTER) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "eum";
                xAmzDate = "non";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "aliquid";
            }};            

            ModifyClusterResponse res = sdk.sdk.modifyCluster(req);

            if (res.modifyClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## restoreBackup

Restores a specified AWS CloudHSM backup that is in the <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see <a>DeleteBackup</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestoreBackupRequest;
import org.openapis.openapi.models.operations.RestoreBackupResponse;
import org.openapis.openapi.models.operations.RestoreBackupXAmzTargetEnum;
import org.openapis.openapi.models.shared.RestoreBackupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RestoreBackupRequest req = new RestoreBackupRequest(                new RestoreBackupRequest("necessitatibus");, RestoreBackupXAmzTargetEnum.BALDR_API_SERVICE_RESTORE_BACKUP) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "officia";
                xAmzCredential = "dolor";
                xAmzDate = "debitis";
                xAmzSecurityToken = "a";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "in";
            }};            

            RestoreBackupResponse res = sdk.sdk.restoreBackup(req);

            if (res.restoreBackupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("illum",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("magnam", "cumque") {{
                                                    key = "rerum";
                                                    value = "dicta";
                                                }}),
                                                add(new Tag("aliquid", "laborum") {{
                                                    key = "facere";
                                                    value = "ea";
                                                }}),
                                                add(new Tag("occaecati", "enim") {{
                                                    key = "accusamus";
                                                    value = "non";
                                                }}),
                                                add(new Tag("quidem", "provident") {{
                                                    key = "accusamus";
                                                    value = "delectus";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.BALDR_API_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "id";
                xAmzCredential = "blanditiis";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "deserunt";
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

Removes the specified tag or tags from the specified AWS CloudHSM cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("vel",                 new String[]{{
                                                add("omnis"),
                                                add("molestiae"),
                                                add("perferendis"),
                                            }});, UntagResourceXAmzTargetEnum.BALDR_API_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "distinctio";
                xAmzDate = "id";
                xAmzSecurityToken = "labore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "suscipit";
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
