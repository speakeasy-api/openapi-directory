# SDK

## Overview

DAX is a managed caching service engineered for Amazon DynamoDB. DAX dramatically speeds up database reads by caching frequently-accessed data from DynamoDB, so applications can access that data with sub-millisecond latency. You can create a DAX cluster easily, using the AWS Management Console. With a few simple modifications to your code, your application can begin taking advantage of the DAX cluster and realize significant improvements in read performance.

Amazon Web Services documentation
<https://docs.aws.amazon.com/dax/>
### Available Operations

* [createCluster](#createcluster) - Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.
* [createParameterGroup](#createparametergroup) - Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.
* [createSubnetGroup](#createsubnetgroup) - Creates a new subnet group.
* [decreaseReplicationFactor](#decreasereplicationfactor) - <p>Removes one or more nodes from a DAX cluster.</p> <note> <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p> </note>
* [deleteCluster](#deletecluster) - Deletes a previously provisioned DAX cluster. <i>DeleteCluster</i> deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.
* [deleteParameterGroup](#deleteparametergroup) - Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.
* [deleteSubnetGroup](#deletesubnetgroup) - <p>Deletes a subnet group.</p> <note> <p>You cannot delete a subnet group if it is associated with any DAX clusters.</p> </note>
* [describeClusters](#describeclusters) - <p>Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied.</p> <p>If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the DELETING state, only cluster level information will be displayed.</p> <p>If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.</p>
* [describeDefaultParameters](#describedefaultparameters) - Returns the default system parameter information for the DAX caching software.
* [describeEvents](#describeevents) - <p>Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last 24 hours are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
* [describeParameterGroups](#describeparametergroups) - Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.
* [describeParameters](#describeparameters) - Returns the detailed parameter list for a particular parameter group.
* [describeSubnetGroups](#describesubnetgroups) - Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.
* [increaseReplicationFactor](#increasereplicationfactor) - Adds one or more nodes to a DAX cluster.
* [listTags](#listtags) - List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to 10 times per second, per account.
* [rebootNode](#rebootnode) - <p>Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.</p> <note> <p> <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache. </p> </note>
* [tagResource](#tagresource) - Associates a set of tags with a DAX resource. You can call <code>TagResource</code> up to 5 times per second, per account. 
* [untagResource](#untagresource) - Removes the association of tags from a DAX resource. You can call <code>UntagResource</code> up to 5 times per second, per account. 
* [updateCluster](#updatecluster) - Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.
* [updateParameterGroup](#updateparametergroup) - Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
* [updateSubnetGroup](#updatesubnetgroup) - Modifies an existing subnet group.

## createCluster

Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClusterRequest;
import org.openapis.openapi.models.operations.CreateClusterResponse;
import org.openapis.openapi.models.operations.CreateClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClusterEndpointEncryptionTypeEnum;
import org.openapis.openapi.models.shared.CreateClusterRequest;
import org.openapis.openapi.models.shared.SSESpecification;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateClusterRequest req = new CreateClusterRequest(                new CreateClusterRequest("deserunt", "perferendis", "ipsam", 832620L) {{
                                availabilityZones = new String[]{{
                                    add("quo"),
                                    add("odit"),
                                    add("at"),
                                    add("at"),
                                }};
                                clusterEndpointEncryptionType = ClusterEndpointEncryptionTypeEnum.TLS;
                                description = "molestiae";
                                notificationTopicArn = "quod";
                                parameterGroupName = "quod";
                                preferredMaintenanceWindow = "esse";
                                sseSpecification = new SSESpecification(false);;
                                securityGroupIds = new String[]{{
                                    add("porro"),
                                    add("dolorum"),
                                    add("dicta"),
                                }};
                                subnetGroupName = "nam";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "occaecati";
                                        value = "fugit";
                                    }}),
                                    add(new Tag() {{
                                        key = "deleniti";
                                        value = "hic";
                                    }}),
                                    add(new Tag() {{
                                        key = "optio";
                                        value = "totam";
                                    }}),
                                }};
                            }};, CreateClusterXAmzTargetEnum.AMAZON_DAXV3_CREATE_CLUSTER) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "molestiae";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "cum";
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

## createParameterGroup

Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateParameterGroupRequest;
import org.openapis.openapi.models.operations.CreateParameterGroupResponse;
import org.openapis.openapi.models.operations.CreateParameterGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateParameterGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateParameterGroupRequest req = new CreateParameterGroupRequest(                new CreateParameterGroupRequest("ipsum") {{
                                description = "excepturi";
                            }};, CreateParameterGroupXAmzTargetEnum.AMAZON_DAXV3_CREATE_PARAMETER_GROUP) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ad";
                xAmzDate = "natus";
                xAmzSecurityToken = "sed";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolor";
            }};            

            CreateParameterGroupResponse res = sdk.sdk.createParameterGroup(req);

            if (res.createParameterGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubnetGroup

Creates a new subnet group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubnetGroupRequest;
import org.openapis.openapi.models.operations.CreateSubnetGroupResponse;
import org.openapis.openapi.models.operations.CreateSubnetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateSubnetGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSubnetGroupRequest req = new CreateSubnetGroupRequest(                new CreateSubnetGroupRequest("laboriosam",                 new String[]{{
                                                add("saepe"),
                                                add("fuga"),
                                                add("in"),
                                                add("corporis"),
                                            }}) {{
                                description = "iste";
                            }};, CreateSubnetGroupXAmzTargetEnum.AMAZON_DAXV3_CREATE_SUBNET_GROUP) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "quidem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "est";
            }};            

            CreateSubnetGroupResponse res = sdk.sdk.createSubnetGroup(req);

            if (res.createSubnetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## decreaseReplicationFactor

<p>Removes one or more nodes from a DAX cluster.</p> <note> <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DecreaseReplicationFactorRequest;
import org.openapis.openapi.models.operations.DecreaseReplicationFactorResponse;
import org.openapis.openapi.models.operations.DecreaseReplicationFactorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DecreaseReplicationFactorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DecreaseReplicationFactorRequest req = new DecreaseReplicationFactorRequest(                new DecreaseReplicationFactorRequest("laborum", 170909L) {{
                                availabilityZones = new String[]{{
                                    add("corporis"),
                                }};
                                nodeIdsToRemove = new String[]{{
                                    add("nobis"),
                                }};
                            }};, DecreaseReplicationFactorXAmzTargetEnum.AMAZON_DAXV3_DECREASE_REPLICATION_FACTOR) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "nemo";
                xAmzDate = "minima";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "iure";
            }};            

            DecreaseReplicationFactorResponse res = sdk.sdk.decreaseReplicationFactor(req);

            if (res.decreaseReplicationFactorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCluster

Deletes a previously provisioned DAX cluster. <i>DeleteCluster</i> deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.

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
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteClusterRequest req = new DeleteClusterRequest(                new DeleteClusterRequest("doloribus");, DeleteClusterXAmzTargetEnum.AMAZON_DAXV3_DELETE_CLUSTER) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "mollitia";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "repellat";
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

## deleteParameterGroup

Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteParameterGroupRequest;
import org.openapis.openapi.models.operations.DeleteParameterGroupResponse;
import org.openapis.openapi.models.operations.DeleteParameterGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteParameterGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteParameterGroupRequest req = new DeleteParameterGroupRequest(                new DeleteParameterGroupRequest("occaecati");, DeleteParameterGroupXAmzTargetEnum.AMAZON_DAXV3_DELETE_PARAMETER_GROUP) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "quam";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "velit";
                xAmzSignature = "error";
                xAmzSignedHeaders = "quia";
            }};            

            DeleteParameterGroupResponse res = sdk.sdk.deleteParameterGroup(req);

            if (res.deleteParameterGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSubnetGroup

<p>Deletes a subnet group.</p> <note> <p>You cannot delete a subnet group if it is associated with any DAX clusters.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubnetGroupRequest;
import org.openapis.openapi.models.operations.DeleteSubnetGroupResponse;
import org.openapis.openapi.models.operations.DeleteSubnetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSubnetGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSubnetGroupRequest req = new DeleteSubnetGroupRequest(                new DeleteSubnetGroupRequest("vitae");, DeleteSubnetGroupXAmzTargetEnum.AMAZON_DAXV3_DELETE_SUBNET_GROUP) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "animi";
                xAmzCredential = "enim";
                xAmzDate = "odit";
                xAmzSecurityToken = "quo";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "tenetur";
            }};            

            DeleteSubnetGroupResponse res = sdk.sdk.deleteSubnetGroup(req);

            if (res.deleteSubnetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeClusters

<p>Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied.</p> <p>If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the DELETING state, only cluster level information will be displayed.</p> <p>If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.</p>

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
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeClustersRequest req = new DescribeClustersRequest(                new DescribeClustersRequest() {{
                                clusterNames = new String[]{{
                                    add("possimus"),
                                    add("aut"),
                                    add("quasi"),
                                }};
                                maxResults = 622846L;
                                nextToken = "temporibus";
                            }};, DescribeClustersXAmzTargetEnum.AMAZON_DAXV3_DESCRIBE_CLUSTERS) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "reiciendis";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "vero";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "praesentium";
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

## describeDefaultParameters

Returns the default system parameter information for the DAX caching software.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDefaultParametersRequest;
import org.openapis.openapi.models.operations.DescribeDefaultParametersResponse;
import org.openapis.openapi.models.operations.DescribeDefaultParametersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDefaultParametersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDefaultParametersRequest req = new DescribeDefaultParametersRequest(                new DescribeDefaultParametersRequest() {{
                                maxResults = 55714L;
                                nextToken = "omnis";
                            }};, DescribeDefaultParametersXAmzTargetEnum.AMAZON_DAXV3_DESCRIBE_DEFAULT_PARAMETERS) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "cum";
                xAmzCredential = "perferendis";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "maiores";
            }};            

            DescribeDefaultParametersResponse res = sdk.sdk.describeDefaultParameters(req);

            if (res.describeDefaultParametersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEvents

<p>Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last 24 hours are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEventsRequest;
import org.openapis.openapi.models.operations.DescribeEventsResponse;
import org.openapis.openapi.models.operations.DescribeEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEventsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEventsRequest req = new DescribeEventsRequest(                new DescribeEventsRequest() {{
                                duration = 359444L;
                                endTime = OffsetDateTime.parse("2022-07-09T11:22:20.922Z");
                                maxResults = 118727L;
                                nextToken = "harum";
                                sourceName = "enim";
                                sourceType = SourceTypeEnum.SUBNET_GROUP;
                                startTime = OffsetDateTime.parse("2022-01-30T20:15:26.045Z");
                            }};, DescribeEventsXAmzTargetEnum.AMAZON_DAXV3_DESCRIBE_EVENTS) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quidem";
                xAmzDate = "molestias";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "modi";
            }};            

            DescribeEventsResponse res = sdk.sdk.describeEvents(req);

            if (res.describeEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeParameterGroups

Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeParameterGroupsRequest;
import org.openapis.openapi.models.operations.DescribeParameterGroupsResponse;
import org.openapis.openapi.models.operations.DescribeParameterGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeParameterGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeParameterGroupsRequest req = new DescribeParameterGroupsRequest(                new DescribeParameterGroupsRequest() {{
                                maxResults = 523248L;
                                nextToken = "voluptates";
                                parameterGroupNames = new String[]{{
                                    add("repudiandae"),
                                }};
                            }};, DescribeParameterGroupsXAmzTargetEnum.AMAZON_DAXV3_DESCRIBE_PARAMETER_GROUPS) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "itaque";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "enim";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "est";
            }};            

            DescribeParameterGroupsResponse res = sdk.sdk.describeParameterGroups(req);

            if (res.describeParameterGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeParameters

Returns the detailed parameter list for a particular parameter group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeParametersRequest;
import org.openapis.openapi.models.operations.DescribeParametersResponse;
import org.openapis.openapi.models.operations.DescribeParametersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeParametersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeParametersRequest req = new DescribeParametersRequest(                new DescribeParametersRequest("explicabo") {{
                                maxResults = 647174L;
                                nextToken = "distinctio";
                                source = "quibusdam";
                            }};, DescribeParametersXAmzTargetEnum.AMAZON_DAXV3_DESCRIBE_PARAMETERS) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
            }};            

            DescribeParametersResponse res = sdk.sdk.describeParameters(req);

            if (res.describeParametersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSubnetGroups

Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSubnetGroupsRequest;
import org.openapis.openapi.models.operations.DescribeSubnetGroupsResponse;
import org.openapis.openapi.models.operations.DescribeSubnetGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSubnetGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSubnetGroupsRequest req = new DescribeSubnetGroupsRequest(                new DescribeSubnetGroupsRequest() {{
                                maxResults = 828940L;
                                nextToken = "ipsam";
                                subnetGroupNames = new String[]{{
                                    add("fugit"),
                                }};
                            }};, DescribeSubnetGroupsXAmzTargetEnum.AMAZON_DAXV3_DESCRIBE_SUBNET_GROUPS) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "tempora";
                xAmzDate = "facilis";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "delectus";
            }};            

            DescribeSubnetGroupsResponse res = sdk.sdk.describeSubnetGroups(req);

            if (res.describeSubnetGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## increaseReplicationFactor

Adds one or more nodes to a DAX cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IncreaseReplicationFactorRequest;
import org.openapis.openapi.models.operations.IncreaseReplicationFactorResponse;
import org.openapis.openapi.models.operations.IncreaseReplicationFactorXAmzTargetEnum;
import org.openapis.openapi.models.shared.IncreaseReplicationFactorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            IncreaseReplicationFactorRequest req = new IncreaseReplicationFactorRequest(                new IncreaseReplicationFactorRequest("non", 756107L) {{
                                availabilityZones = new String[]{{
                                    add("aliquid"),
                                    add("provident"),
                                    add("necessitatibus"),
                                }};
                            }};, IncreaseReplicationFactorXAmzTargetEnum.AMAZON_DAXV3_INCREASE_REPLICATION_FACTOR) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "officia";
                xAmzCredential = "dolor";
                xAmzDate = "debitis";
                xAmzSecurityToken = "a";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "in";
            }};            

            IncreaseReplicationFactorResponse res = sdk.sdk.increaseReplicationFactor(req);

            if (res.increaseReplicationFactorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTags

List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to 10 times per second, per account.

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
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsRequest req = new ListTagsRequest(                new ListTagsRequest("illum") {{
                                nextToken = "maiores";
                            }};, ListTagsXAmzTargetEnum.AMAZON_DAXV3_LIST_TAGS) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "magnam";
                xAmzDate = "cumque";
                xAmzSecurityToken = "facere";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "aliquid";
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

## rebootNode

<p>Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.</p> <note> <p> <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RebootNodeRequest;
import org.openapis.openapi.models.operations.RebootNodeResponse;
import org.openapis.openapi.models.operations.RebootNodeXAmzTargetEnum;
import org.openapis.openapi.models.shared.RebootNodeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RebootNodeRequest req = new RebootNodeRequest(                new RebootNodeRequest("accusamus", "non");, RebootNodeXAmzTargetEnum.AMAZON_DAXV3_REBOOT_NODE) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "delectus";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nam";
            }};            

            RebootNodeResponse res = sdk.sdk.rebootNode(req);

            if (res.rebootNodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Associates a set of tags with a DAX resource. You can call <code>TagResource</code> up to 5 times per second, per account. 

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
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("blanditiis",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "sapiente";
                                                    value = "amet";
                                                }}),
                                                add(new Tag() {{
                                                    key = "deserunt";
                                                    value = "nisi";
                                                }}),
                                                add(new Tag() {{
                                                    key = "vel";
                                                    value = "natus";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AMAZON_DAXV3_TAG_RESOURCE) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "perferendis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "id";
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

Removes the association of tags from a DAX resource. You can call <code>UntagResource</code> up to 5 times per second, per account. 

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
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("labore",                 new String[]{{
                                                add("natus"),
                                                add("nobis"),
                                            }});, UntagResourceXAmzTargetEnum.AMAZON_DAXV3_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "vero";
                xAmzCredential = "aspernatur";
                xAmzDate = "architecto";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "et";
                xAmzSignedHeaders = "excepturi";
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

Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClusterRequest;
import org.openapis.openapi.models.operations.UpdateClusterResponse;
import org.openapis.openapi.models.operations.UpdateClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateClusterRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateClusterRequest req = new UpdateClusterRequest(                new UpdateClusterRequest("provident") {{
                                description = "quos";
                                notificationTopicArn = "sint";
                                notificationTopicStatus = "accusantium";
                                parameterGroupName = "mollitia";
                                preferredMaintenanceWindow = "reiciendis";
                                securityGroupIds = new String[]{{
                                    add("ad"),
                                    add("eum"),
                                    add("dolor"),
                                }};
                            }};, UpdateClusterXAmzTargetEnum.AMAZON_DAXV3_UPDATE_CLUSTER) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "odit";
                xAmzCredential = "nemo";
                xAmzDate = "quasi";
                xAmzSecurityToken = "iure";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "debitis";
            }};            

            UpdateClusterResponse res = sdk.sdk.updateCluster(req);

            if (res.updateClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateParameterGroup

Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateParameterGroupRequest;
import org.openapis.openapi.models.operations.UpdateParameterGroupResponse;
import org.openapis.openapi.models.operations.UpdateParameterGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.ParameterNameValue;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateParameterGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateParameterGroupRequest req = new UpdateParameterGroupRequest(                new UpdateParameterGroupRequest("maxime",                 new org.openapis.openapi.models.shared.ParameterNameValue[]{{
                                                add(new ParameterNameValue() {{
                                                    parameterName = "facilis";
                                                    parameterValue = "in";
                                                }}),
                                                add(new ParameterNameValue() {{
                                                    parameterName = "architecto";
                                                    parameterValue = "architecto";
                                                }}),
                                                add(new ParameterNameValue() {{
                                                    parameterName = "repudiandae";
                                                    parameterValue = "ullam";
                                                }}),
                                            }});, UpdateParameterGroupXAmzTargetEnum.AMAZON_DAXV3_UPDATE_PARAMETER_GROUP) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "repellat";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "sed";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "pariatur";
            }};            

            UpdateParameterGroupResponse res = sdk.sdk.updateParameterGroup(req);

            if (res.updateParameterGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubnetGroup

Modifies an existing subnet group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubnetGroupRequest;
import org.openapis.openapi.models.operations.UpdateSubnetGroupResponse;
import org.openapis.openapi.models.operations.UpdateSubnetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateSubnetGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSubnetGroupRequest req = new UpdateSubnetGroupRequest(                new UpdateSubnetGroupRequest("consequuntur") {{
                                description = "praesentium";
                                subnetIds = new String[]{{
                                    add("magni"),
                                    add("sunt"),
                                    add("quo"),
                                }};
                            }};, UpdateSubnetGroupXAmzTargetEnum.AMAZON_DAXV3_UPDATE_SUBNET_GROUP) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "maxime";
                xAmzDate = "ea";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "ea";
            }};            

            UpdateSubnetGroupResponse res = sdk.sdk.updateSubnetGroup(req);

            if (res.updateSubnetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
