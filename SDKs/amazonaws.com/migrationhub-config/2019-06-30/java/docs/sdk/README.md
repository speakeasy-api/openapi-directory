# SDK

## Overview

<p>The AWS Migration Hub home region APIs are available specifically for working with your Migration Hub home region. You can use these APIs to determine a home region, as well as to create and work with controls that describe the home region.</p> <ul> <li> <p>You must make API calls for write actions (create, notify, associate, disassociate, import, or put) while in your home region, or a <code>HomeRegionNotSetException</code> error is returned.</p> </li> <li> <p>API calls for read actions (list, describe, stop, and delete) are permitted outside of your home region.</p> </li> <li> <p>If you call a write API outside the home region, an <code>InvalidInputException</code> is returned.</p> </li> <li> <p>You can call <code>GetHomeRegion</code> action to obtain the account's Migration Hub home region.</p> </li> </ul> <p>For specific API usage, see the sections that follow in this AWS Migration Hub Home Region API reference. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/migrationhub-config/>
### Available Operations

* [createHomeRegionControl](#createhomeregioncontrol) - This API sets up the home region for the calling account only.
* [describeHomeRegionControls](#describehomeregioncontrols) - This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code> fields.
* [getHomeRegion](#gethomeregion) - Returns the calling account’s home region, if configured. This API is used by other AWS services to determine the regional endpoint for calling AWS Application Discovery Service and Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration Hub home region.

## createHomeRegionControl

This API sets up the home region for the calling account only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHomeRegionControlRequest;
import org.openapis.openapi.models.operations.CreateHomeRegionControlResponse;
import org.openapis.openapi.models.operations.CreateHomeRegionControlXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateHomeRegionControlRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.TargetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateHomeRegionControlRequest req = new CreateHomeRegionControlRequest(                new CreateHomeRegionControlRequest("molestiae",                 new Target(TargetTypeEnum.ACCOUNT) {{
                                                id = "cc78ca1b-a928-4fc8-9674-2cb739205929";
                                            }};) {{
                                dryRun = false;
                            }};, CreateHomeRegionControlXAmzTargetEnum.AWS_MIGRATION_HUB_MULTI_ACCOUNT_SERVICE_CREATE_HOME_REGION_CONTROL) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
            }};            

            CreateHomeRegionControlResponse res = sdk.sdk.createHomeRegionControl(req);

            if (res.createHomeRegionControlResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeHomeRegionControls

This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code> fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeHomeRegionControlsRequest;
import org.openapis.openapi.models.operations.DescribeHomeRegionControlsResponse;
import org.openapis.openapi.models.operations.DescribeHomeRegionControlsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeHomeRegionControlsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.TargetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeHomeRegionControlsRequest req = new DescribeHomeRegionControlsRequest(                new DescribeHomeRegionControlsRequest() {{
                                controlId = "iste";
                                homeRegion = "iure";
                                maxResults = 902349L;
                                nextToken = "quidem";
                                target = new Target(TargetTypeEnum.ACCOUNT) {{
                                    id = "10faaa23-52c5-4955-907a-ff1a3a2fa946";
                                }};;
                            }};, DescribeHomeRegionControlsXAmzTargetEnum.AWS_MIGRATION_HUB_MULTI_ACCOUNT_SERVICE_DESCRIBE_HOME_REGION_CONTROLS) {{
                maxResults = "quam";
                nextToken = "molestiae";
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "error";
                xAmzCredential = "quia";
                xAmzDate = "quis";
                xAmzSecurityToken = "vitae";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "animi";
            }};            

            DescribeHomeRegionControlsResponse res = sdk.sdk.describeHomeRegionControls(req);

            if (res.describeHomeRegionControlsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHomeRegion

Returns the calling account’s home region, if configured. This API is used by other AWS services to determine the regional endpoint for calling AWS Application Discovery Service and Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration Hub home region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHomeRegionRequest;
import org.openapis.openapi.models.operations.GetHomeRegionResponse;
import org.openapis.openapi.models.operations.GetHomeRegionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetHomeRegionRequest req = new GetHomeRegionRequest(                new java.util.HashMap<String, Object>() {{
                                put("quo", "sequi");
                            }}, GetHomeRegionXAmzTargetEnum.AWS_MIGRATION_HUB_MULTI_ACCOUNT_SERVICE_GET_HOME_REGION) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "id";
                xAmzDate = "possimus";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "error";
            }};            

            GetHomeRegionResponse res = sdk.sdk.getHomeRegion(req);

            if (res.getHomeRegionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
