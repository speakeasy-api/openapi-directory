# SDK

## Overview

<p>These interfaces allow you to apply the AWS library of pre-defined <i>controls</i> to your organizational units, programmatically. In this context, controls are the same as AWS Control Tower guardrails.</p> <p>To call these APIs, you'll need to know:</p> <ul> <li> <p>the <code>ControlARN</code> for the control--that is, the guardrail--you are targeting,</p> </li> <li> <p>and the ARN associated with the target organizational unit (OU).</p> </li> </ul> <p> <b>To get the <code>ControlARN</code> for your AWS Control Tower guardrail:</b> </p> <p>The <code>ControlARN</code> contains the control name which is specified in each guardrail. For a list of control names for <i>Strongly recommended</i> and <i>Elective</i> guardrails, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-identifiers.html.html">Resource identifiers for APIs and guardrails</a> in the <a href="https://docs.aws.amazon.com/controltower/latest/userguide/automating-tasks.html">Automating tasks section</a> of the AWS Control Tower User Guide. Remember that <i>Mandatory</i> guardrails cannot be added or removed.</p> <note> <p> <b>ARN format:</b> <code>arn:aws:controltower:{REGION}::control/{CONTROL_NAME}</code> </p> <p> <b>Example:</b> </p> <p> <code>arn:aws:controltower:us-west-2::control/AWS-GR_AUTOSCALING_LAUNCH_CONFIG_PUBLIC_IP_DISABLED</code> </p> </note> <p> <b>To get the ARN for an OU:</b> </p> <p>In the AWS Organizations console, you can find the ARN for the OU on the <b>Organizational unit details</b> page associated with that OU.</p> <note> <p> <b>OU ARN format:</b> </p> <p> <code>arn:${Partition}:organizations::${MasterAccountId}:ou/o-${OrganizationId}/ou-${OrganizationalUnitId}</code> </p> </note> <p class="title"> <b>Details and examples</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-identifiers.html">List of resource identifiers for APIs and guardrails</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/guardrail-api-examples-short.html">Guardrail API examples (CLI)</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/enable-controls.html">Enable controls with AWS CloudFormation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/creating-resources-with-cloudformation.html">Creating AWS Control Tower resources with AWS CloudFormation</a> </p> </li> </ul> <p>To view the open source resource repository on GitHub, see <a href="https://github.com/aws-cloudformation/aws-cloudformation-resource-providers-controltower">aws-cloudformation/aws-cloudformation-resource-providers-controltower</a> </p> <p> <b>Recording API Requests</b> </p> <p>AWS Control Tower supports AWS CloudTrail, a service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. By using information collected by CloudTrail, you can determine which requests the AWS Control Tower service received, who made the request and when, and so on. For more about AWS Control Tower and its support for CloudTrail, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/logging-using-cloudtrail.html">Logging AWS Control Tower Actions with AWS CloudTrail</a> in the AWS Control Tower User Guide. To learn more about CloudTrail, including how to turn it on and find your log files, see the AWS CloudTrail User Guide.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/controltower/>
### Available Operations

* [disableControl](#disablecontrol) - This API call turns off a control. It starts an asynchronous operation that deletes AWS resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify.
* [enableControl](#enablecontrol) - This API call activates a control. It starts an asynchronous operation that creates AWS resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify.
* [getControlOperation](#getcontroloperation) - Returns the status of a particular <code>EnableControl</code> or <code>DisableControl</code> operation. Displays a message in case of error. Details for an operation are available for 90 days.
* [listEnabledControls](#listenabledcontrols) - Lists the controls enabled by AWS Control Tower on the specified organizational unit and the accounts it contains.

## disableControl

This API call turns off a control. It starts an asynchronous operation that deletes AWS resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableControlRequest;
import org.openapis.openapi.models.operations.DisableControlRequestBody;
import org.openapis.openapi.models.operations.DisableControlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableControlRequest req = new DisableControlRequest(                new DisableControlRequestBody("suscipit", "iure");) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            DisableControlResponse res = sdk.sdk.disableControl(req);

            if (res.disableControlOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableControl

This API call activates a control. It starts an asynchronous operation that creates AWS resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableControlRequest;
import org.openapis.openapi.models.operations.EnableControlRequestBody;
import org.openapis.openapi.models.operations.EnableControlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableControlRequest req = new EnableControlRequest(                new EnableControlRequestBody("placeat", "voluptatum");) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
            }};            

            EnableControlResponse res = sdk.sdk.enableControl(req);

            if (res.enableControlOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getControlOperation

Returns the status of a particular <code>EnableControl</code> or <code>DisableControl</code> operation. Displays a message in case of error. Details for an operation are available for 90 days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetControlOperationRequest;
import org.openapis.openapi.models.operations.GetControlOperationRequestBody;
import org.openapis.openapi.models.operations.GetControlOperationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetControlOperationRequest req = new GetControlOperationRequest(                new GetControlOperationRequestBody("deserunt");) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "repellendus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "quo";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "at";
            }};            

            GetControlOperationResponse res = sdk.sdk.getControlOperation(req);

            if (res.getControlOperationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEnabledControls

Lists the controls enabled by AWS Control Tower on the specified organizational unit and the accounts it contains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEnabledControlsRequest;
import org.openapis.openapi.models.operations.ListEnabledControlsRequestBody;
import org.openapis.openapi.models.operations.ListEnabledControlsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEnabledControlsRequest req = new ListEnabledControlsRequest(                new ListEnabledControlsRequestBody("maiores") {{
                                maxResults = 473608L;
                                nextToken = "quod";
                            }};) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "esse";
                xAmzCredential = "totam";
                xAmzDate = "porro";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "nam";
                maxResults = "officia";
                nextToken = "occaecati";
            }};            

            ListEnabledControlsResponse res = sdk.sdk.listEnabledControls(req);

            if (res.listEnabledControlsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
