# SDK

## Overview

Amazon Web Services IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT devices during device software development. Device Advisor provides pre-built tests that you can use to validate IoT devices for reliable and secure connectivity with Amazon Web Services IoT Core before deploying devices to production. By using Device Advisor, you can confirm that your devices can connect to Amazon Web Services IoT Core, follow security best practices and, if applicable, receive software updates from IoT Device Management. You can also download signed qualification reports to submit to the Amazon Web Services Partner Network to get your device qualified for the Amazon Web Services Partner Device Catalog without the need to send your device in and wait for it to be tested.

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotdeviceadvisor/>
### Available Operations

* [createSuiteDefinition](#createsuitedefinition) - <p>Creates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSuiteDefinition</a> action.</p>
* [deleteSuiteDefinition](#deletesuitedefinition) - <p>Deletes a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSuiteDefinition</a> action.</p>
* [getEndpoint](#getendpoint) - Gets information about an Device Advisor endpoint.
* [getSuiteDefinition](#getsuitedefinition) - <p>Gets information about a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteDefinition</a> action.</p>
* [getSuiteRun](#getsuiterun) - <p>Gets information about a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRun</a> action.</p>
* [getSuiteRunReport](#getsuiterunreport) - <p>Gets a report download link for a successful Device Advisor qualifying test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRunReport</a> action.</p>
* [listSuiteDefinitions](#listsuitedefinitions) - <p>Lists the Device Advisor test suites you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteDefinitions</a> action.</p>
* [listSuiteRuns](#listsuiteruns) - <p>Lists runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteRuns</a> action.</p>
* [listTagsForResource](#listtagsforresource) - <p>Lists the tags attached to an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>
* [startSuiteRun](#startsuiterun) - <p>Starts a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartSuiteRun</a> action.</p>
* [stopSuiteRun](#stopsuiterun) - <p>Stops a Device Advisor test suite run that is currently running.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopSuiteRun</a> action.</p>
* [tagResource](#tagresource) - <p>Adds to and modifies existing tags of an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>
* [untagResource](#untagresource) - <p>Removes tags from an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>
* [updateSuiteDefinition](#updatesuitedefinition) - <p>Updates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSuiteDefinition</a> action.</p>

## createSuiteDefinition

<p>Creates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSuiteDefinition</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSuiteDefinitionRequest;
import org.openapis.openapi.models.operations.CreateSuiteDefinitionRequestBody;
import org.openapis.openapi.models.operations.CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;
import org.openapis.openapi.models.operations.CreateSuiteDefinitionResponse;
import org.openapis.openapi.models.shared.DeviceUnderTest;
import org.openapis.openapi.models.shared.ProtocolEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSuiteDefinitionRequest req = new CreateSuiteDefinitionRequest(                new CreateSuiteDefinitionRequestBody(                new CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration() {{
                                                devicePermissionRoleArn = "nisi";
                                                devices = new org.openapis.openapi.models.shared.DeviceUnderTest[]{{
                                                    add(new DeviceUnderTest() {{
                                                        certificateArn = "temporibus";
                                                        thingArn = "ab";
                                                    }}),
                                                    add(new DeviceUnderTest() {{
                                                        certificateArn = "quis";
                                                        thingArn = "veritatis";
                                                    }}),
                                                    add(new DeviceUnderTest() {{
                                                        certificateArn = "deserunt";
                                                        thingArn = "perferendis";
                                                    }}),
                                                    add(new DeviceUnderTest() {{
                                                        certificateArn = "ipsam";
                                                        thingArn = "repellendus";
                                                    }}),
                                                }};
                                                intendedForQualification = false;
                                                isLongDurationTest = false;
                                                protocol = ProtocolEnum.MQTT_V5;
                                                rootGroup = "quo";
                                                suiteDefinitionName = "odit";
                                            }};) {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("at", "maiores");
                                    put("molestiae", "quod");
                                    put("quod", "esse");
                                    put("totam", "porro");
                                }};
                            }};) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
            }};            

            CreateSuiteDefinitionResponse res = sdk.sdk.createSuiteDefinition(req);

            if (res.createSuiteDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSuiteDefinition

<p>Deletes a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSuiteDefinition</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSuiteDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteSuiteDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSuiteDefinitionRequest req = new DeleteSuiteDefinitionRequest("optio") {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "commodi";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "impedit";
            }};            

            DeleteSuiteDefinitionResponse res = sdk.sdk.deleteSuiteDefinition(req);

            if (res.deleteSuiteDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEndpoint

Gets information about an Device Advisor endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEndpointRequest;
import org.openapis.openapi.models.operations.GetEndpointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEndpointRequest req = new GetEndpointRequest() {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
                certificateArn = "sed";
                thingArn = "iste";
            }};            

            GetEndpointResponse res = sdk.sdk.getEndpoint(req);

            if (res.getEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSuiteDefinition

<p>Gets information about a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteDefinition</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSuiteDefinitionRequest;
import org.openapis.openapi.models.operations.GetSuiteDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSuiteDefinitionRequest req = new GetSuiteDefinitionRequest("natus") {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "saepe";
                xAmzDate = "fuga";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "iste";
                suiteDefinitionVersion = "iure";
            }};            

            GetSuiteDefinitionResponse res = sdk.sdk.getSuiteDefinition(req);

            if (res.getSuiteDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSuiteRun

<p>Gets information about a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRun</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSuiteRunRequest;
import org.openapis.openapi.models.operations.GetSuiteRunResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSuiteRunRequest req = new GetSuiteRunRequest("quidem", "architecto") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "est";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "dolorem";
            }};            

            GetSuiteRunResponse res = sdk.sdk.getSuiteRun(req);

            if (res.getSuiteRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSuiteRunReport

<p>Gets a report download link for a successful Device Advisor qualifying test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRunReport</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSuiteRunReportRequest;
import org.openapis.openapi.models.operations.GetSuiteRunReportResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSuiteRunReportRequest req = new GetSuiteRunReportRequest("explicabo", "nobis") {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "nemo";
                xAmzDate = "minima";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "iure";
            }};            

            GetSuiteRunReportResponse res = sdk.sdk.getSuiteRunReport(req);

            if (res.getSuiteRunReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSuiteDefinitions

<p>Lists the Device Advisor test suites you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteDefinitions</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSuiteDefinitionsRequest;
import org.openapis.openapi.models.operations.ListSuiteDefinitionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSuiteDefinitionsRequest req = new ListSuiteDefinitionsRequest() {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
                maxResults = 995300L;
                nextToken = "mollitia";
            }};            

            ListSuiteDefinitionsResponse res = sdk.sdk.listSuiteDefinitions(req);

            if (res.listSuiteDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSuiteRuns

<p>Lists runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteRuns</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSuiteRunsRequest;
import org.openapis.openapi.models.operations.ListSuiteRunsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSuiteRunsRequest req = new ListSuiteRunsRequest() {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "quam";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "velit";
                xAmzSignature = "error";
                xAmzSignedHeaders = "quia";
                maxResults = 338007L;
                nextToken = "vitae";
                suiteDefinitionId = "laborum";
                suiteDefinitionVersion = "animi";
            }};            

            ListSuiteRunsResponse res = sdk.sdk.listSuiteRuns(req);

            if (res.listSuiteRunsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>Lists the tags attached to an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>

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
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("odit") {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "tenetur";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "id";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "aut";
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

## startSuiteRun

<p>Starts a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartSuiteRun</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartSuiteRunRequest;
import org.openapis.openapi.models.operations.StartSuiteRunRequestBody;
import org.openapis.openapi.models.operations.StartSuiteRunRequestBodySuiteRunConfiguration;
import org.openapis.openapi.models.operations.StartSuiteRunResponse;
import org.openapis.openapi.models.shared.DeviceUnderTest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartSuiteRunRequest req = new StartSuiteRunRequest(                new StartSuiteRunRequestBody(                new StartSuiteRunRequestBodySuiteRunConfiguration() {{
                                                parallelRun = false;
                                                primaryDevice = new DeviceUnderTest() {{
                                                    certificateArn = "error";
                                                    thingArn = "temporibus";
                                                }};;
                                                selectedTestList = new String[]{{
                                                    add("quasi"),
                                                    add("reiciendis"),
                                                    add("voluptatibus"),
                                                }};
                                            }};) {{
                                suiteDefinitionVersion = "vero";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("praesentium", "voluptatibus");
                                    put("ipsa", "omnis");
                                }};
                            }};, "voluptate") {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "doloremque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ut";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "dicta";
            }};            

            StartSuiteRunResponse res = sdk.sdk.startSuiteRun(req);

            if (res.startSuiteRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopSuiteRun

<p>Stops a Device Advisor test suite run that is currently running.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopSuiteRun</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopSuiteRunRequest;
import org.openapis.openapi.models.operations.StopSuiteRunResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopSuiteRunRequest req = new StopSuiteRunRequest("dolore", "iusto") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "harum";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quae";
            }};            

            StopSuiteRunResponse res = sdk.sdk.stopSuiteRun(req);

            if (res.stopSuiteRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Adds to and modifies existing tags of an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>

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
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("molestias", "excepturi");
                                                put("pariatur", "modi");
                                                put("praesentium", "rem");
                                            }});, "voluptates") {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "sint";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "enim";
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

<p>Removes tags from an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>

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
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("est",                 new String[]{{
                                add("explicabo"),
                                add("deserunt"),
                                add("distinctio"),
                                add("quibusdam"),
                            }}) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
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

## updateSuiteDefinition

<p>Updates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSuiteDefinition</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSuiteDefinitionRequest;
import org.openapis.openapi.models.operations.UpdateSuiteDefinitionRequestBody;
import org.openapis.openapi.models.operations.UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;
import org.openapis.openapi.models.operations.UpdateSuiteDefinitionResponse;
import org.openapis.openapi.models.shared.DeviceUnderTest;
import org.openapis.openapi.models.shared.ProtocolEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSuiteDefinitionRequest req = new UpdateSuiteDefinitionRequest(                new UpdateSuiteDefinitionRequestBody(                new UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration() {{
                                                devicePermissionRoleArn = "assumenda";
                                                devices = new org.openapis.openapi.models.shared.DeviceUnderTest[]{{
                                                    add(new DeviceUnderTest() {{
                                                        certificateArn = "alias";
                                                        thingArn = "fugit";
                                                    }}),
                                                    add(new DeviceUnderTest() {{
                                                        certificateArn = "dolorum";
                                                        thingArn = "excepturi";
                                                    }}),
                                                }};
                                                intendedForQualification = false;
                                                isLongDurationTest = false;
                                                protocol = ProtocolEnum.MQTT_V311;
                                                rootGroup = "facilis";
                                                suiteDefinitionName = "tempore";
                                            }};);, "labore") {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "eum";
                xAmzCredential = "non";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "sint";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "provident";
            }};            

            UpdateSuiteDefinitionResponse res = sdk.sdk.updateSuiteDefinition(req);

            if (res.updateSuiteDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
