# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/codepipeline/2015-07-09/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.AcknowledgeJob(ctx, operations.AcknowledgeJobRequest{
        AcknowledgeJobInput: shared.AcknowledgeJobInput{
            JobID: "corrupti",
            Nonce: "provident",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("vel"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AcknowledgeJob](docs/sdk/README.md#acknowledgejob) - Returns information about a specified job and whether that job has been received by the job worker. Used for custom actions only.
* [AcknowledgeThirdPartyJob](docs/sdk/README.md#acknowledgethirdpartyjob) - Confirms a job worker has received the specified job. Used for partner actions only.
* [CreateCustomActionType](docs/sdk/README.md#createcustomactiontype) - Creates a new custom action that can be used in all pipelines associated with the AWS account. Only used for custom actions.
* [CreatePipeline](docs/sdk/README.md#createpipeline) - <p>Creates a pipeline.</p> <note> <p>In the pipeline structure, you must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>
* [DeleteCustomActionType](docs/sdk/README.md#deletecustomactiontype) - <p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action fails after the action is marked for deletion. Used for custom actions only.</p> <important> <p>To re-create a custom action after it has been deleted you must use a string in the version field that has never been used before. This string can be an incremented version number, for example. To restore a deleted custom action, use a JSON file that is identical to the deleted action, including the original string in the version field.</p> </important>
* [DeletePipeline](docs/sdk/README.md#deletepipeline) - Deletes the specified pipeline.
* [DeleteWebhook](docs/sdk/README.md#deletewebhook) - Deletes a previously created webhook by name. Deleting the webhook stops AWS CodePipeline from starting a pipeline every time an external event occurs. The API returns successfully when trying to delete a webhook that is already deleted. If a deleted webhook is re-created by calling PutWebhook with the same name, it will have a different URL.
* [DeregisterWebhookWithThirdParty](docs/sdk/README.md#deregisterwebhookwiththirdparty) - Removes the connection between the webhook that was created by CodePipeline and the external tool with events to be detected. Currently supported only for webhooks that target an action type of GitHub.
* [DisableStageTransition](docs/sdk/README.md#disablestagetransition) - Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.
* [EnableStageTransition](docs/sdk/README.md#enablestagetransition) - Enables artifacts in a pipeline to transition to a stage in a pipeline.
* [GetActionType](docs/sdk/README.md#getactiontype) - Returns information about an action type created for an external provider, where the action is to be used by customers of the external provider. The action can be created with any supported integration model.
* [GetJobDetails](docs/sdk/README.md#getjobdetails) - <p>Returns information about a job. Used for custom actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
* [GetPipeline](docs/sdk/README.md#getpipeline) - Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with <a>UpdatePipeline</a>.
* [GetPipelineExecution](docs/sdk/README.md#getpipelineexecution) - Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.
* [GetPipelineState](docs/sdk/README.md#getpipelinestate) - <p>Returns information about the state of a pipeline, including the stages and actions.</p> <note> <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code> fields indicate the source revision information, such as the commit ID, for the current state.</p> </note>
* [GetThirdPartyJobDetails](docs/sdk/README.md#getthirdpartyjobdetails) - <p>Requests the details of a job for a third party action. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
* [ListActionExecutions](docs/sdk/README.md#listactionexecutions) - Lists the action executions that have occurred in a pipeline.
* [ListActionTypes](docs/sdk/README.md#listactiontypes) - Gets a summary of all AWS CodePipeline action types associated with your account.
* [ListPipelineExecutions](docs/sdk/README.md#listpipelineexecutions) - Gets a summary of the most recent executions for a pipeline.
* [ListPipelines](docs/sdk/README.md#listpipelines) - Gets a summary of all of the pipelines associated with your account.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Gets the set of key-value pairs (metadata) that are used to manage the resource.
* [ListWebhooks](docs/sdk/README.md#listwebhooks) - Gets a listing of all the webhooks in this AWS Region for this account. The output lists all webhooks and includes the webhook URL and ARN and the configuration for each webhook.
* [PollForJobs](docs/sdk/README.md#pollforjobs) - <p>Returns information about any jobs for AWS CodePipeline to act on. <code>PollForJobs</code> is valid only for action types with "Custom" in the owner field. If the action type contains "AWS" or "ThirdParty" in the owner field, the <code>PollForJobs</code> action returns an error.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
* [PollForThirdPartyJobs](docs/sdk/README.md#pollforthirdpartyjobs) - <p>Determines whether there are any third party jobs for a job worker to act on. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts.</p> </important>
* [PutActionRevision](docs/sdk/README.md#putactionrevision) - Provides information to AWS CodePipeline about new revisions to a source.
* [PutApprovalResult](docs/sdk/README.md#putapprovalresult) - Provides the response to a manual approval request to AWS CodePipeline. Valid responses include Approved and Rejected.
* [PutJobFailureResult](docs/sdk/README.md#putjobfailureresult) - Represents the failure of a job as returned to the pipeline by a job worker. Used for custom actions only.
* [PutJobSuccessResult](docs/sdk/README.md#putjobsuccessresult) - Represents the success of a job as returned to the pipeline by a job worker. Used for custom actions only.
* [PutThirdPartyJobFailureResult](docs/sdk/README.md#putthirdpartyjobfailureresult) - Represents the failure of a third party job as returned to the pipeline by a job worker. Used for partner actions only.
* [PutThirdPartyJobSuccessResult](docs/sdk/README.md#putthirdpartyjobsuccessresult) - Represents the success of a third party job as returned to the pipeline by a job worker. Used for partner actions only.
* [PutWebhook](docs/sdk/README.md#putwebhook) - Defines a webhook and returns a unique webhook URL generated by CodePipeline. This URL can be supplied to third party source hosting providers to call every time there's a code change. When CodePipeline receives a POST request on this URL, the pipeline defined in the webhook is started as long as the POST request satisfied the authentication and filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty and DeregisterWebhookWithThirdParty APIs can be used to automatically configure supported third parties to call the generated webhook URL.
* [RegisterWebhookWithThirdParty](docs/sdk/README.md#registerwebhookwiththirdparty) - Configures a connection between the webhook that was created and the external tool with events to be detected.
* [RetryStageExecution](docs/sdk/README.md#retrystageexecution) - Resumes the pipeline execution by retrying the last failed actions in a stage. You can retry a stage immediately if any of the actions in the stage fail. When you retry, all actions that are still in progress continue working, and failed actions are triggered again.
* [StartPipelineExecution](docs/sdk/README.md#startpipelineexecution) - Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.
* [StopPipelineExecution](docs/sdk/README.md#stoppipelineexecution) - Stops the specified pipeline execution. You choose to either stop the pipeline execution by completing in-progress actions without starting subsequent actions, or by abandoning in-progress actions. While completing or abandoning in-progress actions, the pipeline execution is in a <code>Stopping</code> state. After all in-progress actions are completed or abandoned, the pipeline execution is in a <code>Stopped</code> state.
* [TagResource](docs/sdk/README.md#tagresource) - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource. 
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from an AWS resource.
* [UpdateActionType](docs/sdk/README.md#updateactiontype) - Updates an action type that was created with any supported integration model, where the action type is to be used by customers of the action type provider. Use a JSON file with the action definition and <code>UpdateActionType</code> to provide the full structure.
* [UpdatePipeline](docs/sdk/README.md#updatepipeline) - Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure and <code>UpdatePipeline</code> to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
