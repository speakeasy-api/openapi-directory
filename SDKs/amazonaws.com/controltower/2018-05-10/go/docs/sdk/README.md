# SDK

## Overview

<p>These interfaces allow you to apply the AWS library of pre-defined <i>controls</i> to your organizational units, programmatically. In this context, controls are the same as AWS Control Tower guardrails.</p> <p>To call these APIs, you'll need to know:</p> <ul> <li> <p>the <code>ControlARN</code> for the control--that is, the guardrail--you are targeting,</p> </li> <li> <p>and the ARN associated with the target organizational unit (OU).</p> </li> </ul> <p> <b>To get the <code>ControlARN</code> for your AWS Control Tower guardrail:</b> </p> <p>The <code>ControlARN</code> contains the control name which is specified in each guardrail. For a list of control names for <i>Strongly recommended</i> and <i>Elective</i> guardrails, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-identifiers.html.html">Resource identifiers for APIs and guardrails</a> in the <a href="https://docs.aws.amazon.com/controltower/latest/userguide/automating-tasks.html">Automating tasks section</a> of the AWS Control Tower User Guide. Remember that <i>Mandatory</i> guardrails cannot be added or removed.</p> <note> <p> <b>ARN format:</b> <code>arn:aws:controltower:{REGION}::control/{CONTROL_NAME}</code> </p> <p> <b>Example:</b> </p> <p> <code>arn:aws:controltower:us-west-2::control/AWS-GR_AUTOSCALING_LAUNCH_CONFIG_PUBLIC_IP_DISABLED</code> </p> </note> <p> <b>To get the ARN for an OU:</b> </p> <p>In the AWS Organizations console, you can find the ARN for the OU on the <b>Organizational unit details</b> page associated with that OU.</p> <note> <p> <b>OU ARN format:</b> </p> <p> <code>arn:${Partition}:organizations::${MasterAccountId}:ou/o-${OrganizationId}/ou-${OrganizationalUnitId}</code> </p> </note> <p class="title"> <b>Details and examples</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-identifiers.html">List of resource identifiers for APIs and guardrails</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/guardrail-api-examples-short.html">Guardrail API examples (CLI)</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/enable-controls.html">Enable controls with AWS CloudFormation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/creating-resources-with-cloudformation.html">Creating AWS Control Tower resources with AWS CloudFormation</a> </p> </li> </ul> <p>To view the open source resource repository on GitHub, see <a href="https://github.com/aws-cloudformation/aws-cloudformation-resource-providers-controltower">aws-cloudformation/aws-cloudformation-resource-providers-controltower</a> </p> <p> <b>Recording API Requests</b> </p> <p>AWS Control Tower supports AWS CloudTrail, a service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. By using information collected by CloudTrail, you can determine which requests the AWS Control Tower service received, who made the request and when, and so on. For more about AWS Control Tower and its support for CloudTrail, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/logging-using-cloudtrail.html">Logging AWS Control Tower Actions with AWS CloudTrail</a> in the AWS Control Tower User Guide. To learn more about CloudTrail, including how to turn it on and find your log files, see the AWS CloudTrail User Guide.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/controltower/>
### Available Operations

* [DisableControl](#disablecontrol) - This API call turns off a control. It starts an asynchronous operation that deletes AWS resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify.
* [EnableControl](#enablecontrol) - This API call activates a control. It starts an asynchronous operation that creates AWS resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify.
* [GetControlOperation](#getcontroloperation) - Returns the status of a particular <code>EnableControl</code> or <code>DisableControl</code> operation. Displays a message in case of error. Details for an operation are available for 90 days.
* [ListEnabledControls](#listenabledcontrols) - Lists the controls enabled by AWS Control Tower on the specified organizational unit and the accounts it contains.

## DisableControl

This API call turns off a control. It starts an asynchronous operation that deletes AWS resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisableControl(ctx, operations.DisableControlRequest{
        RequestBody: operations.DisableControlRequestBody{
            ControlIdentifier: "error",
            TargetIdentifier: "deserunt",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableControlOutput != nil {
        // handle response
    }
}
```

## EnableControl

This API call activates a control. It starts an asynchronous operation that creates AWS resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.EnableControl(ctx, operations.EnableControlRequest{
        RequestBody: operations.EnableControlRequestBody{
            ControlIdentifier: "suscipit",
            TargetIdentifier: "molestiae",
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableControlOutput != nil {
        // handle response
    }
}
```

## GetControlOperation

Returns the status of a particular <code>EnableControl</code> or <code>DisableControl</code> operation. Displays a message in case of error. Details for an operation are available for 90 days.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetControlOperation(ctx, operations.GetControlOperationRequest{
        RequestBody: operations.GetControlOperationRequestBody{
            OperationIdentifier: "temporibus",
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetControlOperationOutput != nil {
        // handle response
    }
}
```

## ListEnabledControls

Lists the controls enabled by AWS Control Tower on the specified organizational unit and the accounts it contains.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListEnabledControls(ctx, operations.ListEnabledControlsRequest{
        RequestBody: operations.ListEnabledControlsRequestBody{
            MaxResults: sdk.Int64(957156),
            NextToken: sdk.String("quo"),
            TargetIdentifier: "odit",
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("esse"),
        MaxResults: sdk.String("totam"),
        NextToken: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnabledControlsOutput != nil {
        // handle response
    }
}
```
