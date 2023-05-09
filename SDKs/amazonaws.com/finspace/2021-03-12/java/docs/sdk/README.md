# SDK

## Overview

The FinSpace management service provides the APIs for managing FinSpace environments.

Amazon Web Services documentation
<https://docs.aws.amazon.com/finspace/>
### Available Operations

* [createEnvironment](#createenvironment) - Create a new FinSpace environment.
* [deleteEnvironment](#deleteenvironment) - Delete an FinSpace environment.
* [getEnvironment](#getenvironment) - Returns the FinSpace environment object.
* [listEnvironments](#listenvironments) - A list of all of your FinSpace environments.
* [listTagsForResource](#listtagsforresource) - A list of all tags for a resource.
* [tagResource](#tagresource) - Adds metadata tags to a FinSpace resource.
* [untagResource](#untagresource) - Removes metadata tags from a FinSpace resource.
* [updateEnvironment](#updateenvironment) - Update your FinSpace environment.

## createEnvironment

Create a new FinSpace environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEnvironmentRequest;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBody;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyFederationModeEnum;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyFederationParameters;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodySuperuserParameters;
import org.openapis.openapi.models.operations.CreateEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEnvironmentRequest req = new CreateEnvironmentRequest(                new CreateEnvironmentRequestBody("at") {{
                                dataBundles = new String[]{{
                                    add("molestiae"),
                                    add("quod"),
                                    add("quod"),
                                    add("esse"),
                                }};
                                description = "totam";
                                federationMode = CreateEnvironmentRequestBodyFederationModeEnum.LOCAL;
                                federationParameters = new CreateEnvironmentRequestBodyFederationParameters() {{
                                    applicationCallBackURL = "dolorum";
                                    attributeMap = new java.util.HashMap<String, String>() {{
                                        put("nam", "officia");
                                    }};
                                    federationProviderName = "occaecati";
                                    federationURN = "fugit";
                                    samlMetadataDocument = "deleniti";
                                    samlMetadataURL = "hic";
                                }};;
                                kmsKeyId = "optio";
                                superuserParameters = new CreateEnvironmentRequestBodySuperuserParameters() {{
                                    emailAddress = "totam";
                                    firstName = "Benjamin";
                                    lastName = "Johns";
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("modi", "qui");
                                    put("impedit", "cum");
                                }};
                            }};) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            CreateEnvironmentResponse res = sdk.sdk.createEnvironment(req);

            if (res.createEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEnvironment

Delete an FinSpace environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEnvironmentRequest;
import org.openapis.openapi.models.operations.DeleteEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEnvironmentRequest req = new DeleteEnvironmentRequest("iste") {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
            }};            

            DeleteEnvironmentResponse res = sdk.sdk.deleteEnvironment(req);

            if (res.deleteEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnvironment

Returns the FinSpace environment object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnvironmentRequest;
import org.openapis.openapi.models.operations.GetEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEnvironmentRequest req = new GetEnvironmentRequest("iste") {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "quidem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "est";
            }};            

            GetEnvironmentResponse res = sdk.sdk.getEnvironment(req);

            if (res.getEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEnvironments

A list of all of your FinSpace environments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEnvironmentsRequest;
import org.openapis.openapi.models.operations.ListEnvironmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEnvironmentsRequest req = new ListEnvironmentsRequest() {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "dolorem";
                xAmzDate = "corporis";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "enim";
                maxResults = 607831L;
                nextToken = "nemo";
            }};            

            ListEnvironmentsResponse res = sdk.sdk.listEnvironments(req);

            if (res.listEnvironmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

A list of all tags for a resource.

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
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("excepturi") {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "iure";
                xAmzCredential = "culpa";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "mollitia";
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

Adds metadata tags to a FinSpace resource.

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
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("consequuntur", "repellat");
                                                put("mollitia", "occaecati");
                                                put("numquam", "commodi");
                                            }});, "quam") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "velit";
                xAmzCredential = "error";
                xAmzDate = "quia";
                xAmzSecurityToken = "quis";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "laborum";
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

Removes metadata tags from a FinSpace resource.

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
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("enim",                 new String[]{{
                                add("quo"),
                            }}) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "ipsam";
                xAmzDate = "id";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quasi";
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

Update your FinSpace environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequest;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequestBody;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequestBodyFederationModeEnum;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequestBodyFederationParameters;
import org.openapis.openapi.models.operations.UpdateEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEnvironmentRequest req = new UpdateEnvironmentRequest(                new UpdateEnvironmentRequestBody() {{
                                description = "temporibus";
                                federationMode = UpdateEnvironmentRequestBodyFederationModeEnum.LOCAL;
                                federationParameters = new UpdateEnvironmentRequestBodyFederationParameters() {{
                                    applicationCallBackURL = "quasi";
                                    attributeMap = new java.util.HashMap<String, String>() {{
                                        put("voluptatibus", "vero");
                                        put("nihil", "praesentium");
                                        put("voluptatibus", "ipsa");
                                        put("omnis", "voluptate");
                                    }};
                                    federationProviderName = "cum";
                                    federationURN = "perferendis";
                                    samlMetadataDocument = "doloremque";
                                    samlMetadataURL = "reprehenderit";
                                }};;
                                name = "Shawna Carter";
                            }};, "iusto") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "harum";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quae";
            }};            

            UpdateEnvironmentResponse res = sdk.sdk.updateEnvironment(req);

            if (res.updateEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
