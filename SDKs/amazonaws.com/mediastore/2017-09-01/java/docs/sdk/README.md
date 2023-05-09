# SDK

## Overview

An AWS Elemental MediaStore container is a namespace that holds folders and objects. You use a container endpoint to create, read, and delete objects. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/mediastore/>
### Available Operations

* [createContainer](#createcontainer) - Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.
* [deleteContainer](#deletecontainer) - Deletes the specified container. Before you make a <code>DeleteContainer</code> request, delete any objects in the container or in any folders in the container. You can delete only empty containers. 
* [deleteContainerPolicy](#deletecontainerpolicy) - Deletes the access policy that is associated with the specified container.
* [deleteCorsPolicy](#deletecorspolicy) - <p>Deletes the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission by default and can grant this permission to others.</p>
* [deleteLifecyclePolicy](#deletelifecyclepolicy) - Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.
* [deleteMetricPolicy](#deletemetricpolicy) - Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.
* [describeContainer](#describecontainer) - Retrieves the properties of the requested container. This request is commonly used to retrieve the endpoint of a container. An endpoint is a value assigned by the service when a new container is created. A container's endpoint does not change after it has been assigned. The <code>DescribeContainer</code> request returns a single <code>Container</code> object based on <code>ContainerName</code>. To return all <code>Container</code> objects that are associated with a specified AWS account, use <a>ListContainers</a>.
* [getContainerPolicy](#getcontainerpolicy) - Retrieves the access policy for the specified container. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.
* [getCorsPolicy](#getcorspolicy) - <p>Returns the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this permission and can grant it to others.</p>
* [getLifecyclePolicy](#getlifecyclepolicy) - Retrieves the object lifecycle policy that is assigned to a container.
* [getMetricPolicy](#getmetricpolicy) - Returns the metric policy for the specified container. 
* [listContainers](#listcontainers) - <p>Lists the properties of all containers in AWS Elemental MediaStore. </p> <p>You can query to receive all the containers in one response. Or you can include the <code>MaxResults</code> parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the <code>NextToken</code> parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive. </p> <p>See also <a>DescribeContainer</a>, which gets the properties of one container. </p>
* [listTagsForResource](#listtagsforresource) - Returns a list of the tags assigned to the specified container. 
* [putContainerPolicy](#putcontainerpolicy) - <p>Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.</p> <p>For this release of the REST API, you can create only one policy for a container. If you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing policy. </p>
* [putCorsPolicy](#putcorspolicy) - <p>Sets the cross-origin resource sharing (CORS) configuration on a container so that the container can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your AWS Elemental MediaStore container at my.example.container.com by using the browser's XMLHttpRequest capability.</p> <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS policy, you configure rules that identify origins and the HTTP methods that can be executed on your container. The policy can contain up to 398,000 characters. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.</p> <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>
* [putLifecyclePolicy](#putlifecyclepolicy) - <p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p> <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>
* [putMetricPolicy](#putmetricpolicy) - The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.
* [startAccessLogging](#startaccesslogging) - Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.
* [stopAccessLogging](#stopaccesslogging) - Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.
* [tagResource](#tagresource) - Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.
* [untagResource](#untagresource) - Removes tags from the specified container. You can specify one or more tags to remove. 

## createContainer

Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContainerRequest;
import org.openapis.openapi.models.operations.CreateContainerResponse;
import org.openapis.openapi.models.operations.CreateContainerXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateContainerInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateContainerRequest req = new CreateContainerRequest(                new CreateContainerInput("minus") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("excepturi") {{
                                        key = "voluptatum";
                                        value = "iusto";
                                    }}),
                                    add(new Tag("temporibus") {{
                                        key = "nisi";
                                        value = "recusandae";
                                    }}),
                                    add(new Tag("veritatis") {{
                                        key = "ab";
                                        value = "quis";
                                    }}),
                                    add(new Tag("ipsam") {{
                                        key = "deserunt";
                                        value = "perferendis";
                                    }}),
                                }};
                            }};, CreateContainerXAmzTargetEnum.MEDIA_STORE20170901_CREATE_CONTAINER) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quo";
                xAmzDate = "odit";
                xAmzSecurityToken = "at";
                xAmzSignature = "at";
                xAmzSignedHeaders = "maiores";
            }};            

            CreateContainerResponse res = sdk.sdk.createContainer(req);

            if (res.createContainerOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteContainer

Deletes the specified container. Before you make a <code>DeleteContainer</code> request, delete any objects in the container or in any folders in the container. You can delete only empty containers. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContainerRequest;
import org.openapis.openapi.models.operations.DeleteContainerResponse;
import org.openapis.openapi.models.operations.DeleteContainerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteContainerInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteContainerRequest req = new DeleteContainerRequest(                new DeleteContainerInput("quod");, DeleteContainerXAmzTargetEnum.MEDIA_STORE20170901_DELETE_CONTAINER) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "esse";
                xAmzCredential = "totam";
                xAmzDate = "porro";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "nam";
            }};            

            DeleteContainerResponse res = sdk.sdk.deleteContainer(req);

            if (res.deleteContainerOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteContainerPolicy

Deletes the access policy that is associated with the specified container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContainerPolicyRequest;
import org.openapis.openapi.models.operations.DeleteContainerPolicyResponse;
import org.openapis.openapi.models.operations.DeleteContainerPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteContainerPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteContainerPolicyRequest req = new DeleteContainerPolicyRequest(                new DeleteContainerPolicyInput("occaecati");, DeleteContainerPolicyXAmzTargetEnum.MEDIA_STORE20170901_DELETE_CONTAINER_POLICY) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "hic";
                xAmzDate = "optio";
                xAmzSecurityToken = "totam";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "commodi";
            }};            

            DeleteContainerPolicyResponse res = sdk.sdk.deleteContainerPolicy(req);

            if (res.deleteContainerPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCorsPolicy

<p>Deletes the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission by default and can grant this permission to others.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCorsPolicyRequest;
import org.openapis.openapi.models.operations.DeleteCorsPolicyResponse;
import org.openapis.openapi.models.operations.DeleteCorsPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCorsPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCorsPolicyRequest req = new DeleteCorsPolicyRequest(                new DeleteCorsPolicyInput("modi");, DeleteCorsPolicyXAmzTargetEnum.MEDIA_STORE20170901_DELETE_CORS_POLICY) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "cum";
                xAmzDate = "esse";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "aspernatur";
            }};            

            DeleteCorsPolicyResponse res = sdk.sdk.deleteCorsPolicy(req);

            if (res.deleteCorsPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLifecyclePolicy

Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLifecyclePolicyRequest;
import org.openapis.openapi.models.operations.DeleteLifecyclePolicyResponse;
import org.openapis.openapi.models.operations.DeleteLifecyclePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLifecyclePolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLifecyclePolicyRequest req = new DeleteLifecyclePolicyRequest(                new DeleteLifecyclePolicyInput("ad");, DeleteLifecyclePolicyXAmzTargetEnum.MEDIA_STORE20170901_DELETE_LIFECYCLE_POLICY) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            DeleteLifecyclePolicyResponse res = sdk.sdk.deleteLifecyclePolicy(req);

            if (res.deleteLifecyclePolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMetricPolicy

Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMetricPolicyRequest;
import org.openapis.openapi.models.operations.DeleteMetricPolicyResponse;
import org.openapis.openapi.models.operations.DeleteMetricPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteMetricPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMetricPolicyRequest req = new DeleteMetricPolicyRequest(                new DeleteMetricPolicyInput("fuga");, DeleteMetricPolicyXAmzTargetEnum.MEDIA_STORE20170901_DELETE_METRIC_POLICY) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "iste";
                xAmzDate = "iure";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "architecto";
            }};            

            DeleteMetricPolicyResponse res = sdk.sdk.deleteMetricPolicy(req);

            if (res.deleteMetricPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeContainer

Retrieves the properties of the requested container. This request is commonly used to retrieve the endpoint of a container. An endpoint is a value assigned by the service when a new container is created. A container's endpoint does not change after it has been assigned. The <code>DescribeContainer</code> request returns a single <code>Container</code> object based on <code>ContainerName</code>. To return all <code>Container</code> objects that are associated with a specified AWS account, use <a>ListContainers</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeContainerRequest;
import org.openapis.openapi.models.operations.DescribeContainerResponse;
import org.openapis.openapi.models.operations.DescribeContainerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeContainerInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeContainerRequest req = new DescribeContainerRequest(                new DescribeContainerInput() {{
                                containerName = "reiciendis";
                            }};, DescribeContainerXAmzTargetEnum.MEDIA_STORE20170901_DESCRIBE_CONTAINER) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
            }};            

            DescribeContainerResponse res = sdk.sdk.describeContainer(req);

            if (res.describeContainerOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainerPolicy

Retrieves the access policy for the specified container. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainerPolicyRequest;
import org.openapis.openapi.models.operations.GetContainerPolicyResponse;
import org.openapis.openapi.models.operations.GetContainerPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetContainerPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContainerPolicyRequest req = new GetContainerPolicyRequest(                new GetContainerPolicyInput("enim");, GetContainerPolicyXAmzTargetEnum.MEDIA_STORE20170901_GET_CONTAINER_POLICY) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            GetContainerPolicyResponse res = sdk.sdk.getContainerPolicy(req);

            if (res.getContainerPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCorsPolicy

<p>Returns the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this permission and can grant it to others.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCorsPolicyRequest;
import org.openapis.openapi.models.operations.GetCorsPolicyResponse;
import org.openapis.openapi.models.operations.GetCorsPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCorsPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCorsPolicyRequest req = new GetCorsPolicyRequest(                new GetCorsPolicyInput("sapiente");, GetCorsPolicyXAmzTargetEnum.MEDIA_STORE20170901_GET_CORS_POLICY) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "dolorem";
                xAmzDate = "culpa";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "mollitia";
            }};            

            GetCorsPolicyResponse res = sdk.sdk.getCorsPolicy(req);

            if (res.getCorsPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLifecyclePolicy

Retrieves the object lifecycle policy that is assigned to a container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLifecyclePolicyRequest;
import org.openapis.openapi.models.operations.GetLifecyclePolicyResponse;
import org.openapis.openapi.models.operations.GetLifecyclePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLifecyclePolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLifecyclePolicyRequest req = new GetLifecyclePolicyRequest(                new GetLifecyclePolicyInput("numquam");, GetLifecyclePolicyXAmzTargetEnum.MEDIA_STORE20170901_GET_LIFECYCLE_POLICY) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "quam";
                xAmzCredential = "molestiae";
                xAmzDate = "velit";
                xAmzSecurityToken = "error";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "quis";
            }};            

            GetLifecyclePolicyResponse res = sdk.sdk.getLifecyclePolicy(req);

            if (res.getLifecyclePolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMetricPolicy

Returns the metric policy for the specified container. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMetricPolicyRequest;
import org.openapis.openapi.models.operations.GetMetricPolicyResponse;
import org.openapis.openapi.models.operations.GetMetricPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetMetricPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMetricPolicyRequest req = new GetMetricPolicyRequest(                new GetMetricPolicyInput("laborum");, GetMetricPolicyXAmzTargetEnum.MEDIA_STORE20170901_GET_METRIC_POLICY) {{
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "enim";
                xAmzCredential = "odit";
                xAmzDate = "quo";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "ipsam";
            }};            

            GetMetricPolicyResponse res = sdk.sdk.getMetricPolicy(req);

            if (res.getMetricPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listContainers

<p>Lists the properties of all containers in AWS Elemental MediaStore. </p> <p>You can query to receive all the containers in one response. Or you can include the <code>MaxResults</code> parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the <code>NextToken</code> parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive. </p> <p>See also <a>DescribeContainer</a>, which gets the properties of one container. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListContainersRequest;
import org.openapis.openapi.models.operations.ListContainersResponse;
import org.openapis.openapi.models.operations.ListContainersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListContainersInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListContainersRequest req = new ListContainersRequest(                new ListContainersInput() {{
                                maxResults = 820994L;
                                nextToken = "aut";
                            }};, ListContainersXAmzTargetEnum.MEDIA_STORE20170901_LIST_CONTAINERS) {{
                maxResults = "quasi";
                nextToken = "error";
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "quasi";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nihil";
            }};            

            ListContainersResponse res = sdk.sdk.listContainers(req);

            if (res.listContainersOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns a list of the tags assigned to the specified container. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceInput("voluptatibus");, ListTagsForResourceXAmzTargetEnum.MEDIA_STORE20170901_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "voluptate";
                xAmzDate = "cum";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putContainerPolicy

<p>Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.</p> <p>For this release of the REST API, you can create only one policy for a container. If you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing policy. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutContainerPolicyRequest;
import org.openapis.openapi.models.operations.PutContainerPolicyResponse;
import org.openapis.openapi.models.operations.PutContainerPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutContainerPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutContainerPolicyRequest req = new PutContainerPolicyRequest(                new PutContainerPolicyInput("maiores", "dicta");, PutContainerPolicyXAmzTargetEnum.MEDIA_STORE20170901_PUT_CONTAINER_POLICY) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "iusto";
                xAmzDate = "dicta";
                xAmzSecurityToken = "harum";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "accusamus";
            }};            

            PutContainerPolicyResponse res = sdk.sdk.putContainerPolicy(req);

            if (res.putContainerPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCorsPolicy

<p>Sets the cross-origin resource sharing (CORS) configuration on a container so that the container can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your AWS Elemental MediaStore container at my.example.container.com by using the browser's XMLHttpRequest capability.</p> <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS policy, you configure rules that identify origins and the HTTP methods that can be executed on your container. The policy can contain up to 398,000 characters. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.</p> <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCorsPolicyRequest;
import org.openapis.openapi.models.operations.PutCorsPolicyResponse;
import org.openapis.openapi.models.operations.PutCorsPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.CorsRule;
import org.openapis.openapi.models.shared.MethodNameEnum;
import org.openapis.openapi.models.shared.PutCorsPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutCorsPolicyRequest req = new PutCorsPolicyRequest(                new PutCorsPolicyInput("repudiandae",                 new org.openapis.openapi.models.shared.CorsRule[]{{
                                                add(new CorsRule(                new String[]{{
                                                                    add("est"),
                                                                }},                 new String[]{{
                                                                    add("explicabo"),
                                                                    add("deserunt"),
                                                                    add("distinctio"),
                                                                    add("quibusdam"),
                                                                }}) {{
                                                    allowedHeaders = new String[]{{
                                                        add("quidem"),
                                                    }};
                                                    allowedMethods = new org.openapis.openapi.models.shared.MethodNameEnum[]{{
                                                        add(MethodNameEnum.DELETE),
                                                        add(MethodNameEnum.HEAD),
                                                        add(MethodNameEnum.GET),
                                                    }};
                                                    allowedOrigins = new String[]{{
                                                        add("rem"),
                                                        add("voluptates"),
                                                        add("quasi"),
                                                    }};
                                                    exposeHeaders = new String[]{{
                                                        add("sint"),
                                                        add("veritatis"),
                                                        add("itaque"),
                                                        add("incidunt"),
                                                    }};
                                                    maxAgeSeconds = 318569L;
                                                }}),
                                            }});, PutCorsPolicyXAmzTargetEnum.MEDIA_STORE20170901_PUT_CORS_POLICY) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
            }};            

            PutCorsPolicyResponse res = sdk.sdk.putCorsPolicy(req);

            if (res.putCorsPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putLifecyclePolicy

<p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p> <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutLifecyclePolicyRequest;
import org.openapis.openapi.models.operations.PutLifecyclePolicyResponse;
import org.openapis.openapi.models.operations.PutLifecyclePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutLifecyclePolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutLifecyclePolicyRequest req = new PutLifecyclePolicyRequest(                new PutLifecyclePolicyInput("assumenda", "ipsam");, PutLifecyclePolicyXAmzTargetEnum.MEDIA_STORE20170901_PUT_LIFECYCLE_POLICY) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "dolorum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "tempore";
            }};            

            PutLifecyclePolicyResponse res = sdk.sdk.putLifecyclePolicy(req);

            if (res.putLifecyclePolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putMetricPolicy

The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutMetricPolicyRequest;
import org.openapis.openapi.models.operations.PutMetricPolicyResponse;
import org.openapis.openapi.models.operations.PutMetricPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContainerLevelMetricsEnum;
import org.openapis.openapi.models.shared.MetricPolicy;
import org.openapis.openapi.models.shared.MetricPolicyRule;
import org.openapis.openapi.models.shared.PutMetricPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutMetricPolicyRequest req = new PutMetricPolicyRequest(                new PutMetricPolicyInput("delectus",                 new MetricPolicy(ContainerLevelMetricsEnum.ENABLED) {{
                                                metricPolicyRules = new org.openapis.openapi.models.shared.MetricPolicyRule[]{{
                                                    add(new MetricPolicyRule("aliquid", "provident") {{
                                                        objectGroup = "eligendi";
                                                        objectGroupName = "sint";
                                                    }}),
                                                }};
                                            }};);, PutMetricPolicyXAmzTargetEnum.MEDIA_STORE20170901_PUT_METRIC_POLICY) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
            }};            

            PutMetricPolicyResponse res = sdk.sdk.putMetricPolicy(req);

            if (res.putMetricPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startAccessLogging

Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartAccessLoggingRequest;
import org.openapis.openapi.models.operations.StartAccessLoggingResponse;
import org.openapis.openapi.models.operations.StartAccessLoggingXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartAccessLoggingInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartAccessLoggingRequest req = new StartAccessLoggingRequest(                new StartAccessLoggingInput("in");, StartAccessLoggingXAmzTargetEnum.MEDIA_STORE20170901_START_ACCESS_LOGGING) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "rerum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "facere";
            }};            

            StartAccessLoggingResponse res = sdk.sdk.startAccessLogging(req);

            if (res.startAccessLoggingOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopAccessLogging

Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopAccessLoggingRequest;
import org.openapis.openapi.models.operations.StopAccessLoggingResponse;
import org.openapis.openapi.models.operations.StopAccessLoggingXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopAccessLoggingInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopAccessLoggingRequest req = new StopAccessLoggingRequest(                new StopAccessLoggingInput("aliquid");, StopAccessLoggingXAmzTargetEnum.MEDIA_STORE20170901_STOP_ACCESS_LOGGING) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "non";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "delectus";
            }};            

            StopAccessLoggingResponse res = sdk.sdk.stopAccessLogging(req);

            if (res.stopAccessLoggingOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceInput("provident",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("deleniti") {{
                                                    key = "id";
                                                    value = "blanditiis";
                                                }}),
                                                add(new Tag("deserunt") {{
                                                    key = "sapiente";
                                                    value = "amet";
                                                }}),
                                                add(new Tag("natus") {{
                                                    key = "nisi";
                                                    value = "vel";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.MEDIA_STORE20170901_TAG_RESOURCE) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "perferendis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "id";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes tags from the specified container. You can specify one or more tags to remove. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceInput("labore",                 new String[]{{
                                                add("natus"),
                                                add("nobis"),
                                            }});, UntagResourceXAmzTargetEnum.MEDIA_STORE20170901_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "vero";
                xAmzCredential = "aspernatur";
                xAmzDate = "architecto";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "et";
                xAmzSignedHeaders = "excepturi";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
