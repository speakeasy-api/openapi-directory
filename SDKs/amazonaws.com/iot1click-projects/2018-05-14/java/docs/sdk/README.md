# SDK

## Overview

The AWS IoT 1-Click Projects API Reference

Amazon Web Services documentation
<https://docs.aws.amazon.com/iot1click/>
### Available Operations

* [associateDeviceWithPlacement](#associatedevicewithplacement) - Associates a physical device with a placement.
* [createPlacement](#createplacement) - Creates an empty placement.
* [createProject](#createproject) - Creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project.
* [deletePlacement](#deleteplacement) - <p>Deletes a placement. To delete a placement, it must not have any devices associated with it.</p> <note> <p>When you delete a placement, all associated data becomes irretrievable.</p> </note>
* [deleteProject](#deleteproject) - <p>Deletes a project. To delete a project, it must not have any placements associated with it.</p> <note> <p>When you delete a project, all associated data becomes irretrievable.</p> </note>
* [describePlacement](#describeplacement) - Describes a placement in a project.
* [describeProject](#describeproject) - Returns an object describing a project.
* [disassociateDeviceFromPlacement](#disassociatedevicefromplacement) - Removes a physical device from a placement.
* [getDevicesInPlacement](#getdevicesinplacement) - Returns an object enumerating the devices in a placement.
* [listPlacements](#listplacements) - Lists the placement(s) of a project.
* [listProjects](#listprojects) - Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.
* [listTagsForResource](#listtagsforresource) - Lists the tags (metadata key/value pairs) which you have assigned to the resource.
* [tagResource](#tagresource) - Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be used to manage a resource. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.
* [untagResource](#untagresource) - Removes one or more tags (metadata key/value pairs) from a resource.
* [updatePlacement](#updateplacement) - Updates a placement with the given attributes. To clear an attribute, pass an empty value (i.e., "").
* [updateProject](#updateproject) - Updates a project associated with your AWS account and region. With the exception of device template names, you can pass just the values that need to be updated because the update request will change only the values that are provided. To clear a value, pass the empty string (i.e., <code>""</code>).

## associateDeviceWithPlacement

Associates a physical device with a placement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateDeviceWithPlacementRequest;
import org.openapis.openapi.models.operations.AssociateDeviceWithPlacementRequestBody;
import org.openapis.openapi.models.operations.AssociateDeviceWithPlacementResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateDeviceWithPlacementRequest req = new AssociateDeviceWithPlacementRequest(                new AssociateDeviceWithPlacementRequestBody("magnam");, "debitis", "ipsa", "delectus") {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            AssociateDeviceWithPlacementResponse res = sdk.sdk.associateDeviceWithPlacement(req);

            if (res.associateDeviceWithPlacementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPlacement

Creates an empty placement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePlacementRequest;
import org.openapis.openapi.models.operations.CreatePlacementRequestBody;
import org.openapis.openapi.models.operations.CreatePlacementResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePlacementRequest req = new CreatePlacementRequest(                new CreatePlacementRequestBody("nisi") {{
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("temporibus", "ab");
                                    put("quis", "veritatis");
                                    put("deserunt", "perferendis");
                                    put("ipsam", "repellendus");
                                }};
                            }};, "sapiente") {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "odit";
                xAmzCredential = "at";
                xAmzDate = "at";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quod";
            }};            

            CreatePlacementResponse res = sdk.sdk.createPlacement(req);

            if (res.createPlacementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProject

Creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectRequestBody;
import org.openapis.openapi.models.operations.CreateProjectRequestBodyPlacementTemplate;
import org.openapis.openapi.models.operations.CreateProjectResponse;
import org.openapis.openapi.models.shared.DeviceTemplate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProjectRequest req = new CreateProjectRequest(                new CreateProjectRequestBody("esse") {{
                                description = "totam";
                                placementTemplate = new CreateProjectRequestBodyPlacementTemplate() {{
                                    defaultAttributes = new java.util.HashMap<String, String>() {{
                                        put("dolorum", "dicta");
                                        put("nam", "officia");
                                        put("occaecati", "fugit");
                                        put("deleniti", "hic");
                                    }};
                                    deviceTemplates = new java.util.HashMap<String, org.openapis.openapi.models.shared.DeviceTemplate>() {{
                                        put("totam", new DeviceTemplate() {{
                                            callbackOverrides = new java.util.HashMap<String, String>() {{
                                                put("commodi", "molestiae");
                                            }};
                                            deviceType = "modi";
                                        }});
                                        put("qui", new DeviceTemplate() {{
                                            callbackOverrides = new java.util.HashMap<String, String>() {{
                                                put("cum", "esse");
                                                put("ipsum", "excepturi");
                                                put("aspernatur", "perferendis");
                                                put("ad", "natus");
                                            }};
                                            deviceType = "sed";
                                        }});
                                        put("iste", new DeviceTemplate() {{
                                            callbackOverrides = new java.util.HashMap<String, String>() {{
                                                put("natus", "laboriosam");
                                            }};
                                            deviceType = "hic";
                                        }});
                                        put("saepe", new DeviceTemplate() {{
                                            callbackOverrides = new java.util.HashMap<String, String>() {{
                                                put("in", "corporis");
                                                put("iste", "iure");
                                                put("saepe", "quidem");
                                            }};
                                            deviceType = "architecto";
                                        }});
                                    }};
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("reiciendis", "est");
                                }};
                            }};) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "dolores";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "nobis";
            }};            

            CreateProjectResponse res = sdk.sdk.createProject(req);

            if (res.createProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePlacement

<p>Deletes a placement. To delete a placement, it must not have any devices associated with it.</p> <note> <p>When you delete a placement, all associated data becomes irretrievable.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePlacementRequest;
import org.openapis.openapi.models.operations.DeletePlacementResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePlacementRequest req = new DeletePlacementRequest("omnis", "nemo") {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "accusantium";
                xAmzDate = "iure";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "sapiente";
            }};            

            DeletePlacementResponse res = sdk.sdk.deletePlacement(req);

            if (res.deletePlacementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProject

<p>Deletes a project. To delete a project, it must not have any placements associated with it.</p> <note> <p>When you delete a project, all associated data becomes irretrievable.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectRequest;
import org.openapis.openapi.models.operations.DeleteProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProjectRequest req = new DeleteProjectRequest("mollitia") {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "consequuntur";
                xAmzDate = "repellat";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "numquam";
            }};            

            DeleteProjectResponse res = sdk.sdk.deleteProject(req);

            if (res.deleteProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePlacement

Describes a placement in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePlacementRequest;
import org.openapis.openapi.models.operations.DescribePlacementResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePlacementRequest req = new DescribePlacementRequest("quam", "molestiae") {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "error";
                xAmzCredential = "quia";
                xAmzDate = "quis";
                xAmzSecurityToken = "vitae";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "animi";
            }};            

            DescribePlacementResponse res = sdk.sdk.describePlacement(req);

            if (res.describePlacementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeProject

Returns an object describing a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeProjectRequest;
import org.openapis.openapi.models.operations.DescribeProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeProjectRequest req = new DescribeProjectRequest("odit") {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "tenetur";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "id";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "aut";
            }};            

            DescribeProjectResponse res = sdk.sdk.describeProject(req);

            if (res.describeProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateDeviceFromPlacement

Removes a physical device from a placement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateDeviceFromPlacementRequest;
import org.openapis.openapi.models.operations.DisassociateDeviceFromPlacementResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateDeviceFromPlacementRequest req = new DisassociateDeviceFromPlacementRequest("error", "temporibus", "laborum") {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "voluptatibus";
                xAmzDate = "vero";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DisassociateDeviceFromPlacementResponse res = sdk.sdk.disassociateDeviceFromPlacement(req);

            if (res.disassociateDeviceFromPlacementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevicesInPlacement

Returns an object enumerating the devices in a placement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDevicesInPlacementRequest;
import org.openapis.openapi.models.operations.GetDevicesInPlacementResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDevicesInPlacementRequest req = new GetDevicesInPlacementRequest("omnis", "voluptate") {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "doloremque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ut";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "dicta";
            }};            

            GetDevicesInPlacementResponse res = sdk.sdk.getDevicesInPlacement(req);

            if (res.getDevicesInPlacementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPlacements

Lists the placement(s) of a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPlacementsRequest;
import org.openapis.openapi.models.operations.ListPlacementsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPlacementsRequest req = new ListPlacementsRequest("dolore") {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "harum";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "repudiandae";
                maxResults = 64147L;
                nextToken = "ipsum";
            }};            

            ListPlacementsResponse res = sdk.sdk.listPlacements(req);

            if (res.listPlacementsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProjects

Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProjectsRequest;
import org.openapis.openapi.models.operations.ListProjectsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProjectsRequest req = new ListProjectsRequest() {{
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "pariatur";
                xAmzDate = "modi";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "voluptates";
                maxResults = 93940L;
                nextToken = "repudiandae";
            }};            

            ListProjectsResponse res = sdk.sdk.listProjects(req);

            if (res.listProjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags (metadata key/value pairs) which you have assigned to the resource.

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
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("veritatis") {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "enim";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "explicabo";
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

Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be used to manage a resource. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.

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
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("quibusdam", "labore");
                                                put("modi", "qui");
                                                put("aliquid", "cupiditate");
                                            }});, "quos") {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "magni";
                xAmzCredential = "assumenda";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "alias";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "dolorum";
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

Removes one or more tags (metadata key/value pairs) from a resource.

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
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("tempora",                 new String[]{{
                                add("tempore"),
                                add("labore"),
                                add("delectus"),
                            }}) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "non";
                xAmzCredential = "eligendi";
                xAmzDate = "sint";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "necessitatibus";
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

## updatePlacement

Updates a placement with the given attributes. To clear an attribute, pass an empty value (i.e., "").

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePlacementRequest;
import org.openapis.openapi.models.operations.UpdatePlacementRequestBody;
import org.openapis.openapi.models.operations.UpdatePlacementResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePlacementRequest req = new UpdatePlacementRequest(                new UpdatePlacementRequestBody() {{
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("dolor", "debitis");
                                    put("a", "dolorum");
                                    put("in", "in");
                                }};
                            }};, "illum", "maiores") {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "magnam";
                xAmzDate = "cumque";
                xAmzSecurityToken = "facere";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "aliquid";
            }};            

            UpdatePlacementResponse res = sdk.sdk.updatePlacement(req);

            if (res.updatePlacementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProject

Updates a project associated with your AWS account and region. With the exception of device template names, you can pass just the values that need to be updated because the update request will change only the values that are provided. To clear a value, pass the empty string (i.e., <code>""</code>).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectRequest;
import org.openapis.openapi.models.operations.UpdateProjectRequestBody;
import org.openapis.openapi.models.operations.UpdateProjectRequestBodyPlacementTemplate;
import org.openapis.openapi.models.operations.UpdateProjectResponse;
import org.openapis.openapi.models.shared.DeviceTemplate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProjectRequest req = new UpdateProjectRequest(                new UpdateProjectRequestBody() {{
                                description = "accusamus";
                                placementTemplate = new UpdateProjectRequestBodyPlacementTemplate() {{
                                    defaultAttributes = new java.util.HashMap<String, String>() {{
                                        put("occaecati", "enim");
                                    }};
                                    deviceTemplates = new java.util.HashMap<String, org.openapis.openapi.models.shared.DeviceTemplate>() {{
                                        put("delectus", new DeviceTemplate() {{
                                            callbackOverrides = new java.util.HashMap<String, String>() {{
                                                put("provident", "nam");
                                                put("id", "blanditiis");
                                                put("deleniti", "sapiente");
                                            }};
                                            deviceType = "amet";
                                        }});
                                        put("deserunt", new DeviceTemplate() {{
                                            callbackOverrides = new java.util.HashMap<String, String>() {{
                                                put("vel", "natus");
                                                put("omnis", "molestiae");
                                            }};
                                            deviceType = "perferendis";
                                        }});
                                        put("nihil", new DeviceTemplate() {{
                                            callbackOverrides = new java.util.HashMap<String, String>() {{
                                                put("distinctio", "id");
                                                put("labore", "labore");
                                            }};
                                            deviceType = "suscipit";
                                        }});
                                        put("natus", new DeviceTemplate() {{
                                            callbackOverrides = new java.util.HashMap<String, String>() {{
                                                put("eum", "vero");
                                                put("aspernatur", "architecto");
                                                put("magnam", "et");
                                            }};
                                            deviceType = "excepturi";
                                        }});
                                    }};
                                }};;
                            }};, "ullam") {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "quos";
                xAmzCredential = "sint";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "mollitia";
            }};            

            UpdateProjectResponse res = sdk.sdk.updateProject(req);

            if (res.updateProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
