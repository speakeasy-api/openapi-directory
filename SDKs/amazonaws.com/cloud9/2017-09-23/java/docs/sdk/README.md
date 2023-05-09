# SDK

## Overview

<fullname>Cloud9</fullname> <p>Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and release software in the cloud.</p> <p>For more information about Cloud9, see the <a href="https://docs.aws.amazon.com/cloud9/latest/user-guide">Cloud9 User Guide</a>.</p> <p>Cloud9 supports these operations:</p> <ul> <li> <p> <code>CreateEnvironmentEC2</code>: Creates an Cloud9 development environment, launches an Amazon EC2 instance, and then connects from the instance to the environment.</p> </li> <li> <p> <code>CreateEnvironmentMembership</code>: Adds an environment member to an environment.</p> </li> <li> <p> <code>DeleteEnvironment</code>: Deletes an environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.</p> </li> <li> <p> <code>DeleteEnvironmentMembership</code>: Deletes an environment member from an environment.</p> </li> <li> <p> <code>DescribeEnvironmentMemberships</code>: Gets information about environment members for an environment.</p> </li> <li> <p> <code>DescribeEnvironments</code>: Gets information about environments.</p> </li> <li> <p> <code>DescribeEnvironmentStatus</code>: Gets status information for an environment.</p> </li> <li> <p> <code>ListEnvironments</code>: Gets a list of environment identifiers.</p> </li> <li> <p> <code>ListTagsForResource</code>: Gets the tags for an environment.</p> </li> <li> <p> <code>TagResource</code>: Adds tags to an environment.</p> </li> <li> <p> <code>UntagResource</code>: Removes tags from an environment.</p> </li> <li> <p> <code>UpdateEnvironment</code>: Changes the settings of an existing environment.</p> </li> <li> <p> <code>UpdateEnvironmentMembership</code>: Changes the settings of an existing environment member for an environment.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloud9/>
### Available Operations

* [createEnvironmentEc2](#createenvironmentec2) - Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.
* [createEnvironmentMembership](#createenvironmentmembership) - Adds an environment member to an Cloud9 development environment.
* [deleteEnvironment](#deleteenvironment) - Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.
* [deleteEnvironmentMembership](#deleteenvironmentmembership) - Deletes an environment member from a development environment.
* [describeEnvironmentMemberships](#describeenvironmentmemberships) - Gets information about environment members for an Cloud9 development environment.
* [describeEnvironmentStatus](#describeenvironmentstatus) - Gets status information for an Cloud9 development environment.
* [describeEnvironments](#describeenvironments) - Gets information about Cloud9 development environments.
* [listEnvironments](#listenvironments) - Gets a list of Cloud9 development environment identifiers.
* [listTagsForResource](#listtagsforresource) - Gets a list of the tags associated with an Cloud9 development environment.
* [tagResource](#tagresource) - <p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>
* [untagResource](#untagresource) - Removes tags from an Cloud9 development environment.
* [updateEnvironment](#updateenvironment) - Changes the settings of an existing Cloud9 development environment.
* [updateEnvironmentMembership](#updateenvironmentmembership) - Changes the settings of an existing environment member for an Cloud9 development environment.

## createEnvironmentEc2

Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEnvironmentEc2Request;
import org.openapis.openapi.models.operations.CreateEnvironmentEc2Response;
import org.openapis.openapi.models.operations.CreateEnvironmentEc2XAmzTargetEnum;
import org.openapis.openapi.models.shared.ConnectionTypeEnum;
import org.openapis.openapi.models.shared.CreateEnvironmentEc2Request;
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

            CreateEnvironmentEc2Request req = new CreateEnvironmentEc2Request(                new CreateEnvironmentEc2Request("deserunt", "perferendis") {{
                                automaticStopTimeMinutes = 368241L;
                                clientRequestToken = "repellendus";
                                connectionType = ConnectionTypeEnum.CONNECT_SSM;
                                description = "quo";
                                dryRun = false;
                                imageId = "odit";
                                ownerArn = "at";
                                subnetId = "at";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("quod", "esse") {{
                                        key = "molestiae";
                                        value = "quod";
                                    }}),
                                    add(new Tag("dolorum", "dicta") {{
                                        key = "totam";
                                        value = "porro";
                                    }}),
                                    add(new Tag("occaecati", "fugit") {{
                                        key = "nam";
                                        value = "officia";
                                    }}),
                                    add(new Tag("optio", "totam") {{
                                        key = "deleniti";
                                        value = "hic";
                                    }}),
                                }};
                            }};, CreateEnvironmentEc2XAmzTargetEnum.AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_CREATE_ENVIRONMENT_EC2) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "molestiae";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "cum";
            }};            

            CreateEnvironmentEc2Response res = sdk.sdk.createEnvironmentEc2(req);

            if (res.createEnvironmentEc2Result != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEnvironmentMembership

Adds an environment member to an Cloud9 development environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEnvironmentMembershipRequest;
import org.openapis.openapi.models.operations.CreateEnvironmentMembershipResponse;
import org.openapis.openapi.models.operations.CreateEnvironmentMembershipXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateEnvironmentMembershipRequest;
import org.openapis.openapi.models.shared.MemberPermissionsEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEnvironmentMembershipRequest req = new CreateEnvironmentMembershipRequest(                new CreateEnvironmentMembershipRequest("ipsum", MemberPermissionsEnum.READ_ONLY, "aspernatur");, CreateEnvironmentMembershipXAmzTargetEnum.AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_CREATE_ENVIRONMENT_MEMBERSHIP) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ad";
                xAmzCredential = "natus";
                xAmzDate = "sed";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "natus";
            }};            

            CreateEnvironmentMembershipResponse res = sdk.sdk.createEnvironmentMembership(req);

            if (res.createEnvironmentMembershipResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEnvironment

Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEnvironmentRequest;
import org.openapis.openapi.models.operations.DeleteEnvironmentResponse;
import org.openapis.openapi.models.operations.DeleteEnvironmentXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEnvironmentRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEnvironmentRequest req = new DeleteEnvironmentRequest(                new DeleteEnvironmentRequest("hic");, DeleteEnvironmentXAmzTargetEnum.AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_DELETE_ENVIRONMENT) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "iste";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "saepe";
            }};            

            DeleteEnvironmentResponse res = sdk.sdk.deleteEnvironment(req);

            if (res.deleteEnvironmentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEnvironmentMembership

Deletes an environment member from a development environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEnvironmentMembershipRequest;
import org.openapis.openapi.models.operations.DeleteEnvironmentMembershipResponse;
import org.openapis.openapi.models.operations.DeleteEnvironmentMembershipXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEnvironmentMembershipRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEnvironmentMembershipRequest req = new DeleteEnvironmentMembershipRequest(                new DeleteEnvironmentMembershipRequest("architecto", "ipsa");, DeleteEnvironmentMembershipXAmzTargetEnum.AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_DELETE_ENVIRONMENT_MEMBERSHIP) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "est";
                xAmzCredential = "mollitia";
                xAmzDate = "laborum";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "corporis";
            }};            

            DeleteEnvironmentMembershipResponse res = sdk.sdk.deleteEnvironmentMembership(req);

            if (res.deleteEnvironmentMembershipResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEnvironmentMemberships

Gets information about environment members for an Cloud9 development environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEnvironmentMembershipsRequest;
import org.openapis.openapi.models.operations.DescribeEnvironmentMembershipsResponse;
import org.openapis.openapi.models.operations.DescribeEnvironmentMembershipsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEnvironmentMembershipsRequest;
import org.openapis.openapi.models.shared.PermissionsEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEnvironmentMembershipsRequest req = new DescribeEnvironmentMembershipsRequest(                new DescribeEnvironmentMembershipsRequest() {{
                                environmentId = "nobis";
                                maxResults = 315428L;
                                nextToken = "omnis";
                                permissions = new org.openapis.openapi.models.shared.PermissionsEnum[]{{
                                    add(PermissionsEnum.OWNER),
                                    add(PermissionsEnum.READ_WRITE),
                                }};
                                userArn = "accusantium";
                            }};, DescribeEnvironmentMembershipsXAmzTargetEnum.AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_DESCRIBE_ENVIRONMENT_MEMBERSHIPS) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "doloribus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "dolorem";
                maxResults = "culpa";
                nextToken = "consequuntur";
            }};            

            DescribeEnvironmentMembershipsResponse res = sdk.sdk.describeEnvironmentMemberships(req);

            if (res.describeEnvironmentMembershipsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEnvironmentStatus

Gets status information for an Cloud9 development environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEnvironmentStatusRequest;
import org.openapis.openapi.models.operations.DescribeEnvironmentStatusResponse;
import org.openapis.openapi.models.operations.DescribeEnvironmentStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEnvironmentStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEnvironmentStatusRequest req = new DescribeEnvironmentStatusRequest(                new DescribeEnvironmentStatusRequest("mollitia");, DescribeEnvironmentStatusXAmzTargetEnum.AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_DESCRIBE_ENVIRONMENT_STATUS) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            DescribeEnvironmentStatusResponse res = sdk.sdk.describeEnvironmentStatus(req);

            if (res.describeEnvironmentStatusResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEnvironments

Gets information about Cloud9 development environments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEnvironmentsRequest;
import org.openapis.openapi.models.operations.DescribeEnvironmentsResponse;
import org.openapis.openapi.models.operations.DescribeEnvironmentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEnvironmentsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEnvironmentsRequest req = new DescribeEnvironmentsRequest(                new DescribeEnvironmentsRequest(                new String[]{{
                                                add("vitae"),
                                                add("laborum"),
                                            }});, DescribeEnvironmentsXAmzTargetEnum.AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_DESCRIBE_ENVIRONMENTS) {{
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "enim";
                xAmzCredential = "odit";
                xAmzDate = "quo";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "ipsam";
            }};            

            DescribeEnvironmentsResponse res = sdk.sdk.describeEnvironments(req);

            if (res.describeEnvironmentsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEnvironments

Gets a list of Cloud9 development environment identifiers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEnvironmentsRequest;
import org.openapis.openapi.models.operations.ListEnvironmentsResponse;
import org.openapis.openapi.models.operations.ListEnvironmentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEnvironmentsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEnvironmentsRequest req = new ListEnvironmentsRequest(                new ListEnvironmentsRequest() {{
                                maxResults = 820994L;
                                nextToken = "aut";
                            }};, ListEnvironmentsXAmzTargetEnum.AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_LIST_ENVIRONMENTS) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "error";
                xAmzCredential = "temporibus";
                xAmzDate = "laborum";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "voluptatibus";
                maxResults = "vero";
                nextToken = "nihil";
            }};            

            ListEnvironmentsResponse res = sdk.sdk.listEnvironments(req);

            if (res.listEnvironmentsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Gets a list of the tags associated with an Cloud9 development environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("voluptatibus");, ListTagsForResourceXAmzTargetEnum.AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "voluptate";
                xAmzDate = "cum";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "reprehenderit";
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

## tagResource

<p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>

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
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("maiores",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("iusto", "dicta") {{
                                                    key = "corporis";
                                                    value = "dolore";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "commodi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "ipsum";
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

Removes tags from an Cloud9 development environment.

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
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("molestias",                 new String[]{{
                                                add("pariatur"),
                                                add("modi"),
                                                add("praesentium"),
                                            }});, UntagResourceXAmzTargetEnum.AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "quasi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "sint";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "itaque";
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

## updateEnvironment

Changes the settings of an existing Cloud9 development environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequest;
import org.openapis.openapi.models.operations.UpdateEnvironmentResponse;
import org.openapis.openapi.models.operations.UpdateEnvironmentXAmzTargetEnum;
import org.openapis.openapi.models.shared.ManagedCredentialsActionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateEnvironmentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEnvironmentRequest req = new UpdateEnvironmentRequest(                new UpdateEnvironmentRequest("enim") {{
                                description = "consequatur";
                                managedCredentialsAction = ManagedCredentialsActionEnum.DISABLE;
                                name = "Benjamin O'Connell";
                            }};, UpdateEnvironmentXAmzTargetEnum.AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_UPDATE_ENVIRONMENT) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
            }};            

            UpdateEnvironmentResponse res = sdk.sdk.updateEnvironment(req);

            if (res.updateEnvironmentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEnvironmentMembership

Changes the settings of an existing environment member for an Cloud9 development environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEnvironmentMembershipRequest;
import org.openapis.openapi.models.operations.UpdateEnvironmentMembershipResponse;
import org.openapis.openapi.models.operations.UpdateEnvironmentMembershipXAmzTargetEnum;
import org.openapis.openapi.models.shared.MemberPermissionsEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateEnvironmentMembershipRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEnvironmentMembershipRequest req = new UpdateEnvironmentMembershipRequest(                new UpdateEnvironmentMembershipRequest("assumenda", MemberPermissionsEnum.READ_WRITE, "alias");, UpdateEnvironmentMembershipXAmzTargetEnum.AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_UPDATE_ENVIRONMENT_MEMBERSHIP) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "excepturi";
                xAmzDate = "tempora";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "labore";
            }};            

            UpdateEnvironmentMembershipResponse res = sdk.sdk.updateEnvironmentMembership(req);

            if (res.updateEnvironmentMembershipResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
