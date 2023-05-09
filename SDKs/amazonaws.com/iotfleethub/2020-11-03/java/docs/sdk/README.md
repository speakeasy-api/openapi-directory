# SDK

## Overview

<p>With Fleet Hub for AWS IoT Device Management you can build stand-alone web applications for monitoring the health of your device fleets.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iot/>
### Available Operations

* [createApplication](#createapplication) - <p>Creates a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* [deleteApplication](#deleteapplication) - <p>Deletes a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* [describeApplication](#describeapplication) - <p>Gets information about a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* [listApplications](#listapplications) - <p>Gets a list of Fleet Hub for AWS IoT Device Management web applications for the current account.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* [listTagsForResource](#listtagsforresource) - <p>Lists the tags for the specified resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* [tagResource](#tagresource) - <p>Adds to or modifies the tags of the specified resource. Tags are metadata which can be used to manage a resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* [untagResource](#untagresource) - <p>Removes the specified tags (metadata) from the resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* [updateApplication](#updateapplication) - <p>Updates information about a Fleet Hub for a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

## createApplication

<p>Creates a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationRequestBody;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest(                new CreateApplicationRequestBody("voluptatum", "iusto") {{
                                applicationDescription = "excepturi";
                                clientToken = "nisi";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("temporibus", "ab");
                                    put("quis", "veritatis");
                                    put("deserunt", "perferendis");
                                    put("ipsam", "repellendus");
                                }};
                            }};) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quo";
                xAmzCredential = "odit";
                xAmzDate = "at";
                xAmzSecurityToken = "at";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "molestiae";
            }};            

            CreateApplicationResponse res = sdk.sdk.createApplication(req);

            if (res.createApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplication

<p>Deletes a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationRequest;
import org.openapis.openapi.models.operations.DeleteApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationRequest req = new DeleteApplicationRequest("quod") {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "totam";
                xAmzCredential = "porro";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "officia";
                clientToken = "occaecati";
            }};            

            DeleteApplicationResponse res = sdk.sdk.deleteApplication(req);

            if (res.deleteApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeApplication

<p>Gets information about a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeApplicationRequest;
import org.openapis.openapi.models.operations.DescribeApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeApplicationRequest req = new DescribeApplicationRequest("deleniti") {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "optio";
                xAmzCredential = "totam";
                xAmzDate = "beatae";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "modi";
            }};            

            DescribeApplicationResponse res = sdk.sdk.describeApplication(req);

            if (res.describeApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplications

<p>Gets a list of Fleet Hub for AWS IoT Device Management web applications for the current account.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationsRequest;
import org.openapis.openapi.models.operations.ListApplicationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationsRequest req = new ListApplicationsRequest() {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "cum";
                xAmzCredential = "esse";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
                nextToken = "ad";
            }};            

            ListApplicationsResponse res = sdk.sdk.listApplications(req);

            if (res.listApplicationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>Lists the tags for the specified resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

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
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("sed") {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "natus";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "fuga";
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

<p>Adds to or modifies the tags of the specified resource. Tags are metadata which can be used to manage a resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

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
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("iste", "iure");
                                                put("saepe", "quidem");
                                            }});, "architecto") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "est";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "dolorem";
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

<p>Removes the specified tags (metadata) from the resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

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
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("explicabo",                 new String[]{{
                                add("enim"),
                                add("omnis"),
                                add("nemo"),
                                add("minima"),
                            }}) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "iure";
                xAmzDate = "culpa";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "architecto";
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

## updateApplication

<p>Updates information about a Fleet Hub for a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationRequest;
import org.openapis.openapi.models.operations.UpdateApplicationRequestBody;
import org.openapis.openapi.models.operations.UpdateApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApplicationRequest req = new UpdateApplicationRequest(                new UpdateApplicationRequestBody() {{
                                applicationDescription = "dolorem";
                                applicationName = "culpa";
                                clientToken = "consequuntur";
                            }};, "repellat") {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "commodi";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "velit";
            }};            

            UpdateApplicationResponse res = sdk.sdk.updateApplication(req);

            if (res.updateApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
