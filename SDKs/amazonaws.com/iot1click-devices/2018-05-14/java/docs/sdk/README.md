# SDK

## Overview

Describes all of the AWS IoT 1-Click device-related API operations for the service.
 Also provides sample requests, responses, and errors for the supported web services
 protocols.

Amazon Web Services documentation
<https://docs.aws.amazon.com/iot1click/>
### Available Operations

* [claimDevicesByClaimCode](#claimdevicesbyclaimcode) - Adds device(s) to your account (i.e., claim one or more devices) if and only if you
 received a claim code with the device(s).
* [describeDevice](#describedevice) - Given a device ID, returns a DescribeDeviceResponse object describing the
 details of the device.
* [finalizeDeviceClaim](#finalizedeviceclaim) - <p>Given a device ID, finalizes the claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>
* [getDeviceMethods](#getdevicemethods) - Given a device ID, returns the invokable methods associated with the device.
* [initiateDeviceClaim](#initiatedeviceclaim) - <p>Given a device ID, initiates a claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>
* [invokeDeviceMethod](#invokedevicemethod) - Given a device ID, issues a request to invoke a named device method (with possible
 parameters). See the "Example POST" code snippet below.
* [listDeviceEvents](#listdeviceevents) - Using a device ID, returns a DeviceEventsResponse object containing an
 array of events for the device.
* [listDevices](#listdevices) - Lists the 1-Click compatible devices associated with your AWS account.
* [listTagsForResource](#listtagsforresource) - Lists the tags associated with the specified resource ARN.
* [tagResource](#tagresource) - Adds or updates the tags associated with the resource ARN. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
 resource.
* [unclaimDevice](#unclaimdevice) - Disassociates a device from your AWS account using its device ID.
* [untagResource](#untagresource) - Using tag keys, deletes the tags (key/value pairs) associated with the specified
 resource ARN.
* [updateDeviceState](#updatedevicestate) - Using a Boolean value (true or false), this operation
 enables or disables the device given a device ID.

## claimDevicesByClaimCode

Adds device(s) to your account (i.e., claim one or more devices) if and only if you
 received a claim code with the device(s).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClaimDevicesByClaimCodeRequest;
import org.openapis.openapi.models.operations.ClaimDevicesByClaimCodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClaimDevicesByClaimCodeRequest req = new ClaimDevicesByClaimCodeRequest("deserunt") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            ClaimDevicesByClaimCodeResponse res = sdk.sdk.claimDevicesByClaimCode(req);

            if (res.claimDevicesByClaimCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDevice

Given a device ID, returns a DescribeDeviceResponse object describing the
 details of the device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDeviceRequest;
import org.openapis.openapi.models.operations.DescribeDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDeviceRequest req = new DescribeDeviceRequest("molestiae") {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            DescribeDeviceResponse res = sdk.sdk.describeDevice(req);

            if (res.describeDeviceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## finalizeDeviceClaim

<p>Given a device ID, finalizes the claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FinalizeDeviceClaimRequest;
import org.openapis.openapi.models.operations.FinalizeDeviceClaimRequestBody;
import org.openapis.openapi.models.operations.FinalizeDeviceClaimResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            FinalizeDeviceClaimRequest req = new FinalizeDeviceClaimRequest(                new FinalizeDeviceClaimRequestBody() {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("quis", "veritatis");
                                }};
                            }};, "deserunt") {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "repellendus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "quo";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "at";
            }};            

            FinalizeDeviceClaimResponse res = sdk.sdk.finalizeDeviceClaim(req);

            if (res.finalizeDeviceClaimResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceMethods

Given a device ID, returns the invokable methods associated with the device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceMethodsRequest;
import org.openapis.openapi.models.operations.GetDeviceMethodsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceMethodsRequest req = new GetDeviceMethodsRequest("maiores") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
            }};            

            GetDeviceMethodsResponse res = sdk.sdk.getDeviceMethods(req);

            if (res.getDeviceMethodsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## initiateDeviceClaim

<p>Given a device ID, initiates a claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InitiateDeviceClaimRequest;
import org.openapis.openapi.models.operations.InitiateDeviceClaimResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InitiateDeviceClaimRequest req = new InitiateDeviceClaimRequest("nam") {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "fugit";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "hic";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "totam";
            }};            

            InitiateDeviceClaimResponse res = sdk.sdk.initiateDeviceClaim(req);

            if (res.initiateDeviceClaimResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invokeDeviceMethod

Given a device ID, issues a request to invoke a named device method (with possible
 parameters). See the "Example POST" code snippet below.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvokeDeviceMethodRequest;
import org.openapis.openapi.models.operations.InvokeDeviceMethodRequestBody;
import org.openapis.openapi.models.operations.InvokeDeviceMethodRequestBodyDeviceMethod;
import org.openapis.openapi.models.operations.InvokeDeviceMethodResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InvokeDeviceMethodRequest req = new InvokeDeviceMethodRequest(                new InvokeDeviceMethodRequestBody() {{
                                deviceMethod = new InvokeDeviceMethodRequestBodyDeviceMethod() {{
                                    deviceType = "commodi";
                                    methodName = "molestiae";
                                }};;
                                deviceMethodParameters = "modi";
                            }};, "qui") {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "cum";
                xAmzCredential = "esse";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
            }};            

            InvokeDeviceMethodResponse res = sdk.sdk.invokeDeviceMethod(req);

            if (res.invokeDeviceMethodResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeviceEvents

Using a device ID, returns a DeviceEventsResponse object containing an
 array of events for the device.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeviceEventsRequest;
import org.openapis.openapi.models.operations.ListDeviceEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeviceEventsRequest req = new ListDeviceEventsRequest("natus", OffsetDateTime.parse("2022-05-22T14:02:28.908Z"), OffsetDateTime.parse("2022-05-20T19:39:29.035Z")) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "saepe";
                xAmzDate = "fuga";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "iste";
                maxResults = 437032L;
                nextToken = "saepe";
            }};            

            ListDeviceEventsResponse res = sdk.sdk.listDeviceEvents(req);

            if (res.listDeviceEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDevices

Lists the 1-Click compatible devices associated with your AWS account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDevicesRequest;
import org.openapis.openapi.models.operations.ListDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDevicesRequest req = new ListDevicesRequest() {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "reiciendis";
                xAmzDate = "est";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dolores";
                deviceType = "dolorem";
                maxResults = 358152L;
                nextToken = "explicabo";
            }};            

            ListDevicesResponse res = sdk.sdk.listDevices(req);

            if (res.listDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags associated with the specified resource ARN.

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
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("enim") {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
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

Adds or updates the tags associated with the resource ARN. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
 resource.

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
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("architecto", "mollitia");
                                                put("dolorem", "culpa");
                                                put("consequuntur", "repellat");
                                                put("mollitia", "occaecati");
                                            }});, "numquam") {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "quam";
                xAmzCredential = "molestiae";
                xAmzDate = "velit";
                xAmzSecurityToken = "error";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "quis";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unclaimDevice

Disassociates a device from your AWS account using its device ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnclaimDeviceRequest;
import org.openapis.openapi.models.operations.UnclaimDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnclaimDeviceRequest req = new UnclaimDeviceRequest("laborum") {{
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "enim";
                xAmzCredential = "odit";
                xAmzDate = "quo";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "ipsam";
            }};            

            UnclaimDeviceResponse res = sdk.sdk.unclaimDevice(req);

            if (res.unclaimDeviceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Using tag keys, deletes the tags (key/value pairs) associated with the specified
 resource ARN.

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
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("possimus",                 new String[]{{
                                add("quasi"),
                            }}) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "laborum";
                xAmzDate = "quasi";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "vero";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceState

Using a Boolean value (true or false), this operation
 enables or disables the device given a device ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceStateRequest;
import org.openapis.openapi.models.operations.UpdateDeviceStateRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceStateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceStateRequest req = new UpdateDeviceStateRequest(                new UpdateDeviceStateRequestBody() {{
                                enabled = false;
                            }};, "praesentium") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "omnis";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "cum";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "doloremque";
            }};            

            UpdateDeviceStateResponse res = sdk.sdk.updateDeviceState(req);

            if (res.updateDeviceStateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
