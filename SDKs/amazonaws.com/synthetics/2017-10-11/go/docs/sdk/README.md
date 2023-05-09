# SDK

## Overview

<fullname>Amazon CloudWatch Synthetics</fullname> <p>You can use Amazon CloudWatch Synthetics to continually monitor your services. You can create and manage <i>canaries</i>, which are modular, lightweight scripts that monitor your endpoints and APIs from the outside-in. You can set up your canaries to run 24 hours a day, once per minute. The canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. The canaries seamlessly integrate with CloudWatch ServiceLens to help you trace the causes of impacted nodes in your applications. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ServiceLens.html">Using ServiceLens to Monitor the Health of Your Applications</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Before you create and manage canaries, be aware of the security considerations. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/synthetics/>
### Available Operations

* [AssociateResource](#associateresource) - <p>Associates a canary with a group. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. </p> <p>You must run this operation in the Region where the canary exists.</p>
* [CreateCanary](#createcanary) - <p>Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the outside-in. Canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. You can set up a canary to run continuously or just once. </p> <p>Do not use <code>CreateCanary</code> to modify an existing canary. Use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html">UpdateCanary</a> instead.</p> <p>To create canaries, you must have the <code>CloudWatchSyntheticsFullAccess</code> policy. If you are creating a new IAM role for the canary, you also need the <code>iam:CreateRole</code>, <code>iam:CreatePolicy</code> and <code>iam:AttachRolePolicy</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Roles">Necessary Roles and Permissions</a>.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>
* [CreateGroup](#creategroup) - <p>Creates a group which you can use to associate canaries with each other, including cross-Region canaries. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. </p> <p>Groups are global resources. When you create a group, it is replicated across Amazon Web Services Regions, and you can view it and add canaries to it from any Region. Although the group ARN format reflects the Region name where it was created, a group is not constrained to any Region. This means that you can put canaries from multiple Regions into the same group, and then use that group to view and manage all of those canaries in a single view.</p> <p>Groups are supported in all Regions except the Regions that are disabled by default. For more information about these Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable">Enabling a Region</a>.</p> <p>Each group can contain as many as 10 canaries. You can have as many as 20 groups in your account. Any single canary can be a member of up to 10 groups.</p>
* [DeleteCanary](#deletecanary) - <p>Permanently deletes the specified canary.</p> <p>If you specify <code>DeleteLambda</code> to <code>true</code>, CloudWatch Synthetics also deletes the Lambda functions and layers that are used by the canary.</p> <p>Other resources used and created by the canary are not automatically deleted. After you delete a canary that you do not intend to use again, you should also delete the following:</p> <ul> <li> <p>The CloudWatch alarms created for this canary. These alarms have a name of <code>Synthetics-SharpDrop-Alarm-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>Amazon S3 objects and buckets, such as the canary's artifact location.</p> </li> <li> <p>IAM roles created for the canary. If they were created in the console, these roles have the name <code> role/service-role/CloudWatchSyntheticsRole-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>CloudWatch Logs log groups created for the canary. These logs groups have the name <code>/aws/lambda/cwsyn-<i>MyCanaryName</i> </code>. </p> </li> </ul> <p>Before you delete a canary, you might want to use <code>GetCanary</code> to display the information about this canary. Make note of the information returned by this operation so that you can delete these resources after you delete the canary.</p>
* [DeleteGroup](#deletegroup) - <p>Deletes a group. The group doesn't need to be empty to be deleted. If there are canaries in the group, they are not deleted when you delete the group. </p> <p>Groups are a global resource that appear in all Regions, but the request to delete a group must be made from its home Region. You can find the home Region of a group within its ARN.</p>
* [DescribeCanaries](#describecanaries) - <p>This operation returns a list of the canaries in your account, along with full details about each canary.</p> <p>This operation supports resource-level authorization using an IAM policy and the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>
* [DescribeCanariesLastRun](#describecanarieslastrun) - <p>Use this operation to see information from the most recent run of each canary that you have created.</p> <p>This operation supports resource-level authorization using an IAM policy and the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>
* [DescribeRuntimeVersions](#describeruntimeversions) - Returns a list of Synthetics canary runtime versions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
* [DisassociateResource](#disassociateresource) - Removes a canary from a group. You must run this operation in the Region where the canary exists.
* [GetCanary](#getcanary) - Retrieves complete information about one canary. You must specify the name of the canary that you want. To get a list of canaries and their names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.
* [GetCanaryRuns](#getcanaryruns) - Retrieves a list of runs for a specified canary.
* [GetGroup](#getgroup) - Returns information about one group. Groups are a global resource, so you can use this operation from any Region.
* [ListAssociatedGroups](#listassociatedgroups) - Returns a list of the groups that the specified canary is associated with. The canary that you specify must be in the current Region.
* [ListGroupResources](#listgroupresources) - This operation returns a list of the ARNs of the canaries that are associated with the specified group.
* [ListGroups](#listgroups) - Returns a list of all groups in the account, displaying their names, unique IDs, and ARNs. The groups from all Regions are returned.
* [ListTagsForResource](#listtagsforresource) - Displays the tags associated with a canary or group.
* [StartCanary](#startcanary) - Use this operation to run a canary that has already been created. The frequency of the canary runs is determined by the value of the canary's <code>Schedule</code>. To see a canary's schedule, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanary.html">GetCanary</a>.
* [StopCanary](#stopcanary) - <p>Stops the canary to prevent all future runs. If the canary is currently running,the run that is in progress completes on its own, publishes metrics, and uploads artifacts, but it is not recorded in Synthetics as a completed run.</p> <p>You can use <code>StartCanary</code> to start it running again with the canary’s current schedule at any point in the future. </p>
* [TagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified canary or group. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a canary or group.</p>
* [UntagResource](#untagresource) - Removes one or more tags from the specified resource.
* [UpdateCanary](#updatecanary) - <p>Updates the configuration of a canary that has already been created.</p> <p>You can't use this operation to update the tags of an existing canary. To change the tags of an existing canary, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html">TagResource</a>.</p>

## AssociateResource

<p>Associates a canary with a group. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. </p> <p>You must run this operation in the Region where the canary exists.</p>

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
    res, err := s.SDK.AssociateResource(ctx, operations.AssociateResourceRequest{
        RequestBody: operations.AssociateResourceRequestBody{
            ResourceArn: "error",
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("delectus"),
        GroupIdentifier: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateResourceResponse != nil {
        // handle response
    }
}
```

## CreateCanary

<p>Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the outside-in. Canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. You can set up a canary to run continuously or just once. </p> <p>Do not use <code>CreateCanary</code> to modify an existing canary. Use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html">UpdateCanary</a> instead.</p> <p>To create canaries, you must have the <code>CloudWatchSyntheticsFullAccess</code> policy. If you are creating a new IAM role for the canary, you also need the <code>iam:CreateRole</code>, <code>iam:CreatePolicy</code> and <code>iam:AttachRolePolicy</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Roles">Necessary Roles and Permissions</a>.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCanary(ctx, operations.CreateCanaryRequest{
        RequestBody: operations.CreateCanaryRequestBody{
            ArtifactConfig: &operations.CreateCanaryRequestBodyArtifactConfig{
                S3Encryption: &shared.S3EncryptionConfig{
                    EncryptionMode: shared.EncryptionModeEnumSseS3.ToPointer(),
                    KmsKeyArn: sdk.String("molestiae"),
                },
            },
            ArtifactS3Location: "minus",
            Code: operations.CreateCanaryRequestBodyCode{
                Handler: sdk.String("placeat"),
                S3Bucket: sdk.String("voluptatum"),
                S3Key: sdk.String("iusto"),
                S3Version: sdk.String("excepturi"),
                ZipFile: sdk.String("nisi"),
            },
            ExecutionRoleArn: "recusandae",
            FailureRetentionPeriodInDays: sdk.Int64(836079),
            Name: "Erica Bogisich III",
            RunConfig: &operations.CreateCanaryRequestBodyRunConfig{
                ActiveTracing: sdk.Bool(false),
                EnvironmentVariables: map[string]string{
                    "sapiente": "quo",
                    "odit": "at",
                    "at": "maiores",
                    "molestiae": "quod",
                },
                MemoryInMB: sdk.Int64(800911),
                TimeoutInSeconds: sdk.Int64(461479),
            },
            RuntimeVersion: "totam",
            Schedule: operations.CreateCanaryRequestBodySchedule{
                DurationInSeconds: sdk.Int64(780529),
                Expression: sdk.String("dolorum"),
            },
            SuccessRetentionPeriodInDays: sdk.Int64(118274),
            Tags: map[string]string{
                "officia": "occaecati",
                "fugit": "deleniti",
                "hic": "optio",
            },
            VpcConfig: &operations.CreateCanaryRequestBodyVpcConfig{
                SecurityGroupIds: []string{
                    "beatae",
                    "commodi",
                    "molestiae",
                },
                SubnetIds: []string{
                    "qui",
                    "impedit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCanaryResponse != nil {
        // handle response
    }
}
```

## CreateGroup

<p>Creates a group which you can use to associate canaries with each other, including cross-Region canaries. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. </p> <p>Groups are global resources. When you create a group, it is replicated across Amazon Web Services Regions, and you can view it and add canaries to it from any Region. Although the group ARN format reflects the Region name where it was created, a group is not constrained to any Region. This means that you can put canaries from multiple Regions into the same group, and then use that group to view and manage all of those canaries in a single view.</p> <p>Groups are supported in all Regions except the Regions that are disabled by default. For more information about these Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable">Enabling a Region</a>.</p> <p>Each group can contain as many as 10 canaries. You can have as many as 20 groups in your account. Any single canary can be a member of up to 10 groups.</p>

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
    res, err := s.SDK.CreateGroup(ctx, operations.CreateGroupRequest{
        RequestBody: operations.CreateGroupRequestBody{
            Name: "Louis Moore",
            Tags: map[string]string{
                "hic": "saepe",
                "fuga": "in",
            },
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupResponse != nil {
        // handle response
    }
}
```

## DeleteCanary

<p>Permanently deletes the specified canary.</p> <p>If you specify <code>DeleteLambda</code> to <code>true</code>, CloudWatch Synthetics also deletes the Lambda functions and layers that are used by the canary.</p> <p>Other resources used and created by the canary are not automatically deleted. After you delete a canary that you do not intend to use again, you should also delete the following:</p> <ul> <li> <p>The CloudWatch alarms created for this canary. These alarms have a name of <code>Synthetics-SharpDrop-Alarm-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>Amazon S3 objects and buckets, such as the canary's artifact location.</p> </li> <li> <p>IAM roles created for the canary. If they were created in the console, these roles have the name <code> role/service-role/CloudWatchSyntheticsRole-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>CloudWatch Logs log groups created for the canary. These logs groups have the name <code>/aws/lambda/cwsyn-<i>MyCanaryName</i> </code>. </p> </li> </ul> <p>Before you delete a canary, you might want to use <code>GetCanary</code> to display the information about this canary. Make note of the information returned by this operation so that you can delete these resources after you delete the canary.</p>

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
    res, err := s.SDK.DeleteCanary(ctx, operations.DeleteCanaryRequest{
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("corporis"),
        DeleteLambda: sdk.Bool(false),
        Name: "Della Halvorson",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCanaryResponse != nil {
        // handle response
    }
}
```

## DeleteGroup

<p>Deletes a group. The group doesn't need to be empty to be deleted. If there are canaries in the group, they are not deleted when you delete the group. </p> <p>Groups are a global resource that appear in all Regions, but the request to delete a group must be made from its home Region. You can find the home Region of a group within its ARN.</p>

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
    res, err := s.SDK.DeleteGroup(ctx, operations.DeleteGroupRequest{
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        GroupIdentifier: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGroupResponse != nil {
        // handle response
    }
}
```

## DescribeCanaries

<p>This operation returns a list of the canaries in your account, along with full details about each canary.</p> <p>This operation supports resource-level authorization using an IAM policy and the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>

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
    res, err := s.SDK.DescribeCanaries(ctx, operations.DescribeCanariesRequest{
        MaxResults: sdk.String("mollitia"),
        NextToken: sdk.String("dolorem"),
        RequestBody: operations.DescribeCanariesRequestBody{
            MaxResults: sdk.Int64(635059),
            Names: []string{
                "repellat",
            },
            NextToken: sdk.String("mollitia"),
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCanariesResponse != nil {
        // handle response
    }
}
```

## DescribeCanariesLastRun

<p>Use this operation to see information from the most recent run of each canary that you have created.</p> <p>This operation supports resource-level authorization using an IAM policy and the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>

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
    res, err := s.SDK.DescribeCanariesLastRun(ctx, operations.DescribeCanariesLastRunRequest{
        MaxResults: sdk.String("quia"),
        NextToken: sdk.String("quis"),
        RequestBody: operations.DescribeCanariesLastRunRequestBody{
            MaxResults: sdk.Int64(110375),
            Names: []string{
                "animi",
                "enim",
                "odit",
            },
            NextToken: sdk.String("quo"),
        },
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCanariesLastRunResponse != nil {
        // handle response
    }
}
```

## DescribeRuntimeVersions

Returns a list of Synthetics canary runtime versions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.

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
    res, err := s.SDK.DescribeRuntimeVersions(ctx, operations.DescribeRuntimeVersionsRequest{
        MaxResults: sdk.String("error"),
        NextToken: sdk.String("temporibus"),
        RequestBody: operations.DescribeRuntimeVersionsRequestBody{
            MaxResults: sdk.Int64(673660),
            NextToken: sdk.String("quasi"),
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRuntimeVersionsResponse != nil {
        // handle response
    }
}
```

## DisassociateResource

Removes a canary from a group. You must run this operation in the Region where the canary exists.

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
    res, err := s.SDK.DisassociateResource(ctx, operations.DisassociateResourceRequest{
        RequestBody: operations.DisassociateResourceRequestBody{
            ResourceArn: "omnis",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("maiores"),
        GroupIdentifier: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateResourceResponse != nil {
        // handle response
    }
}
```

## GetCanary

Retrieves complete information about one canary. You must specify the name of the canary that you want. To get a list of canaries and their names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.

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
    res, err := s.SDK.GetCanary(ctx, operations.GetCanaryRequest{
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        Name: "Elvira Bergnaum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCanaryResponse != nil {
        // handle response
    }
}
```

## GetCanaryRuns

Retrieves a list of runs for a specified canary.

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
    res, err := s.SDK.GetCanaryRuns(ctx, operations.GetCanaryRunsRequest{
        MaxResults: sdk.String("molestias"),
        NextToken: sdk.String("excepturi"),
        RequestBody: operations.GetCanaryRunsRequestBody{
            MaxResults: sdk.Int64(865103),
            NextToken: sdk.String("modi"),
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        Name: "Miss Randall Hamill",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCanaryRunsResponse != nil {
        // handle response
    }
}
```

## GetGroup

Returns information about one group. Groups are a global resource, so you can use this operation from any Region.

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
    res, err := s.SDK.GetGroup(ctx, operations.GetGroupRequest{
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
        GroupIdentifier: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGroupResponse != nil {
        // handle response
    }
}
```

## ListAssociatedGroups

Returns a list of the groups that the specified canary is associated with. The canary that you specify must be in the current Region.

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
    res, err := s.SDK.ListAssociatedGroups(ctx, operations.ListAssociatedGroupsRequest{
        MaxResults: sdk.String("cupiditate"),
        NextToken: sdk.String("quos"),
        RequestBody: operations.ListAssociatedGroupsRequestBody{
            MaxResults: sdk.Int64(20107),
            NextToken: sdk.String("magni"),
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("tempora"),
        ResourceArn: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssociatedGroupsResponse != nil {
        // handle response
    }
}
```

## ListGroupResources

This operation returns a list of the ARNs of the canaries that are associated with the specified group.

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
    res, err := s.SDK.ListGroupResources(ctx, operations.ListGroupResourcesRequest{
        MaxResults: sdk.String("tempore"),
        NextToken: sdk.String("labore"),
        RequestBody: operations.ListGroupResourcesRequestBody{
            MaxResults: sdk.Int64(962189),
            NextToken: sdk.String("eum"),
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("sint"),
        GroupIdentifier: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupResourcesResponse != nil {
        // handle response
    }
}
```

## ListGroups

Returns a list of all groups in the account, displaying their names, unique IDs, and ARNs. The groups from all Regions are returned.

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
    res, err := s.SDK.ListGroups(ctx, operations.ListGroupsRequest{
        MaxResults: sdk.String("dolor"),
        NextToken: sdk.String("debitis"),
        RequestBody: operations.ListGroupsRequestBody{
            MaxResults: sdk.Int64(952749),
            NextToken: sdk.String("dolorum"),
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Displays the tags associated with a canary or group.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("non"),
        ResourceArn: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## StartCanary

Use this operation to run a canary that has already been created. The frequency of the canary runs is determined by the value of the canary's <code>Schedule</code>. To see a canary's schedule, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanary.html">GetCanary</a>.

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
    res, err := s.SDK.StartCanary(ctx, operations.StartCanaryRequest{
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("id"),
        Name: "Jaime Will",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartCanaryResponse != nil {
        // handle response
    }
}
```

## StopCanary

<p>Stops the canary to prevent all future runs. If the canary is currently running,the run that is in progress completes on its own, publishes metrics, and uploads artifacts, but it is not recorded in Synthetics as a completed run.</p> <p>You can use <code>StartCanary</code> to start it running again with the canary’s current schedule at any point in the future. </p>

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
    res, err := s.SDK.StopCanary(ctx, operations.StopCanaryRequest{
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("nihil"),
        Name: "Verna Olson",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopCanaryResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Assigns one or more tags (key-value pairs) to the specified canary or group. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a canary or group.</p>

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "natus": "nobis",
                "eum": "vero",
            },
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("provident"),
        ResourceArn: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes one or more tags from the specified resource.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("eum"),
        ResourceArn: "dolor",
        TagKeys: []string{
            "odit",
            "nemo",
            "quasi",
            "iure",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateCanary

<p>Updates the configuration of a canary that has already been created.</p> <p>You can't use this operation to update the tags of an existing canary. To change the tags of an existing canary, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html">TagResource</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCanary(ctx, operations.UpdateCanaryRequest{
        RequestBody: operations.UpdateCanaryRequestBody{
            ArtifactConfig: &operations.UpdateCanaryRequestBodyArtifactConfig{
                S3Encryption: &shared.S3EncryptionConfig{
                    EncryptionMode: shared.EncryptionModeEnumSseKms.ToPointer(),
                    KmsKeyArn: sdk.String("debitis"),
                },
            },
            ArtifactS3Location: sdk.String("eius"),
            Code: &operations.UpdateCanaryRequestBodyCode{
                Handler: sdk.String("maxime"),
                S3Bucket: sdk.String("deleniti"),
                S3Key: sdk.String("facilis"),
                S3Version: sdk.String("in"),
                ZipFile: sdk.String("architecto"),
            },
            ExecutionRoleArn: sdk.String("architecto"),
            FailureRetentionPeriodInDays: sdk.Int64(919483),
            RunConfig: &operations.UpdateCanaryRequestBodyRunConfig{
                ActiveTracing: sdk.Bool(false),
                EnvironmentVariables: map[string]string{
                    "expedita": "nihil",
                    "repellat": "quibusdam",
                },
                MemoryInMB: sdk.Int64(149448),
                TimeoutInSeconds: sdk.Int64(904648),
            },
            RuntimeVersion: sdk.String("pariatur"),
            Schedule: &operations.UpdateCanaryRequestBodySchedule{
                DurationInSeconds: sdk.Int64(37559),
                Expression: sdk.String("consequuntur"),
            },
            SuccessRetentionPeriodInDays: sdk.Int64(508315),
            VisualReference: &operations.UpdateCanaryRequestBodyVisualReference{
                BaseCanaryRunID: sdk.String("natus"),
                BaseScreenshots: []shared.BaseScreenshot{
                    shared.BaseScreenshot{
                        IgnoreCoordinates: []string{
                            "quo",
                        },
                        ScreenshotName: "illum",
                    },
                },
            },
            VpcConfig: &operations.UpdateCanaryRequestBodyVpcConfig{
                SecurityGroupIds: []string{
                    "maxime",
                    "ea",
                    "excepturi",
                    "odit",
                },
                SubnetIds: []string{
                    "accusantium",
                    "ab",
                },
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("eaque"),
        Name: "Dr. Herman Wolf",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCanaryResponse != nil {
        // handle response
    }
}
```
