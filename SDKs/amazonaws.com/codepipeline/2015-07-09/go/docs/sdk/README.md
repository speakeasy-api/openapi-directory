# SDK

## Overview

<fullname>AWS CodePipeline</fullname> <p> <b>Overview</b> </p> <p>This is the AWS CodePipeline API Reference. This guide provides descriptions of the actions and data types for AWS CodePipeline. Some functionality for your pipeline can only be configured through the API. For more information, see the <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html">AWS CodePipeline User Guide</a>.</p> <p>You can use the AWS CodePipeline API to work with pipelines, stages, actions, and transitions.</p> <p> <i>Pipelines</i> are models of automated release processes. Each pipeline is uniquely named, and consists of stages, actions, and transitions. </p> <p>You can work with pipelines by calling:</p> <ul> <li> <p> <a>CreatePipeline</a>, which creates a uniquely named pipeline.</p> </li> <li> <p> <a>DeletePipeline</a>, which deletes the specified pipeline.</p> </li> <li> <p> <a>GetPipeline</a>, which returns information about the pipeline structure and pipeline metadata, including the pipeline Amazon Resource Name (ARN).</p> </li> <li> <p> <a>GetPipelineExecution</a>, which returns information about a specific execution of a pipeline.</p> </li> <li> <p> <a>GetPipelineState</a>, which returns information about the current state of the stages and actions of a pipeline.</p> </li> <li> <p> <a>ListActionExecutions</a>, which returns action-level details for past executions. The details include full stage and action-level details, including individual action duration, status, any errors that occurred during the execution, and input and output artifact location details.</p> </li> <li> <p> <a>ListPipelines</a>, which gets a summary of all of the pipelines associated with your account.</p> </li> <li> <p> <a>ListPipelineExecutions</a>, which gets a summary of the most recent executions for a pipeline.</p> </li> <li> <p> <a>StartPipelineExecution</a>, which runs the most recent revision of an artifact through the pipeline.</p> </li> <li> <p> <a>StopPipelineExecution</a>, which stops the specified pipeline execution from continuing through the pipeline.</p> </li> <li> <p> <a>UpdatePipeline</a>, which updates a pipeline with edits or changes to the structure of the pipeline.</p> </li> </ul> <p>Pipelines include <i>stages</i>. Each stage contains one or more actions that must complete before the next stage begins. A stage results in success or failure. If a stage fails, the pipeline stops at that stage and remains stopped until either a new version of an artifact appears in the source location, or a user takes action to rerun the most recent artifact through the pipeline. You can call <a>GetPipelineState</a>, which displays the status of a pipeline, including the status of stages in the pipeline, or <a>GetPipeline</a>, which returns the entire structure of the pipeline, including the stages of that pipeline. For more information about the structure of stages and actions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-structure.html">AWS CodePipeline Pipeline Structure Reference</a>.</p> <p>Pipeline stages include <i>actions</i> that are categorized into categories such as source or build actions performed in a stage of a pipeline. For example, you can use a source action to import artifacts into a pipeline from a source such as Amazon S3. Like stages, you do not work with actions directly in most cases, but you do define and interact with actions when working with pipeline operations such as <a>CreatePipeline</a> and <a>GetPipelineState</a>. Valid action categories are:</p> <ul> <li> <p>Source</p> </li> <li> <p>Build</p> </li> <li> <p>Test</p> </li> <li> <p>Deploy</p> </li> <li> <p>Approval</p> </li> <li> <p>Invoke</p> </li> </ul> <p>Pipelines also include <i>transitions</i>, which allow the transition of artifacts from one stage to the next in a pipeline after the actions in one stage complete.</p> <p>You can work with transitions by calling:</p> <ul> <li> <p> <a>DisableStageTransition</a>, which prevents artifacts from transitioning to the next stage in a pipeline.</p> </li> <li> <p> <a>EnableStageTransition</a>, which enables transition of artifacts between stages in a pipeline. </p> </li> </ul> <p> <b>Using the API to integrate with AWS CodePipeline</b> </p> <p>For third-party integrators or developers who want to create their own integrations with AWS CodePipeline, the expected sequence varies from the standard API user. To integrate with AWS CodePipeline, developers need to work with the following items:</p> <p> <b>Jobs</b>, which are instances of an action. For example, a job for a source action might import a revision of an artifact from a source. </p> <p>You can work with jobs by calling:</p> <ul> <li> <p> <a>AcknowledgeJob</a>, which confirms whether a job worker has received the specified job.</p> </li> <li> <p> <a>GetJobDetails</a>, which returns the details of a job.</p> </li> <li> <p> <a>PollForJobs</a>, which determines whether there are any jobs to act on.</p> </li> <li> <p> <a>PutJobFailureResult</a>, which provides details of a job failure. </p> </li> <li> <p> <a>PutJobSuccessResult</a>, which provides details of a job success.</p> </li> </ul> <p> <b>Third party jobs</b>, which are instances of an action created by a partner action and integrated into AWS CodePipeline. Partner actions are created by members of the AWS Partner Network.</p> <p>You can work with third party jobs by calling:</p> <ul> <li> <p> <a>AcknowledgeThirdPartyJob</a>, which confirms whether a job worker has received the specified job.</p> </li> <li> <p> <a>GetThirdPartyJobDetails</a>, which requests the details of a job for a partner action.</p> </li> <li> <p> <a>PollForThirdPartyJobs</a>, which determines whether there are any jobs to act on. </p> </li> <li> <p> <a>PutThirdPartyJobFailureResult</a>, which provides details of a job failure.</p> </li> <li> <p> <a>PutThirdPartyJobSuccessResult</a>, which provides details of a job success.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codepipeline/>
### Available Operations

* [AcknowledgeJob](#acknowledgejob) - Returns information about a specified job and whether that job has been received by the job worker. Used for custom actions only.
* [AcknowledgeThirdPartyJob](#acknowledgethirdpartyjob) - Confirms a job worker has received the specified job. Used for partner actions only.
* [CreateCustomActionType](#createcustomactiontype) - Creates a new custom action that can be used in all pipelines associated with the AWS account. Only used for custom actions.
* [CreatePipeline](#createpipeline) - <p>Creates a pipeline.</p> <note> <p>In the pipeline structure, you must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>
* [DeleteCustomActionType](#deletecustomactiontype) - <p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action fails after the action is marked for deletion. Used for custom actions only.</p> <important> <p>To re-create a custom action after it has been deleted you must use a string in the version field that has never been used before. This string can be an incremented version number, for example. To restore a deleted custom action, use a JSON file that is identical to the deleted action, including the original string in the version field.</p> </important>
* [DeletePipeline](#deletepipeline) - Deletes the specified pipeline.
* [DeleteWebhook](#deletewebhook) - Deletes a previously created webhook by name. Deleting the webhook stops AWS CodePipeline from starting a pipeline every time an external event occurs. The API returns successfully when trying to delete a webhook that is already deleted. If a deleted webhook is re-created by calling PutWebhook with the same name, it will have a different URL.
* [DeregisterWebhookWithThirdParty](#deregisterwebhookwiththirdparty) - Removes the connection between the webhook that was created by CodePipeline and the external tool with events to be detected. Currently supported only for webhooks that target an action type of GitHub.
* [DisableStageTransition](#disablestagetransition) - Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.
* [EnableStageTransition](#enablestagetransition) - Enables artifacts in a pipeline to transition to a stage in a pipeline.
* [GetActionType](#getactiontype) - Returns information about an action type created for an external provider, where the action is to be used by customers of the external provider. The action can be created with any supported integration model.
* [GetJobDetails](#getjobdetails) - <p>Returns information about a job. Used for custom actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
* [GetPipeline](#getpipeline) - Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with <a>UpdatePipeline</a>.
* [GetPipelineExecution](#getpipelineexecution) - Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.
* [GetPipelineState](#getpipelinestate) - <p>Returns information about the state of a pipeline, including the stages and actions.</p> <note> <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code> fields indicate the source revision information, such as the commit ID, for the current state.</p> </note>
* [GetThirdPartyJobDetails](#getthirdpartyjobdetails) - <p>Requests the details of a job for a third party action. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
* [ListActionExecutions](#listactionexecutions) - Lists the action executions that have occurred in a pipeline.
* [ListActionTypes](#listactiontypes) - Gets a summary of all AWS CodePipeline action types associated with your account.
* [ListPipelineExecutions](#listpipelineexecutions) - Gets a summary of the most recent executions for a pipeline.
* [ListPipelines](#listpipelines) - Gets a summary of all of the pipelines associated with your account.
* [ListTagsForResource](#listtagsforresource) - Gets the set of key-value pairs (metadata) that are used to manage the resource.
* [ListWebhooks](#listwebhooks) - Gets a listing of all the webhooks in this AWS Region for this account. The output lists all webhooks and includes the webhook URL and ARN and the configuration for each webhook.
* [PollForJobs](#pollforjobs) - <p>Returns information about any jobs for AWS CodePipeline to act on. <code>PollForJobs</code> is valid only for action types with "Custom" in the owner field. If the action type contains "AWS" or "ThirdParty" in the owner field, the <code>PollForJobs</code> action returns an error.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
* [PollForThirdPartyJobs](#pollforthirdpartyjobs) - <p>Determines whether there are any third party jobs for a job worker to act on. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts.</p> </important>
* [PutActionRevision](#putactionrevision) - Provides information to AWS CodePipeline about new revisions to a source.
* [PutApprovalResult](#putapprovalresult) - Provides the response to a manual approval request to AWS CodePipeline. Valid responses include Approved and Rejected.
* [PutJobFailureResult](#putjobfailureresult) - Represents the failure of a job as returned to the pipeline by a job worker. Used for custom actions only.
* [PutJobSuccessResult](#putjobsuccessresult) - Represents the success of a job as returned to the pipeline by a job worker. Used for custom actions only.
* [PutThirdPartyJobFailureResult](#putthirdpartyjobfailureresult) - Represents the failure of a third party job as returned to the pipeline by a job worker. Used for partner actions only.
* [PutThirdPartyJobSuccessResult](#putthirdpartyjobsuccessresult) - Represents the success of a third party job as returned to the pipeline by a job worker. Used for partner actions only.
* [PutWebhook](#putwebhook) - Defines a webhook and returns a unique webhook URL generated by CodePipeline. This URL can be supplied to third party source hosting providers to call every time there's a code change. When CodePipeline receives a POST request on this URL, the pipeline defined in the webhook is started as long as the POST request satisfied the authentication and filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty and DeregisterWebhookWithThirdParty APIs can be used to automatically configure supported third parties to call the generated webhook URL.
* [RegisterWebhookWithThirdParty](#registerwebhookwiththirdparty) - Configures a connection between the webhook that was created and the external tool with events to be detected.
* [RetryStageExecution](#retrystageexecution) - Resumes the pipeline execution by retrying the last failed actions in a stage. You can retry a stage immediately if any of the actions in the stage fail. When you retry, all actions that are still in progress continue working, and failed actions are triggered again.
* [StartPipelineExecution](#startpipelineexecution) - Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.
* [StopPipelineExecution](#stoppipelineexecution) - Stops the specified pipeline execution. You choose to either stop the pipeline execution by completing in-progress actions without starting subsequent actions, or by abandoning in-progress actions. While completing or abandoning in-progress actions, the pipeline execution is in a <code>Stopping</code> state. After all in-progress actions are completed or abandoned, the pipeline execution is in a <code>Stopped</code> state.
* [TagResource](#tagresource) - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource. 
* [UntagResource](#untagresource) - Removes tags from an AWS resource.
* [UpdateActionType](#updateactiontype) - Updates an action type that was created with any supported integration model, where the action type is to be used by customers of the action type provider. Use a JSON file with the action definition and <code>UpdateActionType</code> to provide the full structure.
* [UpdatePipeline](#updatepipeline) - Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure and <code>UpdatePipeline</code> to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.

## AcknowledgeJob

Returns information about a specified job and whether that job has been received by the job worker. Used for custom actions only.

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
    res, err := s.SDK.AcknowledgeJob(ctx, operations.AcknowledgeJobRequest{
        AcknowledgeJobInput: shared.AcknowledgeJobInput{
            JobID: "error",
            Nonce: "deserunt",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.AcknowledgeJobXAmzTargetEnumCodePipeline20150709AcknowledgeJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcknowledgeJobOutput != nil {
        // handle response
    }
}
```

## AcknowledgeThirdPartyJob

Confirms a job worker has received the specified job. Used for partner actions only.

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
    res, err := s.SDK.AcknowledgeThirdPartyJob(ctx, operations.AcknowledgeThirdPartyJobRequest{
        AcknowledgeThirdPartyJobInput: shared.AcknowledgeThirdPartyJobInput{
            ClientToken: "suscipit",
            JobID: "molestiae",
            Nonce: "minus",
        },
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.AcknowledgeThirdPartyJobXAmzTargetEnumCodePipeline20150709AcknowledgeThirdPartyJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcknowledgeThirdPartyJobOutput != nil {
        // handle response
    }
}
```

## CreateCustomActionType

Creates a new custom action that can be used in all pipelines associated with the AWS account. Only used for custom actions.

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
    res, err := s.SDK.CreateCustomActionType(ctx, operations.CreateCustomActionTypeRequest{
        CreateCustomActionTypeInput: shared.CreateCustomActionTypeInput{
            Category: shared.ActionCategoryEnumSource,
            ConfigurationProperties: []shared.ActionConfigurationProperty{
                shared.ActionConfigurationProperty{
                    Description: sdk.String("veritatis"),
                    Key: false,
                    Name: "Christopher Hills",
                    Queryable: sdk.Bool(false),
                    Required: false,
                    Secret: false,
                    Type: shared.ActionConfigurationPropertyTypeEnumBoolean.ToPointer(),
                },
                shared.ActionConfigurationProperty{
                    Description: sdk.String("odit"),
                    Key: false,
                    Name: "Wilfred Wolff",
                    Queryable: sdk.Bool(false),
                    Required: false,
                    Secret: false,
                    Type: shared.ActionConfigurationPropertyTypeEnumBoolean.ToPointer(),
                },
            },
            InputArtifactDetails: shared.ArtifactDetails{
                MaximumCount: 461479,
                MinimumCount: 520478,
            },
            OutputArtifactDetails: shared.ArtifactDetails{
                MaximumCount: 780529,
                MinimumCount: 678880,
            },
            Provider: "dicta",
            Settings: &shared.ActionTypeSettings{
                EntityURLTemplate: sdk.String("nam"),
                ExecutionURLTemplate: sdk.String("officia"),
                RevisionURLTemplate: sdk.String("occaecati"),
                ThirdPartyConfigurationURL: sdk.String("fugit"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "hic",
                    Value: "optio",
                },
                shared.Tag{
                    Key: "totam",
                    Value: "beatae",
                },
                shared.Tag{
                    Key: "commodi",
                    Value: "molestiae",
                },
            },
            Version: "modi",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.CreateCustomActionTypeXAmzTargetEnumCodePipeline20150709CreateCustomActionType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCustomActionTypeOutput != nil {
        // handle response
    }
}
```

## CreatePipeline

<p>Creates a pipeline.</p> <note> <p>In the pipeline structure, you must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>

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
    res, err := s.SDK.CreatePipeline(ctx, operations.CreatePipelineRequest{
        CreatePipelineInput: shared.CreatePipelineInput{
            Pipeline: shared.PipelineDeclaration{
                ArtifactStore: &shared.ArtifactStore{
                    EncryptionKey: &shared.EncryptionKey{
                        ID: "05929396-fea7-4596-ab10-faaa2352c595",
                        Type: shared.EncryptionKeyTypeEnumKms,
                    },
                    Location: "minima",
                    Type: shared.ArtifactStoreTypeEnumS3,
                },
                ArtifactStores: map[string]shared.ArtifactStore{
                    "accusantium": shared.ArtifactStore{
                        EncryptionKey: &shared.EncryptionKey{
                            ID: "7aff1a3a-2fa9-4467-b392-51aa52c3f5ad",
                            Type: shared.EncryptionKeyTypeEnumKms,
                        },
                        Location: "aut",
                        Type: shared.ArtifactStoreTypeEnumS3,
                    },
                    "quasi": shared.ArtifactStore{
                        EncryptionKey: &shared.EncryptionKey{
                            ID: "9da1ffe7-8f09-47b0-874f-15471b5e6e13",
                            Type: shared.EncryptionKeyTypeEnumKms,
                        },
                        Location: "quidem",
                        Type: shared.ArtifactStoreTypeEnumS3,
                    },
                    "molestias": shared.ArtifactStore{
                        EncryptionKey: &shared.EncryptionKey{
                            ID: "9d488e1e-91e4-450a-92ab-d44269802d50",
                            Type: shared.EncryptionKeyTypeEnumKms,
                        },
                        Location: "fugit",
                        Type: shared.ArtifactStoreTypeEnumS3,
                    },
                },
                Name: "Marshall Glover",
                RoleArn: "labore",
                Stages: []shared.StageDeclaration{
                    shared.StageDeclaration{
                        Actions: []shared.ActionDeclaration{
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumBuild,
                                    Owner: shared.ActionOwnerEnumCustom,
                                    Provider: "sint",
                                    Version: "aliquid",
                                },
                                Configuration: map[string]string{
                                    "necessitatibus": "sint",
                                    "officia": "dolor",
                                    "debitis": "a",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Arlene Stamm",
                                    },
                                    shared.InputArtifact{
                                        Name: "Valerie Runolfsson",
                                    },
                                    shared.InputArtifact{
                                        Name: "Kayla Thompson",
                                    },
                                },
                                Name: "Sophia Wintheiser",
                                Namespace: sdk.String("nam"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Jaime Will",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Wilma Mosciski",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Marcia Gutkowski",
                                    },
                                },
                                Region: sdk.String("labore"),
                                RoleArn: sdk.String("labore"),
                                RunOrder: sdk.Int64(383462),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumTest,
                                    Owner: shared.ActionOwnerEnumCustom,
                                    Provider: "eum",
                                    Version: "vero",
                                },
                                Configuration: map[string]string{
                                    "architecto": "magnam",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Derrick McLaughlin",
                                    },
                                },
                                Name: "Angie Wisozk",
                                Namespace: sdk.String("eum"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Ms. Fred Hilll",
                                    },
                                },
                                Region: sdk.String("debitis"),
                                RoleArn: sdk.String("eius"),
                                RunOrder: sdk.Int64(806194),
                            },
                        },
                        Blockers: []shared.BlockerDeclaration{
                            shared.BlockerDeclaration{
                                Name: "Dr. Arnold Bradtke",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                            shared.BlockerDeclaration{
                                Name: "Jessie Zulauf",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                            shared.BlockerDeclaration{
                                Name: "Al Bashirian",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                        },
                        Name: "Victor Casper",
                    },
                    shared.StageDeclaration{
                        Actions: []shared.ActionDeclaration{
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumInvoke,
                                    Owner: shared.ActionOwnerEnumThirdParty,
                                    Provider: "excepturi",
                                    Version: "odit",
                                },
                                Configuration: map[string]string{
                                    "accusantium": "ab",
                                    "maiores": "quidem",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Dr. Stacey Reichert",
                                    },
                                    shared.InputArtifact{
                                        Name: "Joseph Steuber DDS",
                                    },
                                },
                                Name: "Mindy Renner",
                                Namespace: sdk.String("quis"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Cynthia Hayes",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Jacqueline Schimmel",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Dean Welch",
                                    },
                                },
                                Region: sdk.String("facilis"),
                                RoleArn: sdk.String("perspiciatis"),
                                RunOrder: sdk.Int64(31838),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumInvoke,
                                    Owner: shared.ActionOwnerEnumAws,
                                    Provider: "blanditiis",
                                    Version: "error",
                                },
                                Configuration: map[string]string{
                                    "occaecati": "rerum",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Merle Gleichner",
                                    },
                                },
                                Name: "Ervin McLaughlin",
                                Namespace: sdk.String("delectus"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Gene Effertz",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Tiffany Welch",
                                    },
                                },
                                Region: sdk.String("voluptate"),
                                RoleArn: sdk.String("dignissimos"),
                                RunOrder: sdk.Int64(970237),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumBuild,
                                    Owner: shared.ActionOwnerEnumCustom,
                                    Provider: "numquam",
                                    Version: "veritatis",
                                },
                                Configuration: map[string]string{
                                    "ipsa": "iure",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Sophia Predovic",
                                    },
                                    shared.InputArtifact{
                                        Name: "Dr. Craig Littel DDS",
                                    },
                                },
                                Name: "Ted Kling",
                                Namespace: sdk.String("omnis"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Emmett Kovacek",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Elbert Gislason I",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Tomas Hammes",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Rene Hane",
                                    },
                                },
                                Region: sdk.String("similique"),
                                RoleArn: sdk.String("alias"),
                                RunOrder: sdk.Int64(872651),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumBuild,
                                    Owner: shared.ActionOwnerEnumAws,
                                    Provider: "vel",
                                    Version: "quod",
                                },
                                Configuration: map[string]string{
                                    "qui": "dolorum",
                                    "a": "esse",
                                    "harum": "iusto",
                                    "ipsum": "quisquam",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Kelli Thompson",
                                    },
                                    shared.InputArtifact{
                                        Name: "Jeannie Leannon MD",
                                    },
                                    shared.InputArtifact{
                                        Name: "Jane Kassulke",
                                    },
                                    shared.InputArtifact{
                                        Name: "Darryl Emard",
                                    },
                                },
                                Name: "Simon Stracke MD",
                                Namespace: sdk.String("totam"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Bonnie Raynor",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Felicia Spencer",
                                    },
                                },
                                Region: sdk.String("fugit"),
                                RoleArn: sdk.String("magni"),
                                RunOrder: sdk.Int64(488056),
                            },
                        },
                        Blockers: []shared.BlockerDeclaration{
                            shared.BlockerDeclaration{
                                Name: "Miss Candice Weimann",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                        },
                        Name: "Carl Turner DDS",
                    },
                    shared.StageDeclaration{
                        Actions: []shared.ActionDeclaration{
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumInvoke,
                                    Owner: shared.ActionOwnerEnumThirdParty,
                                    Provider: "aperiam",
                                    Version: "delectus",
                                },
                                Configuration: map[string]string{
                                    "dolore": "labore",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Ms. Joe Berge",
                                    },
                                },
                                Name: "Jodi Skiles",
                                Namespace: sdk.String("ut"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Alan Bergnaum",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Jan Schaefer",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Tiffany Willms",
                                    },
                                },
                                Region: sdk.String("vero"),
                                RoleArn: sdk.String("tenetur"),
                                RunOrder: sdk.Int64(492268),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumApproval,
                                    Owner: shared.ActionOwnerEnumCustom,
                                    Provider: "quod",
                                    Version: "odio",
                                },
                                Configuration: map[string]string{
                                    "facilis": "vero",
                                    "ducimus": "dolore",
                                    "quibusdam": "illum",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Edmund Ankunding",
                                    },
                                },
                                Name: "Louis Sauer",
                                Namespace: sdk.String("iusto"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Linda Nikolaus",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Judy Keebler",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Mrs. Vicki Langosh",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Rosemary Stoltenberg",
                                    },
                                },
                                Region: sdk.String("nostrum"),
                                RoleArn: sdk.String("sapiente"),
                                RunOrder: sdk.Int64(788873),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumApproval,
                                    Owner: shared.ActionOwnerEnumThirdParty,
                                    Provider: "impedit",
                                    Version: "corporis",
                                },
                                Configuration: map[string]string{
                                    "aliquid": "inventore",
                                    "magnam": "ea",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Kate Cole DVM",
                                    },
                                    shared.InputArtifact{
                                        Name: "Richard Anderson",
                                    },
                                    shared.InputArtifact{
                                        Name: "Mrs. Denise Tillman MD",
                                    },
                                    shared.InputArtifact{
                                        Name: "Clark Franecki",
                                    },
                                },
                                Name: "Clifton Simonis",
                                Namespace: sdk.String("libero"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Carrie Cole IV",
                                    },
                                },
                                Region: sdk.String("magnam"),
                                RoleArn: sdk.String("odio"),
                                RunOrder: sdk.Int64(262118),
                            },
                        },
                        Blockers: []shared.BlockerDeclaration{
                            shared.BlockerDeclaration{
                                Name: "Hilda Paucek",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                            shared.BlockerDeclaration{
                                Name: "Bernard Kerluke",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                        },
                        Name: "Mr. Irma Schaefer",
                    },
                    shared.StageDeclaration{
                        Actions: []shared.ActionDeclaration{
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumBuild,
                                    Owner: shared.ActionOwnerEnumCustom,
                                    Provider: "illum",
                                    Version: "quo",
                                },
                                Configuration: map[string]string{
                                    "eius": "eos",
                                    "voluptas": "ab",
                                    "cupiditate": "consequatur",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Roberto Collier",
                                    },
                                    shared.InputArtifact{
                                        Name: "Sophie Bayer",
                                    },
                                },
                                Name: "Debra Kovacek",
                                Namespace: sdk.String("aliquam"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Leslie Williamson",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Carol Sawayn",
                                    },
                                },
                                Region: sdk.String("praesentium"),
                                RoleArn: sdk.String("consequuntur"),
                                RunOrder: sdk.Int64(536178),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumSource,
                                    Owner: shared.ActionOwnerEnumCustom,
                                    Provider: "mollitia",
                                    Version: "incidunt",
                                },
                                Configuration: map[string]string{
                                    "explicabo": "minima",
                                    "nisi": "fugit",
                                    "sapiente": "consequuntur",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Kerry Mayert IV",
                                    },
                                },
                                Name: "Sheldon Boehm",
                                Namespace: sdk.String("nam"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Frances Turner",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Luz McClure",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Mark Nicolas",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Carlos Altenwerth",
                                    },
                                },
                                Region: sdk.String("sapiente"),
                                RoleArn: sdk.String("consectetur"),
                                RunOrder: sdk.Int64(458139),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumTest,
                                    Owner: shared.ActionOwnerEnumThirdParty,
                                    Provider: "a",
                                    Version: "nulla",
                                },
                                Configuration: map[string]string{
                                    "esse": "quasi",
                                    "a": "error",
                                    "sint": "pariatur",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Laverne Zemlak Sr.",
                                    },
                                    shared.InputArtifact{
                                        Name: "Hattie Nader",
                                    },
                                    shared.InputArtifact{
                                        Name: "Lila Kassulke",
                                    },
                                    shared.InputArtifact{
                                        Name: "Mrs. Gilberto Roberts",
                                    },
                                },
                                Name: "Marion Kihn",
                                Namespace: sdk.String("aut"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Rosemarie Jacobs",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Roger Monahan PhD",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Allison Bednar I",
                                    },
                                },
                                Region: sdk.String("adipisci"),
                                RoleArn: sdk.String("iste"),
                                RunOrder: sdk.Int64(839513),
                            },
                        },
                        Blockers: []shared.BlockerDeclaration{
                            shared.BlockerDeclaration{
                                Name: "Charles Langworth",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                        },
                        Name: "Mrs. Priscilla Fritsch",
                    },
                },
                Version: sdk.Int64(253191),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "explicabo",
                    Value: "voluptas",
                },
                shared.Tag{
                    Key: "aut",
                    Value: "dignissimos",
                },
                shared.Tag{
                    Key: "dicta",
                    Value: "maiores",
                },
                shared.Tag{
                    Key: "natus",
                    Value: "velit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.CreatePipelineXAmzTargetEnumCodePipeline20150709CreatePipeline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePipelineOutput != nil {
        // handle response
    }
}
```

## DeleteCustomActionType

<p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action fails after the action is marked for deletion. Used for custom actions only.</p> <important> <p>To re-create a custom action after it has been deleted you must use a string in the version field that has never been used before. This string can be an incremented version number, for example. To restore a deleted custom action, use a JSON file that is identical to the deleted action, including the original string in the version field.</p> </important>

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
    res, err := s.SDK.DeleteCustomActionType(ctx, operations.DeleteCustomActionTypeRequest{
        DeleteCustomActionTypeInput: shared.DeleteCustomActionTypeInput{
            Category: shared.ActionCategoryEnumInvoke,
            Provider: "officia",
            Version: "maxime",
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.DeleteCustomActionTypeXAmzTargetEnumCodePipeline20150709DeleteCustomActionType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePipeline

Deletes the specified pipeline.

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
    res, err := s.SDK.DeletePipeline(ctx, operations.DeletePipelineRequest{
        DeletePipelineInput: shared.DeletePipelineInput{
            Name: "Francisco Bernier",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.DeletePipelineXAmzTargetEnumCodePipeline20150709DeletePipeline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWebhook

Deletes a previously created webhook by name. Deleting the webhook stops AWS CodePipeline from starting a pipeline every time an external event occurs. The API returns successfully when trying to delete a webhook that is already deleted. If a deleted webhook is re-created by calling PutWebhook with the same name, it will have a different URL.

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
    res, err := s.SDK.DeleteWebhook(ctx, operations.DeleteWebhookRequest{
        DeleteWebhookInput: shared.DeleteWebhookInput{
            Name: "Chester Kuphal",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.DeleteWebhookXAmzTargetEnumCodePipeline20150709DeleteWebhook,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWebhookOutput != nil {
        // handle response
    }
}
```

## DeregisterWebhookWithThirdParty

Removes the connection between the webhook that was created by CodePipeline and the external tool with events to be detected. Currently supported only for webhooks that target an action type of GitHub.

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
    res, err := s.SDK.DeregisterWebhookWithThirdParty(ctx, operations.DeregisterWebhookWithThirdPartyRequest{
        DeregisterWebhookWithThirdPartyInput: shared.DeregisterWebhookWithThirdPartyInput{
            WebhookName: sdk.String("reiciendis"),
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.DeregisterWebhookWithThirdPartyXAmzTargetEnumCodePipeline20150709DeregisterWebhookWithThirdParty,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterWebhookWithThirdPartyOutput != nil {
        // handle response
    }
}
```

## DisableStageTransition

Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.

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
    res, err := s.SDK.DisableStageTransition(ctx, operations.DisableStageTransitionRequest{
        DisableStageTransitionInput: shared.DisableStageTransitionInput{
            PipelineName: "in",
            Reason: "exercitationem",
            StageName: "earum",
            TransitionType: shared.StageTransitionTypeEnumOutbound,
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.DisableStageTransitionXAmzTargetEnumCodePipeline20150709DisableStageTransition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableStageTransition

Enables artifacts in a pipeline to transition to a stage in a pipeline.

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
    res, err := s.SDK.EnableStageTransition(ctx, operations.EnableStageTransitionRequest{
        EnableStageTransitionInput: shared.EnableStageTransitionInput{
            PipelineName: "dolore",
            StageName: "sunt",
            TransitionType: shared.StageTransitionTypeEnumOutbound,
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.EnableStageTransitionXAmzTargetEnumCodePipeline20150709EnableStageTransition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionType

Returns information about an action type created for an external provider, where the action is to be used by customers of the external provider. The action can be created with any supported integration model.

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
    res, err := s.SDK.GetActionType(ctx, operations.GetActionTypeRequest{
        GetActionTypeInput: shared.GetActionTypeInput{
            Category: shared.ActionCategoryEnumBuild,
            Owner: "corporis",
            Provider: "harum",
            Version: "laboriosam",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.GetActionTypeXAmzTargetEnumCodePipeline20150709GetActionType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetActionTypeOutput != nil {
        // handle response
    }
}
```

## GetJobDetails

<p>Returns information about a job. Used for custom actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>

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
    res, err := s.SDK.GetJobDetails(ctx, operations.GetJobDetailsRequest{
        GetJobDetailsInput: shared.GetJobDetailsInput{
            JobID: "aspernatur",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.GetJobDetailsXAmzTargetEnumCodePipeline20150709GetJobDetails,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetJobDetailsOutput != nil {
        // handle response
    }
}
```

## GetPipeline

Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with <a>UpdatePipeline</a>.

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
    res, err := s.SDK.GetPipeline(ctx, operations.GetPipelineRequest{
        GetPipelineInput: shared.GetPipelineInput{
            Name: "Ernest Labadie",
            Version: sdk.Int64(304468),
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.GetPipelineXAmzTargetEnumCodePipeline20150709GetPipeline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPipelineOutput != nil {
        // handle response
    }
}
```

## GetPipelineExecution

Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.

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
    res, err := s.SDK.GetPipelineExecution(ctx, operations.GetPipelineExecutionRequest{
        GetPipelineExecutionInput: shared.GetPipelineExecutionInput{
            PipelineExecutionID: "hic",
            PipelineName: "nesciunt",
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.GetPipelineExecutionXAmzTargetEnumCodePipeline20150709GetPipelineExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPipelineExecutionOutput != nil {
        // handle response
    }
}
```

## GetPipelineState

<p>Returns information about the state of a pipeline, including the stages and actions.</p> <note> <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code> fields indicate the source revision information, such as the commit ID, for the current state.</p> </note>

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
    res, err := s.SDK.GetPipelineState(ctx, operations.GetPipelineStateRequest{
        GetPipelineStateInput: shared.GetPipelineStateInput{
            Name: "Luz Cormier",
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.GetPipelineStateXAmzTargetEnumCodePipeline20150709GetPipelineState,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPipelineStateOutput != nil {
        // handle response
    }
}
```

## GetThirdPartyJobDetails

<p>Requests the details of a job for a third party action. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>

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
    res, err := s.SDK.GetThirdPartyJobDetails(ctx, operations.GetThirdPartyJobDetailsRequest{
        GetThirdPartyJobDetailsInput: shared.GetThirdPartyJobDetailsInput{
            ClientToken: "laborum",
            JobID: "sed",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("unde"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.GetThirdPartyJobDetailsXAmzTargetEnumCodePipeline20150709GetThirdPartyJobDetails,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetThirdPartyJobDetailsOutput != nil {
        // handle response
    }
}
```

## ListActionExecutions

Lists the action executions that have occurred in a pipeline.

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
    res, err := s.SDK.ListActionExecutions(ctx, operations.ListActionExecutionsRequest{
        ListActionExecutionsInput: shared.ListActionExecutionsInput{
            Filter: &shared.ActionExecutionFilter{
                PipelineExecutionID: sdk.String("suscipit"),
            },
            MaxResults: sdk.Int64(960257),
            NextToken: sdk.String("debitis"),
            PipelineName: "illo",
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.ListActionExecutionsXAmzTargetEnumCodePipeline20150709ListActionExecutions,
        MaxResults: sdk.String("eius"),
        NextToken: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActionExecutionsOutput != nil {
        // handle response
    }
}
```

## ListActionTypes

Gets a summary of all AWS CodePipeline action types associated with your account.

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
    res, err := s.SDK.ListActionTypes(ctx, operations.ListActionTypesRequest{
        ListActionTypesInput: shared.ListActionTypesInput{
            ActionOwnerFilter: shared.ActionOwnerEnumAws.ToPointer(),
            NextToken: sdk.String("ea"),
            RegionFilter: sdk.String("occaecati"),
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("ex"),
        XAmzTarget: operations.ListActionTypesXAmzTargetEnumCodePipeline20150709ListActionTypes,
        NextToken: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActionTypesOutput != nil {
        // handle response
    }
}
```

## ListPipelineExecutions

Gets a summary of the most recent executions for a pipeline.

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
    res, err := s.SDK.ListPipelineExecutions(ctx, operations.ListPipelineExecutionsRequest{
        ListPipelineExecutionsInput: shared.ListPipelineExecutionsInput{
            MaxResults: sdk.Int64(248413),
            NextToken: sdk.String("officiis"),
            PipelineName: "praesentium",
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzTarget: operations.ListPipelineExecutionsXAmzTargetEnumCodePipeline20150709ListPipelineExecutions,
        MaxResults: sdk.String("nobis"),
        NextToken: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPipelineExecutionsOutput != nil {
        // handle response
    }
}
```

## ListPipelines

Gets a summary of all of the pipelines associated with your account.

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
    res, err := s.SDK.ListPipelines(ctx, operations.ListPipelinesRequest{
        ListPipelinesInput: shared.ListPipelinesInput{
            MaxResults: sdk.Int64(333507),
            NextToken: sdk.String("minima"),
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.ListPipelinesXAmzTargetEnumCodePipeline20150709ListPipelines,
        MaxResults: sdk.String("veniam"),
        NextToken: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPipelinesOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Gets the set of key-value pairs (metadata) that are used to manage the resource.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceInput: shared.ListTagsForResourceInput{
            MaxResults: sdk.Int64(889234),
            NextToken: sdk.String("beatae"),
            ResourceArn: "laudantium",
        },
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumCodePipeline20150709ListTagsForResource,
        MaxResults: sdk.String("hic"),
        NextToken: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## ListWebhooks

Gets a listing of all the webhooks in this AWS Region for this account. The output lists all webhooks and includes the webhook URL and ARN and the configuration for each webhook.

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
    res, err := s.SDK.ListWebhooks(ctx, operations.ListWebhooksRequest{
        ListWebhooksInput: shared.ListWebhooksInput{
            MaxResults: sdk.Int64(892863),
            NextToken: sdk.String("neque"),
        },
        MaxResults: sdk.String("dolorum"),
        NextToken: sdk.String("nostrum"),
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.ListWebhooksXAmzTargetEnumCodePipeline20150709ListWebhooks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWebhooksOutput != nil {
        // handle response
    }
}
```

## PollForJobs

<p>Returns information about any jobs for AWS CodePipeline to act on. <code>PollForJobs</code> is valid only for action types with "Custom" in the owner field. If the action type contains "AWS" or "ThirdParty" in the owner field, the <code>PollForJobs</code> action returns an error.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>

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
    res, err := s.SDK.PollForJobs(ctx, operations.PollForJobsRequest{
        PollForJobsInput: shared.PollForJobsInput{
            ActionTypeID: shared.ActionTypeID{
                Category: shared.ActionCategoryEnumBuild,
                Owner: shared.ActionOwnerEnumCustom,
                Provider: "voluptatem",
                Version: "culpa",
            },
            MaxBatchSize: sdk.Int64(710337),
            QueryParam: map[string]string{
                "consequatur": "esse",
                "ipsam": "sit",
            },
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("ex"),
        XAmzTarget: operations.PollForJobsXAmzTargetEnumCodePipeline20150709PollForJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PollForJobsOutput != nil {
        // handle response
    }
}
```

## PollForThirdPartyJobs

<p>Determines whether there are any third party jobs for a job worker to act on. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts.</p> </important>

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
    res, err := s.SDK.PollForThirdPartyJobs(ctx, operations.PollForThirdPartyJobsRequest{
        PollForThirdPartyJobsInput: shared.PollForThirdPartyJobsInput{
            ActionTypeID: shared.ActionTypeID{
                Category: shared.ActionCategoryEnumSource,
                Owner: shared.ActionOwnerEnumAws,
                Provider: "vel",
                Version: "nostrum",
            },
            MaxBatchSize: sdk.Int64(906172),
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.PollForThirdPartyJobsXAmzTargetEnumCodePipeline20150709PollForThirdPartyJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PollForThirdPartyJobsOutput != nil {
        // handle response
    }
}
```

## PutActionRevision

Provides information to AWS CodePipeline about new revisions to a source.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutActionRevision(ctx, operations.PutActionRevisionRequest{
        PutActionRevisionInput: shared.PutActionRevisionInput{
            ActionName: "architecto",
            ActionRevision: shared.ActionRevision{
                Created: types.MustTimeFromString("2022-06-03T11:07:35.218Z"),
                RevisionChangeID: "quidem",
                RevisionID: "atque",
            },
            PipelineName: "laborum",
            StageName: "nam",
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("unde"),
        XAmzTarget: operations.PutActionRevisionXAmzTargetEnumCodePipeline20150709PutActionRevision,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutActionRevisionOutput != nil {
        // handle response
    }
}
```

## PutApprovalResult

Provides the response to a manual approval request to AWS CodePipeline. Valid responses include Approved and Rejected.

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
    res, err := s.SDK.PutApprovalResult(ctx, operations.PutApprovalResultRequest{
        PutApprovalResultInput: shared.PutApprovalResultInput{
            ActionName: "reiciendis",
            PipelineName: "provident",
            Result: shared.ApprovalResult{
                Status: shared.ApprovalStatusEnumRejected,
                Summary: "delectus",
            },
            StageName: "voluptates",
            Token: "perferendis",
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.PutApprovalResultXAmzTargetEnumCodePipeline20150709PutApprovalResult,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutApprovalResultOutput != nil {
        // handle response
    }
}
```

## PutJobFailureResult

Represents the failure of a job as returned to the pipeline by a job worker. Used for custom actions only.

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
    res, err := s.SDK.PutJobFailureResult(ctx, operations.PutJobFailureResultRequest{
        PutJobFailureResultInput: shared.PutJobFailureResultInput{
            FailureDetails: shared.FailureDetails{
                ExternalExecutionID: sdk.String("veniam"),
                Message: "voluptatem",
                Type: shared.FailureTypeEnumRevisionUnavailable,
            },
            JobID: "repudiandae",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.PutJobFailureResultXAmzTargetEnumCodePipeline20150709PutJobFailureResult,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutJobSuccessResult

Represents the success of a job as returned to the pipeline by a job worker. Used for custom actions only.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutJobSuccessResult(ctx, operations.PutJobSuccessResultRequest{
        PutJobSuccessResultInput: shared.PutJobSuccessResultInput{
            ContinuationToken: sdk.String("maxime"),
            CurrentRevision: &shared.CurrentRevision{
                ChangeIdentifier: "et",
                Created: types.MustTimeFromString("2022-10-09T20:49:35.642Z"),
                Revision: "assumenda",
                RevisionSummary: sdk.String("ea"),
            },
            ExecutionDetails: &shared.ExecutionDetails{
                ExternalExecutionID: sdk.String("atque"),
                PercentComplete: sdk.Int64(623295),
                Summary: sdk.String("officiis"),
            },
            JobID: "officiis",
            OutputVariables: map[string]string{
                "natus": "minima",
                "aspernatur": "ex",
                "maiores": "corrupti",
                "at": "error",
            },
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.PutJobSuccessResultXAmzTargetEnumCodePipeline20150709PutJobSuccessResult,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutThirdPartyJobFailureResult

Represents the failure of a third party job as returned to the pipeline by a job worker. Used for partner actions only.

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
    res, err := s.SDK.PutThirdPartyJobFailureResult(ctx, operations.PutThirdPartyJobFailureResultRequest{
        PutThirdPartyJobFailureResultInput: shared.PutThirdPartyJobFailureResultInput{
            ClientToken: "dolorum",
            FailureDetails: shared.FailureDetails{
                ExternalExecutionID: sdk.String("repellendus"),
                Message: "labore",
                Type: shared.FailureTypeEnumSystemUnavailable,
            },
            JobID: "doloremque",
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzTarget: operations.PutThirdPartyJobFailureResultXAmzTargetEnumCodePipeline20150709PutThirdPartyJobFailureResult,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutThirdPartyJobSuccessResult

Represents the success of a third party job as returned to the pipeline by a job worker. Used for partner actions only.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutThirdPartyJobSuccessResult(ctx, operations.PutThirdPartyJobSuccessResultRequest{
        PutThirdPartyJobSuccessResultInput: shared.PutThirdPartyJobSuccessResultInput{
            ClientToken: "velit",
            ContinuationToken: sdk.String("a"),
            CurrentRevision: &shared.CurrentRevision{
                ChangeIdentifier: "molestias",
                Created: types.MustTimeFromString("2022-02-04T04:20:12.809Z"),
                Revision: "consequuntur",
                RevisionSummary: sdk.String("occaecati"),
            },
            ExecutionDetails: &shared.ExecutionDetails{
                ExternalExecutionID: sdk.String("officiis"),
                PercentComplete: sdk.Int64(597937),
                Summary: sdk.String("in"),
            },
            JobID: "adipisci",
        },
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
        XAmzTarget: operations.PutThirdPartyJobSuccessResultXAmzTargetEnumCodePipeline20150709PutThirdPartyJobSuccessResult,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutWebhook

Defines a webhook and returns a unique webhook URL generated by CodePipeline. This URL can be supplied to third party source hosting providers to call every time there's a code change. When CodePipeline receives a POST request on this URL, the pipeline defined in the webhook is started as long as the POST request satisfied the authentication and filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty and DeregisterWebhookWithThirdParty APIs can be used to automatically configure supported third parties to call the generated webhook URL.

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
    res, err := s.SDK.PutWebhook(ctx, operations.PutWebhookRequest{
        PutWebhookInput: shared.PutWebhookInput{
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "illo",
                    Value: "corporis",
                },
                shared.Tag{
                    Key: "quidem",
                    Value: "eveniet",
                },
                shared.Tag{
                    Key: "non",
                    Value: "vero",
                },
            },
            Webhook: shared.WebhookDefinition{
                Authentication: shared.WebhookAuthenticationTypeEnumGithubHmac,
                AuthenticationConfiguration: shared.WebhookAuthConfiguration{
                    AllowedIPRange: sdk.String("iure"),
                    SecretToken: sdk.String("ipsa"),
                },
                Filters: []shared.WebhookFilterRule{
                    shared.WebhookFilterRule{
                        JSONPath: "quae",
                        MatchEquals: sdk.String("molestiae"),
                    },
                    shared.WebhookFilterRule{
                        JSONPath: "eveniet",
                        MatchEquals: sdk.String("qui"),
                    },
                    shared.WebhookFilterRule{
                        JSONPath: "cum",
                        MatchEquals: sdk.String("iure"),
                    },
                },
                Name: "Sean Pacocha",
                TargetAction: "rem",
                TargetPipeline: "aliquam",
            },
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.PutWebhookXAmzTargetEnumCodePipeline20150709PutWebhook,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutWebhookOutput != nil {
        // handle response
    }
}
```

## RegisterWebhookWithThirdParty

Configures a connection between the webhook that was created and the external tool with events to be detected.

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
    res, err := s.SDK.RegisterWebhookWithThirdParty(ctx, operations.RegisterWebhookWithThirdPartyRequest{
        RegisterWebhookWithThirdPartyInput: shared.RegisterWebhookWithThirdPartyInput{
            WebhookName: sdk.String("voluptas"),
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.RegisterWebhookWithThirdPartyXAmzTargetEnumCodePipeline20150709RegisterWebhookWithThirdParty,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterWebhookWithThirdPartyOutput != nil {
        // handle response
    }
}
```

## RetryStageExecution

Resumes the pipeline execution by retrying the last failed actions in a stage. You can retry a stage immediately if any of the actions in the stage fail. When you retry, all actions that are still in progress continue working, and failed actions are triggered again.

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
    res, err := s.SDK.RetryStageExecution(ctx, operations.RetryStageExecutionRequest{
        RetryStageExecutionInput: shared.RetryStageExecutionInput{
            PipelineExecutionID: "dolorum",
            PipelineName: "nesciunt",
            RetryMode: shared.StageRetryModeEnumFailedActions,
            StageName: "quae",
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.RetryStageExecutionXAmzTargetEnumCodePipeline20150709RetryStageExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetryStageExecutionOutput != nil {
        // handle response
    }
}
```

## StartPipelineExecution

Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.

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
    res, err := s.SDK.StartPipelineExecution(ctx, operations.StartPipelineExecutionRequest{
        StartPipelineExecutionInput: shared.StartPipelineExecutionInput{
            ClientRequestToken: sdk.String("adipisci"),
            Name: "Armando Kemmer",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.StartPipelineExecutionXAmzTargetEnumCodePipeline20150709StartPipelineExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartPipelineExecutionOutput != nil {
        // handle response
    }
}
```

## StopPipelineExecution

Stops the specified pipeline execution. You choose to either stop the pipeline execution by completing in-progress actions without starting subsequent actions, or by abandoning in-progress actions. While completing or abandoning in-progress actions, the pipeline execution is in a <code>Stopping</code> state. After all in-progress actions are completed or abandoned, the pipeline execution is in a <code>Stopped</code> state.

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
    res, err := s.SDK.StopPipelineExecution(ctx, operations.StopPipelineExecutionRequest{
        StopPipelineExecutionInput: shared.StopPipelineExecutionInput{
            Abandon: sdk.Bool(false),
            PipelineExecutionID: "ullam",
            PipelineName: "quasi",
            Reason: sdk.String("animi"),
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.StopPipelineExecutionXAmzTargetEnumCodePipeline20150709StopPipelineExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopPipelineExecutionOutput != nil {
        // handle response
    }
}
```

## TagResource

Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource. 

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceInput: shared.TagResourceInput{
            ResourceArn: "accusantium",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "doloribus",
                    Value: "ullam",
                },
                shared.Tag{
                    Key: "in",
                    Value: "nam",
                },
                shared.Tag{
                    Key: "earum",
                    Value: "officia",
                },
                shared.Tag{
                    Key: "laborum",
                    Value: "placeat",
                },
            },
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("vitae"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumCodePipeline20150709TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceOutput != nil {
        // handle response
    }
}
```

## UntagResource

Removes tags from an AWS resource.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceInput: shared.UntagResourceInput{
            ResourceArn: "rerum",
            TagKeys: []string{
                "quis",
                "inventore",
            },
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumCodePipeline20150709UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceOutput != nil {
        // handle response
    }
}
```

## UpdateActionType

Updates an action type that was created with any supported integration model, where the action type is to be used by customers of the action type provider. Use a JSON file with the action definition and <code>UpdateActionType</code> to provide the full structure.

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
    res, err := s.SDK.UpdateActionType(ctx, operations.UpdateActionTypeRequest{
        UpdateActionTypeInput: shared.UpdateActionTypeInput{
            ActionType: shared.ActionTypeDeclaration{
                Description: sdk.String("eius"),
                Executor: shared.ActionTypeExecutor{
                    Configuration: shared.ExecutorConfiguration{
                        JobWorkerExecutorConfiguration: &shared.JobWorkerExecutorConfiguration{
                            PollingAccounts: []string{
                                "at",
                                "impedit",
                                "eos",
                            },
                            PollingServicePrincipals: []string{
                                "eum",
                                "dicta",
                                "minima",
                                "beatae",
                            },
                        },
                        LambdaExecutorConfiguration: &shared.LambdaExecutorConfiguration{
                            LambdaFunctionArn: "cupiditate",
                        },
                    },
                    JobTimeout: sdk.Int64(589695),
                    PolicyStatementsTemplate: sdk.String("earum"),
                    Type: shared.ExecutorTypeEnumLambda,
                },
                ID: shared.ActionTypeIdentifier{
                    Category: shared.ActionCategoryEnumApproval,
                    Owner: "illum",
                    Provider: "eaque",
                    Version: "earum",
                },
                InputArtifactDetails: shared.ActionTypeArtifactDetails{
                    MaximumCount: 596211,
                    MinimumCount: 983427,
                },
                OutputArtifactDetails: shared.ActionTypeArtifactDetails{
                    MaximumCount: 891801,
                    MinimumCount: 399802,
                },
                Permissions: &shared.ActionTypePermissions{
                    AllowedAccounts: []string{
                        "suscipit",
                        "dolorem",
                        "fugit",
                        "cumque",
                    },
                },
                Properties: sdk.String("fuga"),
                Urls: &shared.ActionTypeUrls{
                    ConfigurationURL: sdk.String("ratione"),
                    EntityURLTemplate: sdk.String("animi"),
                    ExecutionURLTemplate: sdk.String("necessitatibus"),
                    RevisionURLTemplate: sdk.String("nulla"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.UpdateActionTypeXAmzTargetEnumCodePipeline20150709UpdateActionType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdatePipeline

Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure and <code>UpdatePipeline</code> to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.

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
    res, err := s.SDK.UpdatePipeline(ctx, operations.UpdatePipelineRequest{
        UpdatePipelineInput: shared.UpdatePipelineInput{
            Pipeline: shared.PipelineDeclaration{
                ArtifactStore: &shared.ArtifactStore{
                    EncryptionKey: &shared.EncryptionKey{
                        ID: "312fde04-7717-478f-b61d-017476360a15",
                        Type: shared.EncryptionKeyTypeEnumKms,
                    },
                    Location: "fugiat",
                    Type: shared.ArtifactStoreTypeEnumS3,
                },
                ArtifactStores: map[string]shared.ArtifactStore{
                    "aliquid": shared.ArtifactStore{
                        EncryptionKey: &shared.EncryptionKey{
                            ID: "a660659a-1ade-4aab-9851-d6c645b08b61",
                            Type: shared.EncryptionKeyTypeEnumKms,
                        },
                        Location: "voluptatum",
                        Type: shared.ArtifactStoreTypeEnumS3,
                    },
                    "omnis": shared.ArtifactStore{
                        EncryptionKey: &shared.EncryptionKey{
                            ID: "1baa0fe1-ade0-408e-af8c-5f350d8cdb5a",
                            Type: shared.EncryptionKeyTypeEnumKms,
                        },
                        Location: "dolor",
                        Type: shared.ArtifactStoreTypeEnumS3,
                    },
                    "aliquam": shared.ArtifactStore{
                        EncryptionKey: &shared.EncryptionKey{
                            ID: "18143010-4218-413d-9208-ece7e253b668",
                            Type: shared.EncryptionKeyTypeEnumKms,
                        },
                        Location: "magnam",
                        Type: shared.ArtifactStoreTypeEnumS3,
                    },
                },
                Name: "Kathleen Sauer",
                RoleArn: "laboriosam",
                Stages: []shared.StageDeclaration{
                    shared.StageDeclaration{
                        Actions: []shared.ActionDeclaration{
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumSource,
                                    Owner: shared.ActionOwnerEnumThirdParty,
                                    Provider: "necessitatibus",
                                    Version: "quasi",
                                },
                                Configuration: map[string]string{
                                    "at": "vero",
                                    "est": "harum",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Phil Rowe",
                                    },
                                },
                                Name: "Vickie Nitzsche",
                                Namespace: sdk.String("nemo"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Janice Kunze",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Randall Boyle",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Elsie Cronin V",
                                    },
                                },
                                Region: sdk.String("reiciendis"),
                                RoleArn: sdk.String("soluta"),
                                RunOrder: sdk.Int64(3860),
                            },
                        },
                        Blockers: []shared.BlockerDeclaration{
                            shared.BlockerDeclaration{
                                Name: "Kristina Moore MD",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                            shared.BlockerDeclaration{
                                Name: "Jan Reichel",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                            shared.BlockerDeclaration{
                                Name: "Maxine Schmitt",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                        },
                        Name: "Leslie Waters",
                    },
                    shared.StageDeclaration{
                        Actions: []shared.ActionDeclaration{
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumBuild,
                                    Owner: shared.ActionOwnerEnumCustom,
                                    Provider: "vero",
                                    Version: "voluptatem",
                                },
                                Configuration: map[string]string{
                                    "vel": "alias",
                                    "quasi": "non",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Bobbie Stokes",
                                    },
                                    shared.InputArtifact{
                                        Name: "Melinda Orn",
                                    },
                                    shared.InputArtifact{
                                        Name: "Garrett Welch",
                                    },
                                    shared.InputArtifact{
                                        Name: "Loretta Tremblay DDS",
                                    },
                                },
                                Name: "Pablo Feeney",
                                Namespace: sdk.String("ipsum"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Shelia Walker",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Colleen Dickinson",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Casey Sporer",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Cecil Gutkowski DDS",
                                    },
                                },
                                Region: sdk.String("libero"),
                                RoleArn: sdk.String("architecto"),
                                RunOrder: sdk.Int64(975425),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumSource,
                                    Owner: shared.ActionOwnerEnumCustom,
                                    Provider: "aliquam",
                                    Version: "velit",
                                },
                                Configuration: map[string]string{
                                    "accusantium": "vel",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Leigh Mante",
                                    },
                                    shared.InputArtifact{
                                        Name: "Miss Katrina Weber",
                                    },
                                },
                                Name: "Bradford Abernathy",
                                Namespace: sdk.String("velit"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Mr. Cindy Kub MD",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Angel Pouros",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Freddie Quitzon",
                                    },
                                },
                                Region: sdk.String("voluptate"),
                                RoleArn: sdk.String("ullam"),
                                RunOrder: sdk.Int64(600193),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumApproval,
                                    Owner: shared.ActionOwnerEnumThirdParty,
                                    Provider: "impedit",
                                    Version: "ipsam",
                                },
                                Configuration: map[string]string{
                                    "est": "error",
                                    "esse": "labore",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Mrs. Glenn Bruen",
                                    },
                                },
                                Name: "Margarita Jacobson",
                                Namespace: sdk.String("libero"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Mr. Lonnie Considine",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Amy Gleason",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Douglas Emard",
                                    },
                                },
                                Region: sdk.String("distinctio"),
                                RoleArn: sdk.String("maxime"),
                                RunOrder: sdk.Int64(157222),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumSource,
                                    Owner: shared.ActionOwnerEnumThirdParty,
                                    Provider: "omnis",
                                    Version: "libero",
                                },
                                Configuration: map[string]string{
                                    "id": "libero",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Ms. Morris Schulist DVM",
                                    },
                                    shared.InputArtifact{
                                        Name: "Deborah Larson",
                                    },
                                    shared.InputArtifact{
                                        Name: "Kenneth Johnson",
                                    },
                                    shared.InputArtifact{
                                        Name: "Albert Ortiz",
                                    },
                                },
                                Name: "Daisy Tillman",
                                Namespace: sdk.String("sint"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Brittany Prosacco",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Boyd Rippin Sr.",
                                    },
                                },
                                Region: sdk.String("quidem"),
                                RoleArn: sdk.String("fuga"),
                                RunOrder: sdk.Int64(919508),
                            },
                        },
                        Blockers: []shared.BlockerDeclaration{
                            shared.BlockerDeclaration{
                                Name: "Erick Dare",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                        },
                        Name: "Fred Champlin",
                    },
                    shared.StageDeclaration{
                        Actions: []shared.ActionDeclaration{
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumBuild,
                                    Owner: shared.ActionOwnerEnumCustom,
                                    Provider: "similique",
                                    Version: "ut",
                                },
                                Configuration: map[string]string{
                                    "quis": "beatae",
                                    "unde": "molestiae",
                                    "delectus": "cupiditate",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Carrie Douglas",
                                    },
                                },
                                Name: "Kara Tromp",
                                Namespace: sdk.String("expedita"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Warren Schowalter",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Sadie Kemmer",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Tasha Wolff DDS",
                                    },
                                },
                                Region: sdk.String("ratione"),
                                RoleArn: sdk.String("labore"),
                                RunOrder: sdk.Int64(520875),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumTest,
                                    Owner: shared.ActionOwnerEnumThirdParty,
                                    Provider: "quo",
                                    Version: "velit",
                                },
                                Configuration: map[string]string{
                                    "fuga": "nostrum",
                                    "est": "impedit",
                                    "delectus": "tempore",
                                    "vero": "odit",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Ms. Corey Kiehn",
                                    },
                                    shared.InputArtifact{
                                        Name: "Dora Mante",
                                    },
                                    shared.InputArtifact{
                                        Name: "Jo Kling",
                                    },
                                    shared.InputArtifact{
                                        Name: "Benny Jacobs",
                                    },
                                },
                                Name: "Clark Predovic",
                                Namespace: sdk.String("dolorem"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Bobbie Terry",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Willie Wehner",
                                    },
                                },
                                Region: sdk.String("dolores"),
                                RoleArn: sdk.String("nam"),
                                RunOrder: sdk.Int64(115898),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumSource,
                                    Owner: shared.ActionOwnerEnumCustom,
                                    Provider: "nobis",
                                    Version: "ipsa",
                                },
                                Configuration: map[string]string{
                                    "maiores": "veritatis",
                                    "quasi": "laboriosam",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Andy Mayert",
                                    },
                                    shared.InputArtifact{
                                        Name: "Nettie Rosenbaum",
                                    },
                                    shared.InputArtifact{
                                        Name: "Matt Macejkovic",
                                    },
                                    shared.InputArtifact{
                                        Name: "Ms. Jessica Turcotte",
                                    },
                                },
                                Name: "Randolph Reinger DVM",
                                Namespace: sdk.String("impedit"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Sylvia Turner II",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Jeannette Bradtke",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Rufus Friesen",
                                    },
                                },
                                Region: sdk.String("sed"),
                                RoleArn: sdk.String("asperiores"),
                                RunOrder: sdk.Int64(330267),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumSource,
                                    Owner: shared.ActionOwnerEnumCustom,
                                    Provider: "laudantium",
                                    Version: "odit",
                                },
                                Configuration: map[string]string{
                                    "amet": "exercitationem",
                                    "ab": "velit",
                                    "facilis": "tempore",
                                    "nisi": "voluptatibus",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Preston Huel",
                                    },
                                    shared.InputArtifact{
                                        Name: "Roosevelt Schultz",
                                    },
                                },
                                Name: "Shari Wiza",
                                Namespace: sdk.String("labore"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Bessie Hegmann",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Jordan Romaguera",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Miss Kelly Ernser",
                                    },
                                },
                                Region: sdk.String("vitae"),
                                RoleArn: sdk.String("dignissimos"),
                                RunOrder: sdk.Int64(458970),
                            },
                        },
                        Blockers: []shared.BlockerDeclaration{
                            shared.BlockerDeclaration{
                                Name: "Nicole Halvorson",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                            shared.BlockerDeclaration{
                                Name: "Mrs. Pam Bins",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                            shared.BlockerDeclaration{
                                Name: "Geoffrey Hartmann",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                            shared.BlockerDeclaration{
                                Name: "Roland Lakin",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                        },
                        Name: "Jimmy Konopelski II",
                    },
                    shared.StageDeclaration{
                        Actions: []shared.ActionDeclaration{
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumBuild,
                                    Owner: shared.ActionOwnerEnumCustom,
                                    Provider: "provident",
                                    Version: "laudantium",
                                },
                                Configuration: map[string]string{
                                    "consequatur": "maxime",
                                    "aspernatur": "nam",
                                    "expedita": "quas",
                                    "provident": "repudiandae",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Ana Swift",
                                    },
                                    shared.InputArtifact{
                                        Name: "Florence Jerde",
                                    },
                                    shared.InputArtifact{
                                        Name: "Mrs. Donna Hand",
                                    },
                                },
                                Name: "Willis Rippin Sr.",
                                Namespace: sdk.String("laudantium"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Ted Fay",
                                    },
                                },
                                Region: sdk.String("necessitatibus"),
                                RoleArn: sdk.String("provident"),
                                RunOrder: sdk.Int64(920272),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumSource,
                                    Owner: shared.ActionOwnerEnumThirdParty,
                                    Provider: "molestiae",
                                    Version: "itaque",
                                },
                                Configuration: map[string]string{
                                    "corrupti": "aperiam",
                                    "sint": "accusamus",
                                    "eos": "totam",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Dr. Shannon Fahey",
                                    },
                                },
                                Name: "Alberto Breitenberg",
                                Namespace: sdk.String("minus"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Lisa Price IV",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Jacob Sawayn",
                                    },
                                },
                                Region: sdk.String("eligendi"),
                                RoleArn: sdk.String("dignissimos"),
                                RunOrder: sdk.Int64(235834),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumInvoke,
                                    Owner: shared.ActionOwnerEnumThirdParty,
                                    Provider: "temporibus",
                                    Version: "officia",
                                },
                                Configuration: map[string]string{
                                    "tenetur": "aspernatur",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Gilberto Osinski",
                                    },
                                    shared.InputArtifact{
                                        Name: "Mr. Edith Zieme",
                                    },
                                    shared.InputArtifact{
                                        Name: "Dr. Elaine Bernhard",
                                    },
                                    shared.InputArtifact{
                                        Name: "Kyle Reichel",
                                    },
                                },
                                Name: "Marjorie Waelchi",
                                Namespace: sdk.String("explicabo"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Kevin Conroy",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Marguerite Hansen",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Emma Keeling",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Hope Hegmann",
                                    },
                                },
                                Region: sdk.String("reiciendis"),
                                RoleArn: sdk.String("ab"),
                                RunOrder: sdk.Int64(265632),
                            },
                            shared.ActionDeclaration{
                                ActionTypeID: shared.ActionTypeID{
                                    Category: shared.ActionCategoryEnumSource,
                                    Owner: shared.ActionOwnerEnumAws,
                                    Provider: "eveniet",
                                    Version: "odio",
                                },
                                Configuration: map[string]string{
                                    "numquam": "dolorum",
                                    "possimus": "voluptate",
                                },
                                InputArtifacts: []shared.InputArtifact{
                                    shared.InputArtifact{
                                        Name: "Bertha Ward MD",
                                    },
                                },
                                Name: "Tracey Bosco",
                                Namespace: sdk.String("autem"),
                                OutputArtifacts: []shared.OutputArtifact{
                                    shared.OutputArtifact{
                                        Name: "Gwendolyn Anderson",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Dr. Patrick Beier",
                                    },
                                    shared.OutputArtifact{
                                        Name: "Orville Nitzsche Jr.",
                                    },
                                },
                                Region: sdk.String("eveniet"),
                                RoleArn: sdk.String("hic"),
                                RunOrder: sdk.Int64(27982),
                            },
                        },
                        Blockers: []shared.BlockerDeclaration{
                            shared.BlockerDeclaration{
                                Name: "Phyllis Tremblay Sr.",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                            shared.BlockerDeclaration{
                                Name: "Pauline Rowe",
                                Type: shared.BlockerTypeEnumSchedule,
                            },
                        },
                        Name: "Randolph Lebsack",
                    },
                },
                Version: sdk.Int64(412052),
            },
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzTarget: operations.UpdatePipelineXAmzTargetEnumCodePipeline20150709UpdatePipeline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePipelineOutput != nil {
        // handle response
    }
}
```
