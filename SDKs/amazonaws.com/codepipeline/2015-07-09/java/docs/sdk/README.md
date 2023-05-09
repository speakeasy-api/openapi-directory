# SDK

## Overview

<fullname>AWS CodePipeline</fullname> <p> <b>Overview</b> </p> <p>This is the AWS CodePipeline API Reference. This guide provides descriptions of the actions and data types for AWS CodePipeline. Some functionality for your pipeline can only be configured through the API. For more information, see the <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html">AWS CodePipeline User Guide</a>.</p> <p>You can use the AWS CodePipeline API to work with pipelines, stages, actions, and transitions.</p> <p> <i>Pipelines</i> are models of automated release processes. Each pipeline is uniquely named, and consists of stages, actions, and transitions. </p> <p>You can work with pipelines by calling:</p> <ul> <li> <p> <a>CreatePipeline</a>, which creates a uniquely named pipeline.</p> </li> <li> <p> <a>DeletePipeline</a>, which deletes the specified pipeline.</p> </li> <li> <p> <a>GetPipeline</a>, which returns information about the pipeline structure and pipeline metadata, including the pipeline Amazon Resource Name (ARN).</p> </li> <li> <p> <a>GetPipelineExecution</a>, which returns information about a specific execution of a pipeline.</p> </li> <li> <p> <a>GetPipelineState</a>, which returns information about the current state of the stages and actions of a pipeline.</p> </li> <li> <p> <a>ListActionExecutions</a>, which returns action-level details for past executions. The details include full stage and action-level details, including individual action duration, status, any errors that occurred during the execution, and input and output artifact location details.</p> </li> <li> <p> <a>ListPipelines</a>, which gets a summary of all of the pipelines associated with your account.</p> </li> <li> <p> <a>ListPipelineExecutions</a>, which gets a summary of the most recent executions for a pipeline.</p> </li> <li> <p> <a>StartPipelineExecution</a>, which runs the most recent revision of an artifact through the pipeline.</p> </li> <li> <p> <a>StopPipelineExecution</a>, which stops the specified pipeline execution from continuing through the pipeline.</p> </li> <li> <p> <a>UpdatePipeline</a>, which updates a pipeline with edits or changes to the structure of the pipeline.</p> </li> </ul> <p>Pipelines include <i>stages</i>. Each stage contains one or more actions that must complete before the next stage begins. A stage results in success or failure. If a stage fails, the pipeline stops at that stage and remains stopped until either a new version of an artifact appears in the source location, or a user takes action to rerun the most recent artifact through the pipeline. You can call <a>GetPipelineState</a>, which displays the status of a pipeline, including the status of stages in the pipeline, or <a>GetPipeline</a>, which returns the entire structure of the pipeline, including the stages of that pipeline. For more information about the structure of stages and actions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-structure.html">AWS CodePipeline Pipeline Structure Reference</a>.</p> <p>Pipeline stages include <i>actions</i> that are categorized into categories such as source or build actions performed in a stage of a pipeline. For example, you can use a source action to import artifacts into a pipeline from a source such as Amazon S3. Like stages, you do not work with actions directly in most cases, but you do define and interact with actions when working with pipeline operations such as <a>CreatePipeline</a> and <a>GetPipelineState</a>. Valid action categories are:</p> <ul> <li> <p>Source</p> </li> <li> <p>Build</p> </li> <li> <p>Test</p> </li> <li> <p>Deploy</p> </li> <li> <p>Approval</p> </li> <li> <p>Invoke</p> </li> </ul> <p>Pipelines also include <i>transitions</i>, which allow the transition of artifacts from one stage to the next in a pipeline after the actions in one stage complete.</p> <p>You can work with transitions by calling:</p> <ul> <li> <p> <a>DisableStageTransition</a>, which prevents artifacts from transitioning to the next stage in a pipeline.</p> </li> <li> <p> <a>EnableStageTransition</a>, which enables transition of artifacts between stages in a pipeline. </p> </li> </ul> <p> <b>Using the API to integrate with AWS CodePipeline</b> </p> <p>For third-party integrators or developers who want to create their own integrations with AWS CodePipeline, the expected sequence varies from the standard API user. To integrate with AWS CodePipeline, developers need to work with the following items:</p> <p> <b>Jobs</b>, which are instances of an action. For example, a job for a source action might import a revision of an artifact from a source. </p> <p>You can work with jobs by calling:</p> <ul> <li> <p> <a>AcknowledgeJob</a>, which confirms whether a job worker has received the specified job.</p> </li> <li> <p> <a>GetJobDetails</a>, which returns the details of a job.</p> </li> <li> <p> <a>PollForJobs</a>, which determines whether there are any jobs to act on.</p> </li> <li> <p> <a>PutJobFailureResult</a>, which provides details of a job failure. </p> </li> <li> <p> <a>PutJobSuccessResult</a>, which provides details of a job success.</p> </li> </ul> <p> <b>Third party jobs</b>, which are instances of an action created by a partner action and integrated into AWS CodePipeline. Partner actions are created by members of the AWS Partner Network.</p> <p>You can work with third party jobs by calling:</p> <ul> <li> <p> <a>AcknowledgeThirdPartyJob</a>, which confirms whether a job worker has received the specified job.</p> </li> <li> <p> <a>GetThirdPartyJobDetails</a>, which requests the details of a job for a partner action.</p> </li> <li> <p> <a>PollForThirdPartyJobs</a>, which determines whether there are any jobs to act on. </p> </li> <li> <p> <a>PutThirdPartyJobFailureResult</a>, which provides details of a job failure.</p> </li> <li> <p> <a>PutThirdPartyJobSuccessResult</a>, which provides details of a job success.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codepipeline/>
### Available Operations

* [acknowledgeJob](#acknowledgejob) - Returns information about a specified job and whether that job has been received by the job worker. Used for custom actions only.
* [acknowledgeThirdPartyJob](#acknowledgethirdpartyjob) - Confirms a job worker has received the specified job. Used for partner actions only.
* [createCustomActionType](#createcustomactiontype) - Creates a new custom action that can be used in all pipelines associated with the AWS account. Only used for custom actions.
* [createPipeline](#createpipeline) - <p>Creates a pipeline.</p> <note> <p>In the pipeline structure, you must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>
* [deleteCustomActionType](#deletecustomactiontype) - <p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action fails after the action is marked for deletion. Used for custom actions only.</p> <important> <p>To re-create a custom action after it has been deleted you must use a string in the version field that has never been used before. This string can be an incremented version number, for example. To restore a deleted custom action, use a JSON file that is identical to the deleted action, including the original string in the version field.</p> </important>
* [deletePipeline](#deletepipeline) - Deletes the specified pipeline.
* [deleteWebhook](#deletewebhook) - Deletes a previously created webhook by name. Deleting the webhook stops AWS CodePipeline from starting a pipeline every time an external event occurs. The API returns successfully when trying to delete a webhook that is already deleted. If a deleted webhook is re-created by calling PutWebhook with the same name, it will have a different URL.
* [deregisterWebhookWithThirdParty](#deregisterwebhookwiththirdparty) - Removes the connection between the webhook that was created by CodePipeline and the external tool with events to be detected. Currently supported only for webhooks that target an action type of GitHub.
* [disableStageTransition](#disablestagetransition) - Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.
* [enableStageTransition](#enablestagetransition) - Enables artifacts in a pipeline to transition to a stage in a pipeline.
* [getActionType](#getactiontype) - Returns information about an action type created for an external provider, where the action is to be used by customers of the external provider. The action can be created with any supported integration model.
* [getJobDetails](#getjobdetails) - <p>Returns information about a job. Used for custom actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
* [getPipeline](#getpipeline) - Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with <a>UpdatePipeline</a>.
* [getPipelineExecution](#getpipelineexecution) - Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.
* [getPipelineState](#getpipelinestate) - <p>Returns information about the state of a pipeline, including the stages and actions.</p> <note> <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code> fields indicate the source revision information, such as the commit ID, for the current state.</p> </note>
* [getThirdPartyJobDetails](#getthirdpartyjobdetails) - <p>Requests the details of a job for a third party action. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
* [listActionExecutions](#listactionexecutions) - Lists the action executions that have occurred in a pipeline.
* [listActionTypes](#listactiontypes) - Gets a summary of all AWS CodePipeline action types associated with your account.
* [listPipelineExecutions](#listpipelineexecutions) - Gets a summary of the most recent executions for a pipeline.
* [listPipelines](#listpipelines) - Gets a summary of all of the pipelines associated with your account.
* [listTagsForResource](#listtagsforresource) - Gets the set of key-value pairs (metadata) that are used to manage the resource.
* [listWebhooks](#listwebhooks) - Gets a listing of all the webhooks in this AWS Region for this account. The output lists all webhooks and includes the webhook URL and ARN and the configuration for each webhook.
* [pollForJobs](#pollforjobs) - <p>Returns information about any jobs for AWS CodePipeline to act on. <code>PollForJobs</code> is valid only for action types with "Custom" in the owner field. If the action type contains "AWS" or "ThirdParty" in the owner field, the <code>PollForJobs</code> action returns an error.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
* [pollForThirdPartyJobs](#pollforthirdpartyjobs) - <p>Determines whether there are any third party jobs for a job worker to act on. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts.</p> </important>
* [putActionRevision](#putactionrevision) - Provides information to AWS CodePipeline about new revisions to a source.
* [putApprovalResult](#putapprovalresult) - Provides the response to a manual approval request to AWS CodePipeline. Valid responses include Approved and Rejected.
* [putJobFailureResult](#putjobfailureresult) - Represents the failure of a job as returned to the pipeline by a job worker. Used for custom actions only.
* [putJobSuccessResult](#putjobsuccessresult) - Represents the success of a job as returned to the pipeline by a job worker. Used for custom actions only.
* [putThirdPartyJobFailureResult](#putthirdpartyjobfailureresult) - Represents the failure of a third party job as returned to the pipeline by a job worker. Used for partner actions only.
* [putThirdPartyJobSuccessResult](#putthirdpartyjobsuccessresult) - Represents the success of a third party job as returned to the pipeline by a job worker. Used for partner actions only.
* [putWebhook](#putwebhook) - Defines a webhook and returns a unique webhook URL generated by CodePipeline. This URL can be supplied to third party source hosting providers to call every time there's a code change. When CodePipeline receives a POST request on this URL, the pipeline defined in the webhook is started as long as the POST request satisfied the authentication and filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty and DeregisterWebhookWithThirdParty APIs can be used to automatically configure supported third parties to call the generated webhook URL.
* [registerWebhookWithThirdParty](#registerwebhookwiththirdparty) - Configures a connection between the webhook that was created and the external tool with events to be detected.
* [retryStageExecution](#retrystageexecution) - Resumes the pipeline execution by retrying the last failed actions in a stage. You can retry a stage immediately if any of the actions in the stage fail. When you retry, all actions that are still in progress continue working, and failed actions are triggered again.
* [startPipelineExecution](#startpipelineexecution) - Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.
* [stopPipelineExecution](#stoppipelineexecution) - Stops the specified pipeline execution. You choose to either stop the pipeline execution by completing in-progress actions without starting subsequent actions, or by abandoning in-progress actions. While completing or abandoning in-progress actions, the pipeline execution is in a <code>Stopping</code> state. After all in-progress actions are completed or abandoned, the pipeline execution is in a <code>Stopped</code> state.
* [tagResource](#tagresource) - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource. 
* [untagResource](#untagresource) - Removes tags from an AWS resource.
* [updateActionType](#updateactiontype) - Updates an action type that was created with any supported integration model, where the action type is to be used by customers of the action type provider. Use a JSON file with the action definition and <code>UpdateActionType</code> to provide the full structure.
* [updatePipeline](#updatepipeline) - Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure and <code>UpdatePipeline</code> to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.

## acknowledgeJob

Returns information about a specified job and whether that job has been received by the job worker. Used for custom actions only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcknowledgeJobRequest;
import org.openapis.openapi.models.operations.AcknowledgeJobResponse;
import org.openapis.openapi.models.operations.AcknowledgeJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcknowledgeJobInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcknowledgeJobRequest req = new AcknowledgeJobRequest(                new AcknowledgeJobInput("suscipit", "iure");, AcknowledgeJobXAmzTargetEnum.CODE_PIPELINE20150709_ACKNOWLEDGE_JOB) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AcknowledgeJobResponse res = sdk.sdk.acknowledgeJob(req);

            if (res.acknowledgeJobOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## acknowledgeThirdPartyJob

Confirms a job worker has received the specified job. Used for partner actions only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcknowledgeThirdPartyJobRequest;
import org.openapis.openapi.models.operations.AcknowledgeThirdPartyJobResponse;
import org.openapis.openapi.models.operations.AcknowledgeThirdPartyJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcknowledgeThirdPartyJobInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcknowledgeThirdPartyJobRequest req = new AcknowledgeThirdPartyJobRequest(                new AcknowledgeThirdPartyJobInput("placeat", "voluptatum", "iusto");, AcknowledgeThirdPartyJobXAmzTargetEnum.CODE_PIPELINE20150709_ACKNOWLEDGE_THIRD_PARTY_JOB) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "recusandae";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "ab";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "veritatis";
            }};            

            AcknowledgeThirdPartyJobResponse res = sdk.sdk.acknowledgeThirdPartyJob(req);

            if (res.acknowledgeThirdPartyJobOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCustomActionType

Creates a new custom action that can be used in all pipelines associated with the AWS account. Only used for custom actions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomActionTypeRequest;
import org.openapis.openapi.models.operations.CreateCustomActionTypeResponse;
import org.openapis.openapi.models.operations.CreateCustomActionTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionCategoryEnum;
import org.openapis.openapi.models.shared.ActionConfigurationProperty;
import org.openapis.openapi.models.shared.ActionConfigurationPropertyTypeEnum;
import org.openapis.openapi.models.shared.ActionTypeSettings;
import org.openapis.openapi.models.shared.ArtifactDetails;
import org.openapis.openapi.models.shared.CreateCustomActionTypeInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCustomActionTypeRequest req = new CreateCustomActionTypeRequest(                new CreateCustomActionTypeInput(ActionCategoryEnum.SOURCE,                 new ArtifactDetails(368241L, 832620L);,                 new ArtifactDetails(957156L, 778157L);, "odit", "at") {{
                                configurationProperties = new org.openapis.openapi.models.shared.ActionConfigurationProperty[]{{
                                    add(new ActionConfigurationProperty(false, "dolorum", false, false) {{
                                        description = "maiores";
                                        key = false;
                                        name = "Bernadette Schmidt";
                                        queryable = false;
                                        required = false;
                                        secret = false;
                                        type = ActionConfigurationPropertyTypeEnum.BOOLEAN_;
                                    }}),
                                    add(new ActionConfigurationProperty(false, "optio", false, false) {{
                                        description = "dicta";
                                        key = false;
                                        name = "Luke McCullough";
                                        queryable = false;
                                        required = false;
                                        secret = false;
                                        type = ActionConfigurationPropertyTypeEnum.BOOLEAN_;
                                    }}),
                                    add(new ActionConfigurationProperty(false, "cum", false, false) {{
                                        description = "totam";
                                        key = false;
                                        name = "Lucy Krajcik";
                                        queryable = false;
                                        required = false;
                                        secret = false;
                                        type = ActionConfigurationPropertyTypeEnum.BOOLEAN_;
                                    }}),
                                    add(new ActionConfigurationProperty(false, "iste", false, false) {{
                                        description = "esse";
                                        key = false;
                                        name = "Mrs. Miriam Collier";
                                        queryable = false;
                                        required = false;
                                        secret = false;
                                        type = ActionConfigurationPropertyTypeEnum.STRING;
                                    }}),
                                }};
                                settings = new ActionTypeSettings() {{
                                    entityUrlTemplate = "dolor";
                                    executionUrlTemplate = "natus";
                                    revisionUrlTemplate = "laboriosam";
                                    thirdPartyConfigurationUrl = "hic";
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("corporis", "iste") {{
                                        key = "fuga";
                                        value = "in";
                                    }}),
                                    add(new Tag("quidem", "architecto") {{
                                        key = "iure";
                                        value = "saepe";
                                    }}),
                                    add(new Tag("est", "mollitia") {{
                                        key = "ipsa";
                                        value = "reiciendis";
                                    }}),
                                    add(new Tag("dolorem", "corporis") {{
                                        key = "laborum";
                                        value = "dolores";
                                    }}),
                                }};
                            }};, CreateCustomActionTypeXAmzTargetEnum.CODE_PIPELINE20150709_CREATE_CUSTOM_ACTION_TYPE) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "enim";
                xAmzDate = "omnis";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateCustomActionTypeResponse res = sdk.sdk.createCustomActionType(req);

            if (res.createCustomActionTypeOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPipeline

<p>Creates a pipeline.</p> <note> <p>In the pipeline structure, you must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePipelineRequest;
import org.openapis.openapi.models.operations.CreatePipelineResponse;
import org.openapis.openapi.models.operations.CreatePipelineXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionCategoryEnum;
import org.openapis.openapi.models.shared.ActionDeclaration;
import org.openapis.openapi.models.shared.ActionOwnerEnum;
import org.openapis.openapi.models.shared.ActionTypeId;
import org.openapis.openapi.models.shared.ArtifactStore;
import org.openapis.openapi.models.shared.ArtifactStoreTypeEnum;
import org.openapis.openapi.models.shared.BlockerDeclaration;
import org.openapis.openapi.models.shared.BlockerTypeEnum;
import org.openapis.openapi.models.shared.CreatePipelineInput;
import org.openapis.openapi.models.shared.EncryptionKey;
import org.openapis.openapi.models.shared.EncryptionKeyTypeEnum;
import org.openapis.openapi.models.shared.InputArtifact;
import org.openapis.openapi.models.shared.OutputArtifact;
import org.openapis.openapi.models.shared.PipelineDeclaration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StageDeclaration;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePipelineRequest req = new CreatePipelineRequest(                new CreatePipelineInput(                new PipelineDeclaration("iure", "culpa",                 new org.openapis.openapi.models.shared.StageDeclaration[]{{
                                                                add(new StageDeclaration(                new org.openapis.openapi.models.shared.ActionDeclaration[]{{
                                                                                    add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.TEST, ActionOwnerEnum.CUSTOM, "distinctio", "asperiores");, "nihil") {{
                                                                                        actionTypeId = new ActionTypeId(ActionCategoryEnum.INVOKE, ActionOwnerEnum.CUSTOM, "quaerat", "quos") {{
                                                                                            category = ActionCategoryEnum.TEST;
                                                                                            owner = ActionOwnerEnum.CUSTOM;
                                                                                            provider = "provident";
                                                                                            version = "nobis";
                                                                                        }};
                                                                                        configuration = new java.util.HashMap<String, String>() {{
                                                                                            put("dolorem", "dolorem");
                                                                                            put("dolor", "qui");
                                                                                        }};
                                                                                        inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                            add(new InputArtifact("reiciendis") {{
                                                                                                name = "Marshall Ritchie";
                                                                                            }}),
                                                                                        }};
                                                                                        name = "Mr. Lee Funk III";
                                                                                        namespace = "odio";
                                                                                        outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                            add(new OutputArtifact("eos") {{
                                                                                                name = "Rickey Wolf";
                                                                                            }}),
                                                                                            add(new OutputArtifact("iusto") {{
                                                                                                name = "Miss Paul Steuber";
                                                                                            }}),
                                                                                        }};
                                                                                        region = "voluptate";
                                                                                        roleArn = "dolorum";
                                                                                        runOrder = 536579L;
                                                                                    }}),
                                                                                    add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.SOURCE, ActionOwnerEnum.AWS, "distinctio", "facilis");, "aliquid") {{
                                                                                        actionTypeId = new ActionTypeId(ActionCategoryEnum.BUILD, ActionOwnerEnum.AWS, "perferendis", "amet") {{
                                                                                            category = ActionCategoryEnum.BUILD;
                                                                                            owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                            provider = "id";
                                                                                            version = "saepe";
                                                                                        }};
                                                                                        configuration = new java.util.HashMap<String, String>() {{
                                                                                            put("accusamus", "ad");
                                                                                            put("saepe", "suscipit");
                                                                                            put("deserunt", "provident");
                                                                                            put("minima", "repellendus");
                                                                                        }};
                                                                                        inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                            add(new InputArtifact("vel") {{
                                                                                                name = "James Swaniawski";
                                                                                            }}),
                                                                                            add(new InputArtifact("esse") {{
                                                                                                name = "Erick Denesik";
                                                                                            }}),
                                                                                            add(new InputArtifact("amet") {{
                                                                                                name = "Tyrone Emard";
                                                                                            }}),
                                                                                        }};
                                                                                        name = "Tomas Funk";
                                                                                        namespace = "sapiente";
                                                                                        outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                            add(new OutputArtifact("vel") {{
                                                                                                name = "Karen Rath";
                                                                                            }}),
                                                                                            add(new OutputArtifact("incidunt") {{
                                                                                                name = "Glen Oberbrunner";
                                                                                            }}),
                                                                                            add(new OutputArtifact("dicta") {{
                                                                                                name = "Shelly Schoen";
                                                                                            }}),
                                                                                        }};
                                                                                        region = "laborum";
                                                                                        roleArn = "totam";
                                                                                        runOrder = 276894L;
                                                                                    }}),
                                                                                    add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.TEST, ActionOwnerEnum.CUSTOM, "vero", "ducimus");, "dolore") {{
                                                                                        actionTypeId = new ActionTypeId(ActionCategoryEnum.BUILD, ActionOwnerEnum.AWS, "magni", "odio") {{
                                                                                            category = ActionCategoryEnum.DEPLOY;
                                                                                            owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                            provider = "temporibus";
                                                                                            version = "qui";
                                                                                        }};
                                                                                        configuration = new java.util.HashMap<String, String>() {{
                                                                                            put("ullam", "nam");
                                                                                        }};
                                                                                        inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                            add(new InputArtifact("ipsum") {{
                                                                                                name = "Erma Rogahn PhD";
                                                                                            }}),
                                                                                            add(new InputArtifact("aperiam") {{
                                                                                                name = "Gayle Lueilwitz";
                                                                                            }}),
                                                                                            add(new InputArtifact("dolorum") {{
                                                                                                name = "Mike Greenholt";
                                                                                            }}),
                                                                                            add(new InputArtifact("consequatur") {{
                                                                                                name = "Amy Armstrong";
                                                                                            }}),
                                                                                        }};
                                                                                        name = "Marcos Schaden";
                                                                                        namespace = "facilis";
                                                                                        outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                            add(new OutputArtifact("voluptatibus") {{
                                                                                                name = "Amy Langworth";
                                                                                            }}),
                                                                                            add(new OutputArtifact("delectus") {{
                                                                                                name = "Ignacio Moen";
                                                                                            }}),
                                                                                            add(new OutputArtifact("hic") {{
                                                                                                name = "Victoria Thiel";
                                                                                            }}),
                                                                                        }};
                                                                                        region = "distinctio";
                                                                                        roleArn = "quod";
                                                                                        runOrder = 486160L;
                                                                                    }}),
                                                                                }}, "quibusdam") {{
                                                                    actions = new org.openapis.openapi.models.shared.ActionDeclaration[]{{
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.APPROVAL, ActionOwnerEnum.AWS, "repudiandae", "sint");, "veritatis") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.SOURCE, ActionOwnerEnum.CUSTOM, "mollitia", "occaecati") {{
                                                                                category = ActionCategoryEnum.SOURCE;
                                                                                owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                provider = "dolorem";
                                                                                version = "culpa";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("commodi", "quam");
                                                                                put("molestiae", "velit");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("enim") {{
                                                                                    name = "Beatrice Brown";
                                                                                }}),
                                                                                add(new InputArtifact("id") {{
                                                                                    name = "Angelica Dietrich";
                                                                                }}),
                                                                                add(new InputArtifact("laborum") {{
                                                                                    name = "Richard Boyer";
                                                                                }}),
                                                                            }};
                                                                            name = "Johanna Wolf";
                                                                            namespace = "praesentium";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("reprehenderit") {{
                                                                                    name = "Geneva Klein Jr.";
                                                                                }}),
                                                                                add(new OutputArtifact("iusto") {{
                                                                                    name = "Shawna Carter";
                                                                                }}),
                                                                                add(new OutputArtifact("repudiandae") {{
                                                                                    name = "Maryann Hamill";
                                                                                }}),
                                                                                add(new OutputArtifact("pariatur") {{
                                                                                    name = "Edna Pouros";
                                                                                }}),
                                                                            }};
                                                                            region = "modi";
                                                                            roleArn = "praesentium";
                                                                            runOrder = 523248L;
                                                                        }}),
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.TEST, ActionOwnerEnum.THIRD_PARTY, "deleniti", "sapiente");, "amet") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.INVOKE, ActionOwnerEnum.CUSTOM, "explicabo", "deserunt") {{
                                                                                category = ActionCategoryEnum.APPROVAL;
                                                                                owner = ActionOwnerEnum.AWS;
                                                                                provider = "enim";
                                                                                version = "consequatur";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("quibusdam", "labore");
                                                                                put("modi", "qui");
                                                                                put("aliquid", "cupiditate");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("dolorum") {{
                                                                                    name = "Louise Simonis Sr.";
                                                                                }}),
                                                                                add(new InputArtifact("delectus") {{
                                                                                    name = "Eddie Prosacco";
                                                                                }}),
                                                                                add(new InputArtifact("provident") {{
                                                                                    name = "Ethel Roob";
                                                                                }}),
                                                                            }};
                                                                            name = "Perry Nikolaus";
                                                                            namespace = "a";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("dicta") {{
                                                                                    name = "Arlene Stamm";
                                                                                }}),
                                                                                add(new OutputArtifact("laborum") {{
                                                                                    name = "Blanca Schulist";
                                                                                }}),
                                                                                add(new OutputArtifact("delectus") {{
                                                                                    name = "Alfred McClure";
                                                                                }}),
                                                                            }};
                                                                            region = "quidem";
                                                                            roleArn = "provident";
                                                                            runOrder = 725255L;
                                                                        }}),
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.DEPLOY, ActionOwnerEnum.CUSTOM, "nihil", "repellat");, "quibusdam") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.TEST, ActionOwnerEnum.THIRD_PARTY, "perferendis", "nihil") {{
                                                                                category = ActionCategoryEnum.TEST;
                                                                                owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                provider = "vel";
                                                                                version = "natus";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("distinctio", "id");
                                                                                put("labore", "labore");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("architecto") {{
                                                                                    name = "Robin Keebler";
                                                                                }}),
                                                                                add(new InputArtifact("quos") {{
                                                                                    name = "Frances Marks";
                                                                                }}),
                                                                            }};
                                                                            name = "Kenneth O'Hara";
                                                                            namespace = "ad";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("doloribus") {{
                                                                                    name = "Jana Connelly III";
                                                                                }}),
                                                                                add(new OutputArtifact("in") {{
                                                                                    name = "Frederick Schoen";
                                                                                }}),
                                                                            }};
                                                                            region = "architecto";
                                                                            roleArn = "architecto";
                                                                            runOrder = 919483L;
                                                                        }}),
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.APPROVAL, ActionOwnerEnum.CUSTOM, "omnis", "facilis");, "perspiciatis") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.SOURCE, ActionOwnerEnum.THIRD_PARTY, "natus", "magni") {{
                                                                                category = ActionCategoryEnum.SOURCE;
                                                                                owner = ActionOwnerEnum.CUSTOM;
                                                                                provider = "pariatur";
                                                                                version = "accusantium";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("quo", "illum");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("accusantium") {{
                                                                                    name = "Nathaniel Marks";
                                                                                }}),
                                                                                add(new InputArtifact("autem") {{
                                                                                    name = "Ebony Predovic";
                                                                                }}),
                                                                                add(new InputArtifact("perferendis") {{
                                                                                    name = "Gary Streich";
                                                                                }}),
                                                                                add(new InputArtifact("hic") {{
                                                                                    name = "Vincent Anderson";
                                                                                }}),
                                                                            }};
                                                                            name = "Robin D'Amore";
                                                                            namespace = "dignissimos";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("quam") {{
                                                                                    name = "Mr. Robin Daugherty";
                                                                                }}),
                                                                            }};
                                                                            region = "dolor";
                                                                            roleArn = "vero";
                                                                            runOrder = 345352L;
                                                                        }}),
                                                                    }};
                                                                    blockers = new org.openapis.openapi.models.shared.BlockerDeclaration[]{{
                                                                        add(new BlockerDeclaration("rerum", BlockerTypeEnum.SCHEDULE) {{
                                                                            name = "Bobby Kutch V";
                                                                            type = BlockerTypeEnum.SCHEDULE;
                                                                        }}),
                                                                    }};
                                                                    name = "Ollie Watsica";
                                                                }}),
                                                                add(new StageDeclaration(                new org.openapis.openapi.models.shared.ActionDeclaration[]{{
                                                                                    add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.APPROVAL, ActionOwnerEnum.THIRD_PARTY, "ducimus", "quos");, "vel") {{
                                                                                        actionTypeId = new ActionTypeId(ActionCategoryEnum.SOURCE, ActionOwnerEnum.THIRD_PARTY, "aut", "dignissimos") {{
                                                                                            category = ActionCategoryEnum.BUILD;
                                                                                            owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                            provider = "numquam";
                                                                                            version = "impedit";
                                                                                        }};
                                                                                        configuration = new java.util.HashMap<String, String>() {{
                                                                                            put("maiores", "natus");
                                                                                        }};
                                                                                        inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                            add(new InputArtifact("consequuntur") {{
                                                                                                name = "Ms. Glen Zboncak";
                                                                                            }}),
                                                                                        }};
                                                                                        name = "Luke Schoen";
                                                                                        namespace = "asperiores";
                                                                                        outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                            add(new OutputArtifact("ab") {{
                                                                                                name = "Darlene Sawayn";
                                                                                            }}),
                                                                                            add(new OutputArtifact("culpa") {{
                                                                                                name = "Kristine Ondricka";
                                                                                            }}),
                                                                                        }};
                                                                                        region = "est";
                                                                                        roleArn = "recusandae";
                                                                                        runOrder = 517309L;
                                                                                    }}),
                                                                                }}, "labore") {{
                                                                    actions = new org.openapis.openapi.models.shared.ActionDeclaration[]{{
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.INVOKE, ActionOwnerEnum.CUSTOM, "placeat", "velit");, "eum") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.APPROVAL, ActionOwnerEnum.THIRD_PARTY, "nulla", "fugit") {{
                                                                                category = ActionCategoryEnum.BUILD;
                                                                                owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                provider = "impedit";
                                                                                version = "aut";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("maiores", "doloribus");
                                                                                put("iusto", "eligendi");
                                                                                put("ducimus", "alias");
                                                                                put("officia", "tempora");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("ratione") {{
                                                                                    name = "Judy Keebler";
                                                                                }}),
                                                                                add(new InputArtifact("quasi") {{
                                                                                    name = "Mabel Cartwright";
                                                                                }}),
                                                                            }};
                                                                            name = "Freda Marks";
                                                                            namespace = "sapiente";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("aliquid") {{
                                                                                    name = "Nathaniel Ryan";
                                                                                }}),
                                                                                add(new OutputArtifact("recusandae") {{
                                                                                    name = "Megan Jaskolski";
                                                                                }}),
                                                                                add(new OutputArtifact("aut") {{
                                                                                    name = "Cathy Becker";
                                                                                }}),
                                                                                add(new OutputArtifact("accusamus") {{
                                                                                    name = "Margie Russel";
                                                                                }}),
                                                                            }};
                                                                            region = "inventore";
                                                                            roleArn = "non";
                                                                            runOrder = 89603L;
                                                                        }}),
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.DEPLOY, ActionOwnerEnum.AWS, "cupiditate", "consequatur");, "tempora") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.APPROVAL, ActionOwnerEnum.THIRD_PARTY, "libero", "quasi") {{
                                                                                category = ActionCategoryEnum.DEPLOY;
                                                                                owner = ActionOwnerEnum.CUSTOM;
                                                                                provider = "quas";
                                                                                version = "assumenda";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("numquam", "explicabo");
                                                                                put("provident", "ipsa");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("rem") {{
                                                                                    name = "Viola Gibson";
                                                                                }}),
                                                                                add(new InputArtifact("eum") {{
                                                                                    name = "Mitchell Predovic";
                                                                                }}),
                                                                            }};
                                                                            name = "Angelina Davis";
                                                                            namespace = "veritatis";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("quo") {{
                                                                                    name = "Rickey DuBuque";
                                                                                }}),
                                                                            }};
                                                                            region = "fuga";
                                                                            roleArn = "eius";
                                                                            runOrder = 178367L;
                                                                        }}),
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.APPROVAL, ActionOwnerEnum.THIRD_PARTY, "harum", "molestiae");, "rerum") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.INVOKE, ActionOwnerEnum.THIRD_PARTY, "recusandae", "aperiam") {{
                                                                                category = ActionCategoryEnum.APPROVAL;
                                                                                owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                provider = "aspernatur";
                                                                                version = "sequi";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("quod", "dignissimos");
                                                                                put("inventore", "nihil");
                                                                                put("totam", "accusamus");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("deserunt") {{
                                                                                    name = "Violet Johns";
                                                                                }}),
                                                                                add(new InputArtifact("praesentium") {{
                                                                                    name = "Carol Sawayn";
                                                                                }}),
                                                                            }};
                                                                            name = "Cassandra Considine";
                                                                            namespace = "incidunt";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("consequuntur") {{
                                                                                    name = "Cathy Huel";
                                                                                }}),
                                                                                add(new OutputArtifact("et") {{
                                                                                    name = "Rose Turner";
                                                                                }}),
                                                                                add(new OutputArtifact("nam") {{
                                                                                    name = "Ms. Olive Tillman";
                                                                                }}),
                                                                            }};
                                                                            region = "vero";
                                                                            roleArn = "aliquid";
                                                                            runOrder = 93459L;
                                                                        }}),
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.APPROVAL, ActionOwnerEnum.AWS, "voluptate", "ipsa");, "minima") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.SOURCE, ActionOwnerEnum.THIRD_PARTY, "tempore", "adipisci") {{
                                                                                category = ActionCategoryEnum.TEST;
                                                                                owner = ActionOwnerEnum.AWS;
                                                                                provider = "distinctio";
                                                                                version = "eligendi";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("consequuntur", "consequatur");
                                                                                put("minus", "quaerat");
                                                                                put("sapiente", "consectetur");
                                                                                put("esse", "blanditiis");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("error") {{
                                                                                    name = "Ismael Lynch DVM";
                                                                                }}),
                                                                                add(new InputArtifact("asperiores") {{
                                                                                    name = "Jody Schuster";
                                                                                }}),
                                                                                add(new InputArtifact("aliquid") {{
                                                                                    name = "Miss Peter Cronin";
                                                                                }}),
                                                                            }};
                                                                            name = "Scott Wehner";
                                                                            namespace = "eius";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("dicta") {{
                                                                                    name = "Gerardo Bartoletti";
                                                                                }}),
                                                                                add(new OutputArtifact("qui") {{
                                                                                    name = "Delores Hermiston IV";
                                                                                }}),
                                                                                add(new OutputArtifact("architecto") {{
                                                                                    name = "Marc Leuschke";
                                                                                }}),
                                                                            }};
                                                                            region = "omnis";
                                                                            roleArn = "tenetur";
                                                                            runOrder = 98478L;
                                                                        }}),
                                                                    }};
                                                                    blockers = new org.openapis.openapi.models.shared.BlockerDeclaration[]{{
                                                                        add(new BlockerDeclaration("aut", BlockerTypeEnum.SCHEDULE) {{
                                                                            name = "Sherry Morar IV";
                                                                            type = BlockerTypeEnum.SCHEDULE;
                                                                        }}),
                                                                    }};
                                                                    name = "Ms. Duane O'Conner";
                                                                }}),
                                                                add(new StageDeclaration(                new org.openapis.openapi.models.shared.ActionDeclaration[]{{
                                                                                    add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.BUILD, ActionOwnerEnum.CUSTOM, "doloremque", "iure");, "ipsa") {{
                                                                                        actionTypeId = new ActionTypeId(ActionCategoryEnum.APPROVAL, ActionOwnerEnum.CUSTOM, "repellendus", "labore") {{
                                                                                            category = ActionCategoryEnum.APPROVAL;
                                                                                            owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                            provider = "atque";
                                                                                            version = "sunt";
                                                                                        }};
                                                                                        configuration = new java.util.HashMap<String, String>() {{
                                                                                            put("doloremque", "repudiandae");
                                                                                            put("dicta", "accusantium");
                                                                                            put("beatae", "dolores");
                                                                                            put("enim", "laboriosam");
                                                                                        }};
                                                                                        inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                            add(new InputArtifact("occaecati") {{
                                                                                                name = "Ross Gusikowski";
                                                                                            }}),
                                                                                        }};
                                                                                        name = "Freddie King";
                                                                                        namespace = "occaecati";
                                                                                        outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                            add(new OutputArtifact("illo") {{
                                                                                                name = "Amelia Harvey";
                                                                                            }}),
                                                                                        }};
                                                                                        region = "corporis";
                                                                                        roleArn = "quidem";
                                                                                        runOrder = 910994L;
                                                                                    }}),
                                                                                    add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.DEPLOY, ActionOwnerEnum.THIRD_PARTY, "accusantium", "repellat");, "doloribus") {{
                                                                                        actionTypeId = new ActionTypeId(ActionCategoryEnum.BUILD, ActionOwnerEnum.CUSTOM, "iure", "necessitatibus") {{
                                                                                            category = ActionCategoryEnum.TEST;
                                                                                            owner = ActionOwnerEnum.AWS;
                                                                                            provider = "molestiae";
                                                                                            version = "eveniet";
                                                                                        }};
                                                                                        configuration = new java.util.HashMap<String, String>() {{
                                                                                            put("laborum", "distinctio");
                                                                                        }};
                                                                                        inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                            add(new InputArtifact("perspiciatis") {{
                                                                                                name = "Jim Hammes II";
                                                                                            }}),
                                                                                            add(new InputArtifact("dolores") {{
                                                                                                name = "Dr. Iris Hodkiewicz";
                                                                                            }}),
                                                                                            add(new InputArtifact("quae") {{
                                                                                                name = "Warren Greenholt";
                                                                                            }}),
                                                                                        }};
                                                                                        name = "Arturo Hagenes";
                                                                                        namespace = "ut";
                                                                                        outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                            add(new OutputArtifact("recusandae") {{
                                                                                                name = "Raquel Larkin";
                                                                                            }}),
                                                                                            add(new OutputArtifact("provident") {{
                                                                                                name = "Sherri Hauck";
                                                                                            }}),
                                                                                            add(new OutputArtifact("mollitia") {{
                                                                                                name = "Marion Boyer";
                                                                                            }}),
                                                                                        }};
                                                                                        region = "provident";
                                                                                        roleArn = "possimus";
                                                                                        runOrder = 659177L;
                                                                                    }}),
                                                                                }}, "ullam") {{
                                                                    actions = new org.openapis.openapi.models.shared.ActionDeclaration[]{{
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.APPROVAL, ActionOwnerEnum.CUSTOM, "ullam", "adipisci");, "cum") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.DEPLOY, ActionOwnerEnum.CUSTOM, "assumenda", "nemo") {{
                                                                                category = ActionCategoryEnum.INVOKE;
                                                                                owner = ActionOwnerEnum.CUSTOM;
                                                                                provider = "commodi";
                                                                                version = "in";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("aliquid", "aperiam");
                                                                                put("cum", "consectetur");
                                                                                put("in", "exercitationem");
                                                                                put("earum", "facere");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("necessitatibus") {{
                                                                                    name = "Ricardo Wisozk";
                                                                                }}),
                                                                                add(new InputArtifact("amet") {{
                                                                                    name = "Katherine Zemlak";
                                                                                }}),
                                                                            }};
                                                                            name = "Courtney Wiegand";
                                                                            namespace = "corporis";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("similique") {{
                                                                                    name = "Melissa Von PhD";
                                                                                }}),
                                                                                add(new OutputArtifact("minima") {{
                                                                                    name = "Kelly Hoeger";
                                                                                }}),
                                                                                add(new OutputArtifact("blanditiis") {{
                                                                                    name = "Wilbur Ferry";
                                                                                }}),
                                                                            }};
                                                                            region = "in";
                                                                            roleArn = "dolore";
                                                                            runOrder = 304468L;
                                                                        }}),
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.TEST, ActionOwnerEnum.AWS, "nobis", "error");, "veniam") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.TEST, ActionOwnerEnum.THIRD_PARTY, "pariatur", "totam") {{
                                                                                category = ActionCategoryEnum.TEST;
                                                                                owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                provider = "hic";
                                                                                version = "nesciunt";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("exercitationem", "nobis");
                                                                                put("sit", "rerum");
                                                                                put("sed", "reiciendis");
                                                                                put("explicabo", "asperiores");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("laborum") {{
                                                                                    name = "Kristy Bernier";
                                                                                }}),
                                                                                add(new InputArtifact("voluptas") {{
                                                                                    name = "Pearl Johnson";
                                                                                }}),
                                                                                add(new InputArtifact("illo") {{
                                                                                    name = "Joe Hoppe";
                                                                                }}),
                                                                            }};
                                                                            name = "Thomas Lockman";
                                                                            namespace = "sed";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("quos") {{
                                                                                    name = "Jana Emard";
                                                                                }}),
                                                                                add(new OutputArtifact("ex") {{
                                                                                    name = "Eddie Goodwin";
                                                                                }}),
                                                                                add(new OutputArtifact("quaerat") {{
                                                                                    name = "Ethel Towne";
                                                                                }}),
                                                                            }};
                                                                            region = "incidunt";
                                                                            roleArn = "ipsam";
                                                                            runOrder = 894864L;
                                                                        }}),
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.SOURCE, ActionOwnerEnum.THIRD_PARTY, "quas", "repudiandae");, "corporis") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.BUILD, ActionOwnerEnum.AWS, "saepe", "numquam") {{
                                                                                category = ActionCategoryEnum.BUILD;
                                                                                owner = ActionOwnerEnum.CUSTOM;
                                                                                provider = "reiciendis";
                                                                                version = "nulla";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("in", "officiis");
                                                                                put("beatae", "laudantium");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("error") {{
                                                                                    name = "Bennie Howe";
                                                                                }}),
                                                                                add(new InputArtifact("nostrum") {{
                                                                                    name = "Rudolph Trantow";
                                                                                }}),
                                                                            }};
                                                                            name = "Lorenzo Lowe";
                                                                            namespace = "atque";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("magnam") {{
                                                                                    name = "Janis Bartell";
                                                                                }}),
                                                                            }};
                                                                            region = "consequatur";
                                                                            roleArn = "esse";
                                                                            runOrder = 372679L;
                                                                        }}),
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.TEST, ActionOwnerEnum.THIRD_PARTY, "quidem", "maxime");, "et") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.SOURCE, ActionOwnerEnum.THIRD_PARTY, "nostrum", "saepe") {{
                                                                                category = ActionCategoryEnum.SOURCE;
                                                                                owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                provider = "ex";
                                                                                version = "sed";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("consequatur", "incidunt");
                                                                                put("reiciendis", "dolorem");
                                                                                put("harum", "dicta");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("nam") {{
                                                                                    name = "Francisco Powlowski";
                                                                                }}),
                                                                            }};
                                                                            name = "Brent Abernathy";
                                                                            namespace = "voluptate";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("perferendis") {{
                                                                                    name = "Rene Skiles";
                                                                                }}),
                                                                                add(new OutputArtifact("praesentium") {{
                                                                                    name = "Rickey Kiehn";
                                                                                }}),
                                                                                add(new OutputArtifact("quasi") {{
                                                                                    name = "Floyd Barrows";
                                                                                }}),
                                                                            }};
                                                                            region = "atque";
                                                                            roleArn = "reprehenderit";
                                                                            runOrder = 991142L;
                                                                        }}),
                                                                    }};
                                                                    blockers = new org.openapis.openapi.models.shared.BlockerDeclaration[]{{
                                                                        add(new BlockerDeclaration("officiis", BlockerTypeEnum.SCHEDULE) {{
                                                                            name = "Angelina Jenkins";
                                                                            type = BlockerTypeEnum.SCHEDULE;
                                                                        }}),
                                                                        add(new BlockerDeclaration("ex", BlockerTypeEnum.SCHEDULE) {{
                                                                            name = "Tomas Mosciski";
                                                                            type = BlockerTypeEnum.SCHEDULE;
                                                                        }}),
                                                                    }};
                                                                    name = "Johnnie Swaniawski";
                                                                }}),
                                                                add(new StageDeclaration(                new org.openapis.openapi.models.shared.ActionDeclaration[]{{
                                                                                    add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.APPROVAL, ActionOwnerEnum.CUSTOM, "harum", "sequi");, "doloribus") {{
                                                                                        actionTypeId = new ActionTypeId(ActionCategoryEnum.TEST, ActionOwnerEnum.AWS, "aliquam", "inventore") {{
                                                                                            category = ActionCategoryEnum.INVOKE;
                                                                                            owner = ActionOwnerEnum.CUSTOM;
                                                                                            provider = "nam";
                                                                                            version = "ipsam";
                                                                                        }};
                                                                                        configuration = new java.util.HashMap<String, String>() {{
                                                                                            put("veritatis", "tempora");
                                                                                            put("dolor", "consequatur");
                                                                                            put("architecto", "sit");
                                                                                        }};
                                                                                        inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                            add(new InputArtifact("ipsam") {{
                                                                                                name = "Mrs. Rebecca Larkin";
                                                                                            }}),
                                                                                            add(new InputArtifact("officiis") {{
                                                                                                name = "Cynthia Macejkovic";
                                                                                            }}),
                                                                                        }};
                                                                                        name = "Jana Cremin";
                                                                                        namespace = "expedita";
                                                                                        outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                            add(new OutputArtifact("autem") {{
                                                                                                name = "Jennie Gutkowski DDS";
                                                                                            }}),
                                                                                            add(new OutputArtifact("necessitatibus") {{
                                                                                                name = "Brent Walter II";
                                                                                            }}),
                                                                                        }};
                                                                                        region = "quasi";
                                                                                        roleArn = "nisi";
                                                                                        runOrder = 871103L;
                                                                                    }}),
                                                                                    add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.INVOKE, ActionOwnerEnum.AWS, "temporibus", "quos");, "commodi") {{
                                                                                        actionTypeId = new ActionTypeId(ActionCategoryEnum.DEPLOY, ActionOwnerEnum.THIRD_PARTY, "officia", "voluptas") {{
                                                                                            category = ActionCategoryEnum.APPROVAL;
                                                                                            owner = ActionOwnerEnum.CUSTOM;
                                                                                            provider = "occaecati";
                                                                                            version = "nemo";
                                                                                        }};
                                                                                        configuration = new java.util.HashMap<String, String>() {{
                                                                                            put("nemo", "quos");
                                                                                            put("eius", "aspernatur");
                                                                                        }};
                                                                                        inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                            add(new InputArtifact("fugiat") {{
                                                                                                name = "Lee Larkin IV";
                                                                                            }}),
                                                                                            add(new InputArtifact("reiciendis") {{
                                                                                                name = "Elsie Cronin V";
                                                                                            }}),
                                                                                        }};
                                                                                        name = "John Monahan";
                                                                                        namespace = "iste";
                                                                                        outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                            add(new OutputArtifact("omnis") {{
                                                                                                name = "Fannie Tillman";
                                                                                            }}),
                                                                                        }};
                                                                                        region = "delectus";
                                                                                        roleArn = "minima";
                                                                                        runOrder = 507636L;
                                                                                    }}),
                                                                                    add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.DEPLOY, ActionOwnerEnum.AWS, "vero", "excepturi");, "eum") {{
                                                                                        actionTypeId = new ActionTypeId(ActionCategoryEnum.BUILD, ActionOwnerEnum.CUSTOM, "vero", "voluptatem") {{
                                                                                            category = ActionCategoryEnum.APPROVAL;
                                                                                            owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                            provider = "totam";
                                                                                            version = "earum";
                                                                                        }};
                                                                                        configuration = new java.util.HashMap<String, String>() {{
                                                                                            put("vel", "alias");
                                                                                            put("quasi", "non");
                                                                                        }};
                                                                                        inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                            add(new InputArtifact("nemo") {{
                                                                                                name = "Bobbie Stokes";
                                                                                            }}),
                                                                                            add(new InputArtifact("impedit") {{
                                                                                                name = "Monique Harvey";
                                                                                            }}),
                                                                                            add(new InputArtifact("debitis") {{
                                                                                                name = "Alonzo Zemlak";
                                                                                            }}),
                                                                                            add(new InputArtifact("consectetur") {{
                                                                                                name = "Eric Schiller";
                                                                                            }}),
                                                                                        }};
                                                                                        name = "Leah Emmerich";
                                                                                        namespace = "soluta";
                                                                                        outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                            add(new OutputArtifact("dignissimos") {{
                                                                                                name = "Theodore Kub";
                                                                                            }}),
                                                                                            add(new OutputArtifact("odit") {{
                                                                                                name = "Angelica Leuschke";
                                                                                            }}),
                                                                                            add(new OutputArtifact("libero") {{
                                                                                                name = "Cecil Gutkowski DDS";
                                                                                            }}),
                                                                                            add(new OutputArtifact("velit") {{
                                                                                                name = "Camille Crist";
                                                                                            }}),
                                                                                        }};
                                                                                        region = "illo";
                                                                                        roleArn = "accusantium";
                                                                                        runOrder = 424663L;
                                                                                    }}),
                                                                                }}, "velit") {{
                                                                    actions = new org.openapis.openapi.models.shared.ActionDeclaration[]{{
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.DEPLOY, ActionOwnerEnum.AWS, "fugiat", "doloremque");, "dicta") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.INVOKE, ActionOwnerEnum.AWS, "voluptatibus", "molestias") {{
                                                                                category = ActionCategoryEnum.INVOKE;
                                                                                owner = ActionOwnerEnum.CUSTOM;
                                                                                provider = "officia";
                                                                                version = "laborum";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("sapiente", "cumque");
                                                                                put("vitae", "rerum");
                                                                                put("tempora", "quis");
                                                                                put("inventore", "fugit");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("eius") {{
                                                                                    name = "Lisa Flatley";
                                                                                }}),
                                                                                add(new InputArtifact("eum") {{
                                                                                    name = "Wilfred Rutherford";
                                                                                }}),
                                                                                add(new InputArtifact("earum") {{
                                                                                    name = "Cathy Breitenberg";
                                                                                }}),
                                                                                add(new InputArtifact("maiores") {{
                                                                                    name = "Dr. Terrell Stanton";
                                                                                }}),
                                                                            }};
                                                                            name = "Gene Sauer";
                                                                            namespace = "fugit";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("consequatur") {{
                                                                                    name = "Philip O'Kon";
                                                                                }}),
                                                                                add(new OutputArtifact("suscipit") {{
                                                                                    name = "Catherine Kuphal";
                                                                                }}),
                                                                                add(new OutputArtifact("necessitatibus") {{
                                                                                    name = "Joyce Cummings";
                                                                                }}),
                                                                                add(new OutputArtifact("esse") {{
                                                                                    name = "Anita Kovacek IV";
                                                                                }}),
                                                                            }};
                                                                            region = "praesentium";
                                                                            roleArn = "maiores";
                                                                            runOrder = 967260L;
                                                                        }}),
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.SOURCE, ActionOwnerEnum.CUSTOM, "pariatur", "debitis");, "voluptatem") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.BUILD, ActionOwnerEnum.THIRD_PARTY, "ipsa", "laborum") {{
                                                                                category = ActionCategoryEnum.DEPLOY;
                                                                                owner = ActionOwnerEnum.AWS;
                                                                                provider = "esse";
                                                                                version = "ex";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("nostrum", "fugiat");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("voluptas") {{
                                                                                    name = "Brandi Homenick III";
                                                                                }}),
                                                                                add(new InputArtifact("voluptates") {{
                                                                                    name = "Alfonso Bernier";
                                                                                }}),
                                                                                add(new InputArtifact("enim") {{
                                                                                    name = "Cameron Reinger";
                                                                                }}),
                                                                            }};
                                                                            name = "Estelle Jakubowski";
                                                                            namespace = "ut";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("beatae") {{
                                                                                    name = "Donald MacGyver";
                                                                                }}),
                                                                                add(new OutputArtifact("culpa") {{
                                                                                    name = "Arturo Bogan";
                                                                                }}),
                                                                            }};
                                                                            region = "voluptatem";
                                                                            roleArn = "sapiente";
                                                                            runOrder = 889288L;
                                                                        }}),
                                                                    }};
                                                                    blockers = new org.openapis.openapi.models.shared.BlockerDeclaration[]{{
                                                                        add(new BlockerDeclaration("minus", BlockerTypeEnum.SCHEDULE) {{
                                                                            name = "Darin Jakubowski";
                                                                            type = BlockerTypeEnum.SCHEDULE;
                                                                        }}),
                                                                    }};
                                                                    name = "Ollie Dicki PhD";
                                                                }}),
                                                            }}) {{
                                                artifactStore = new ArtifactStore("ut", ArtifactStoreTypeEnum.S3) {{
                                                    encryptionKey = new EncryptionKey("perspiciatis", EncryptionKeyTypeEnum.KMS);;
                                                }};;
                                                artifactStores = new java.util.HashMap<String, org.openapis.openapi.models.shared.ArtifactStore>() {{
                                                    put("dicta", new ArtifactStore("corporis", ArtifactStoreTypeEnum.S3) {{
                                                        encryptionKey = new EncryptionKey("impedit", EncryptionKeyTypeEnum.KMS) {{
                                                            id = "cf9e06e3-a437-4000-ae6b-6bc9b8f759ea";
                                                            type = EncryptionKeyTypeEnum.KMS;
                                                        }};
                                                        location = "ipsam";
                                                        type = ArtifactStoreTypeEnum.S3;
                                                    }});
                                                    put("est", new ArtifactStore("distinctio", ArtifactStoreTypeEnum.S3) {{
                                                        encryptionKey = new EncryptionKey("unde", EncryptionKeyTypeEnum.KMS) {{
                                                            id = "9741d311-3529-465b-b8a7-202611435e13";
                                                            type = EncryptionKeyTypeEnum.KMS;
                                                        }};
                                                        location = "nulla";
                                                        type = ArtifactStoreTypeEnum.S3;
                                                    }});
                                                    put("maxime", new ArtifactStore("accusamus", ArtifactStoreTypeEnum.S3) {{
                                                        encryptionKey = new EncryptionKey("molestiae", EncryptionKeyTypeEnum.KMS) {{
                                                            id = "2259b1ab-da8c-4070-a108-4cb0672d1ad8";
                                                            type = EncryptionKeyTypeEnum.KMS;
                                                        }};
                                                        location = "provident";
                                                        type = ArtifactStoreTypeEnum.S3;
                                                    }});
                                                    put("necessitatibus", new ArtifactStore("quidem", ArtifactStoreTypeEnum.S3) {{
                                                        encryptionKey = new EncryptionKey("similique", EncryptionKeyTypeEnum.KMS) {{
                                                            id = "b9665b85-efbd-402b-ae0b-e2d782259e3e";
                                                            type = EncryptionKeyTypeEnum.KMS;
                                                        }};
                                                        location = "ut";
                                                        type = ArtifactStoreTypeEnum.S3;
                                                    }});
                                                }};
                                                version = 339631L;
                                            }};) {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("delectus", "cupiditate") {{
                                        key = "unde";
                                        value = "molestiae";
                                    }}),
                                }};
                            }};, CreatePipelineXAmzTargetEnum.CODE_PIPELINE20150709_CREATE_PIPELINE) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "numquam";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "at";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "dignissimos";
            }};            

            CreatePipelineResponse res = sdk.sdk.createPipeline(req);

            if (res.createPipelineOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomActionType

<p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action fails after the action is marked for deletion. Used for custom actions only.</p> <important> <p>To re-create a custom action after it has been deleted you must use a string in the version field that has never been used before. This string can be an incremented version number, for example. To restore a deleted custom action, use a JSON file that is identical to the deleted action, including the original string in the version field.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomActionTypeRequest;
import org.openapis.openapi.models.operations.DeleteCustomActionTypeResponse;
import org.openapis.openapi.models.operations.DeleteCustomActionTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionCategoryEnum;
import org.openapis.openapi.models.shared.DeleteCustomActionTypeInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCustomActionTypeRequest req = new DeleteCustomActionTypeRequest(                new DeleteCustomActionTypeInput(ActionCategoryEnum.APPROVAL, "corporis", "qui");, DeleteCustomActionTypeXAmzTargetEnum.CODE_PIPELINE20150709_DELETE_CUSTOM_ACTION_TYPE) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "cupiditate";
                xAmzDate = "minima";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "neque";
            }};            

            DeleteCustomActionTypeResponse res = sdk.sdk.deleteCustomActionType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePipeline

Deletes the specified pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePipelineRequest;
import org.openapis.openapi.models.operations.DeletePipelineResponse;
import org.openapis.openapi.models.operations.DeletePipelineXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePipelineInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePipelineRequest req = new DeletePipelineRequest(                new DeletePipelineInput("minus");, DeletePipelineXAmzTargetEnum.CODE_PIPELINE20150709_DELETE_PIPELINE) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "modi";
                xAmzCredential = "corporis";
                xAmzDate = "magnam";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "tempore";
            }};            

            DeletePipelineResponse res = sdk.sdk.deletePipeline(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWebhook

Deletes a previously created webhook by name. Deleting the webhook stops AWS CodePipeline from starting a pipeline every time an external event occurs. The API returns successfully when trying to delete a webhook that is already deleted. If a deleted webhook is re-created by calling PutWebhook with the same name, it will have a different URL.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhookRequest;
import org.openapis.openapi.models.operations.DeleteWebhookResponse;
import org.openapis.openapi.models.operations.DeleteWebhookXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteWebhookInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWebhookRequest req = new DeleteWebhookRequest(                new DeleteWebhookInput("libero");, DeleteWebhookXAmzTargetEnum.CODE_PIPELINE20150709_DELETE_WEBHOOK) {{
                xAmzAlgorithm = "ratione";
                xAmzContentSha256 = "labore";
                xAmzCredential = "totam";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "velit";
            }};            

            DeleteWebhookResponse res = sdk.sdk.deleteWebhook(req);

            if (res.deleteWebhookOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterWebhookWithThirdParty

Removes the connection between the webhook that was created by CodePipeline and the external tool with events to be detected. Currently supported only for webhooks that target an action type of GitHub.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterWebhookWithThirdPartyRequest;
import org.openapis.openapi.models.operations.DeregisterWebhookWithThirdPartyResponse;
import org.openapis.openapi.models.operations.DeregisterWebhookWithThirdPartyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterWebhookWithThirdPartyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterWebhookWithThirdPartyRequest req = new DeregisterWebhookWithThirdPartyRequest(                new DeregisterWebhookWithThirdPartyInput() {{
                                webhookName = "fuga";
                            }};, DeregisterWebhookWithThirdPartyXAmzTargetEnum.CODE_PIPELINE20150709_DEREGISTER_WEBHOOK_WITH_THIRD_PARTY) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "est";
                xAmzCredential = "impedit";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "odit";
            }};            

            DeregisterWebhookWithThirdPartyResponse res = sdk.sdk.deregisterWebhookWithThirdParty(req);

            if (res.deregisterWebhookWithThirdPartyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableStageTransition

Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableStageTransitionRequest;
import org.openapis.openapi.models.operations.DisableStageTransitionResponse;
import org.openapis.openapi.models.operations.DisableStageTransitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisableStageTransitionInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StageTransitionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableStageTransitionRequest req = new DisableStageTransitionRequest(                new DisableStageTransitionInput("pariatur", "nemo", "reprehenderit", StageTransitionTypeEnum.INBOUND);, DisableStageTransitionXAmzTargetEnum.CODE_PIPELINE20150709_DISABLE_STAGE_TRANSITION) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "minima";
                xAmzCredential = "in";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "error";
            }};            

            DisableStageTransitionResponse res = sdk.sdk.disableStageTransition(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableStageTransition

Enables artifacts in a pipeline to transition to a stage in a pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableStageTransitionRequest;
import org.openapis.openapi.models.operations.EnableStageTransitionResponse;
import org.openapis.openapi.models.operations.EnableStageTransitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.EnableStageTransitionInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StageTransitionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableStageTransitionRequest req = new EnableStageTransitionRequest(                new EnableStageTransitionInput("ducimus", "voluptate", StageTransitionTypeEnum.OUTBOUND);, EnableStageTransitionXAmzTargetEnum.CODE_PIPELINE20150709_ENABLE_STAGE_TRANSITION) {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "similique";
                xAmzCredential = "optio";
                xAmzDate = "ex";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "officiis";
            }};            

            EnableStageTransitionResponse res = sdk.sdk.enableStageTransition(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionType

Returns information about an action type created for an external provider, where the action is to be used by customers of the external provider. The action can be created with any supported integration model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionTypeRequest;
import org.openapis.openapi.models.operations.GetActionTypeResponse;
import org.openapis.openapi.models.operations.GetActionTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionCategoryEnum;
import org.openapis.openapi.models.shared.GetActionTypeInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetActionTypeRequest req = new GetActionTypeRequest(                new GetActionTypeInput(ActionCategoryEnum.INVOKE, "exercitationem", "quam", "dolorem");, GetActionTypeXAmzTargetEnum.CODE_PIPELINE20150709_GET_ACTION_TYPE) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "sint";
                xAmzDate = "vero";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "cum";
            }};            

            GetActionTypeResponse res = sdk.sdk.getActionType(req);

            if (res.getActionTypeOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJobDetails

<p>Returns information about a job. Used for custom actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobDetailsRequest;
import org.openapis.openapi.models.operations.GetJobDetailsResponse;
import org.openapis.openapi.models.operations.GetJobDetailsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetJobDetailsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetJobDetailsRequest req = new GetJobDetailsRequest(                new GetJobDetailsInput("earum");, GetJobDetailsXAmzTargetEnum.CODE_PIPELINE20150709_GET_JOB_DETAILS) {{
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "animi";
                xAmzCredential = "dolores";
                xAmzDate = "nam";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            GetJobDetailsResponse res = sdk.sdk.getJobDetails(req);

            if (res.getJobDetailsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPipeline

Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with <a>UpdatePipeline</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineRequest;
import org.openapis.openapi.models.operations.GetPipelineResponse;
import org.openapis.openapi.models.operations.GetPipelineXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetPipelineInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPipelineRequest req = new GetPipelineRequest(                new GetPipelineInput("ipsa") {{
                                version = 497357L;
                            }};, GetPipelineXAmzTargetEnum.CODE_PIPELINE20150709_GET_PIPELINE) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "quasi";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "excepturi";
            }};            

            GetPipelineResponse res = sdk.sdk.getPipeline(req);

            if (res.getPipelineOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPipelineExecution

Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineExecutionRequest;
import org.openapis.openapi.models.operations.GetPipelineExecutionResponse;
import org.openapis.openapi.models.operations.GetPipelineExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetPipelineExecutionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPipelineExecutionRequest req = new GetPipelineExecutionRequest(                new GetPipelineExecutionInput("nemo", "aliquam");, GetPipelineExecutionXAmzTargetEnum.CODE_PIPELINE20150709_GET_PIPELINE_EXECUTION) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "eligendi";
                xAmzDate = "sint";
                xAmzSecurityToken = "enim";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "animi";
            }};            

            GetPipelineExecutionResponse res = sdk.sdk.getPipelineExecution(req);

            if (res.getPipelineExecutionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPipelineState

<p>Returns information about the state of a pipeline, including the stages and actions.</p> <note> <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code> fields indicate the source revision information, such as the commit ID, for the current state.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineStateRequest;
import org.openapis.openapi.models.operations.GetPipelineStateResponse;
import org.openapis.openapi.models.operations.GetPipelineStateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetPipelineStateInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPipelineStateRequest req = new GetPipelineStateRequest(                new GetPipelineStateInput("totam");, GetPipelineStateXAmzTargetEnum.CODE_PIPELINE20150709_GET_PIPELINE_STATE) {{
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "odio";
                xAmzCredential = "eaque";
                xAmzDate = "saepe";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "iste";
            }};            

            GetPipelineStateResponse res = sdk.sdk.getPipelineState(req);

            if (res.getPipelineStateOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getThirdPartyJobDetails

<p>Requests the details of a job for a third party action. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetThirdPartyJobDetailsRequest;
import org.openapis.openapi.models.operations.GetThirdPartyJobDetailsResponse;
import org.openapis.openapi.models.operations.GetThirdPartyJobDetailsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetThirdPartyJobDetailsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetThirdPartyJobDetailsRequest req = new GetThirdPartyJobDetailsRequest(                new GetThirdPartyJobDetailsInput("tempore", "libero");, GetThirdPartyJobDetailsXAmzTargetEnum.CODE_PIPELINE20150709_GET_THIRD_PARTY_JOB_DETAILS) {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "delectus";
                xAmzDate = "impedit";
                xAmzSecurityToken = "cum";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "adipisci";
            }};            

            GetThirdPartyJobDetailsResponse res = sdk.sdk.getThirdPartyJobDetails(req);

            if (res.getThirdPartyJobDetailsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listActionExecutions

Lists the action executions that have occurred in a pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListActionExecutionsRequest;
import org.openapis.openapi.models.operations.ListActionExecutionsResponse;
import org.openapis.openapi.models.operations.ListActionExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionExecutionFilter;
import org.openapis.openapi.models.shared.ListActionExecutionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListActionExecutionsRequest req = new ListActionExecutionsRequest(                new ListActionExecutionsInput("deserunt") {{
                                filter = new ActionExecutionFilter() {{
                                    pipelineExecutionId = "doloremque";
                                }};;
                                maxResults = 339756L;
                                nextToken = "veniam";
                            }};, ListActionExecutionsXAmzTargetEnum.CODE_PIPELINE20150709_LIST_ACTION_EXECUTIONS) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "cupiditate";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "non";
                maxResults = "magnam";
                nextToken = "itaque";
            }};            

            ListActionExecutionsResponse res = sdk.sdk.listActionExecutions(req);

            if (res.listActionExecutionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listActionTypes

Gets a summary of all AWS CodePipeline action types associated with your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListActionTypesRequest;
import org.openapis.openapi.models.operations.ListActionTypesResponse;
import org.openapis.openapi.models.operations.ListActionTypesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionOwnerEnum;
import org.openapis.openapi.models.shared.ListActionTypesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListActionTypesRequest req = new ListActionTypesRequest(                new ListActionTypesInput() {{
                                actionOwnerFilter = ActionOwnerEnum.CUSTOM;
                                nextToken = "veniam";
                                regionFilter = "consequuntur";
                            }};, ListActionTypesXAmzTargetEnum.CODE_PIPELINE20150709_LIST_ACTION_TYPES) {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "odit";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "amet";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "ab";
                nextToken = "velit";
            }};            

            ListActionTypesResponse res = sdk.sdk.listActionTypes(req);

            if (res.listActionTypesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPipelineExecutions

Gets a summary of the most recent executions for a pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPipelineExecutionsRequest;
import org.openapis.openapi.models.operations.ListPipelineExecutionsResponse;
import org.openapis.openapi.models.operations.ListPipelineExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPipelineExecutionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPipelineExecutionsRequest req = new ListPipelineExecutionsRequest(                new ListPipelineExecutionsInput("tempore") {{
                                maxResults = 395233L;
                                nextToken = "voluptatibus";
                            }};, ListPipelineExecutionsXAmzTargetEnum.CODE_PIPELINE20150709_LIST_PIPELINE_EXECUTIONS) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "distinctio";
                xAmzDate = "nisi";
                xAmzSecurityToken = "quis";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "libero";
                maxResults = "minus";
                nextToken = "facere";
            }};            

            ListPipelineExecutionsResponse res = sdk.sdk.listPipelineExecutions(req);

            if (res.listPipelineExecutionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPipelines

Gets a summary of all of the pipelines associated with your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPipelinesRequest;
import org.openapis.openapi.models.operations.ListPipelinesResponse;
import org.openapis.openapi.models.operations.ListPipelinesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPipelinesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPipelinesRequest req = new ListPipelinesRequest(                new ListPipelinesInput() {{
                                maxResults = 217663L;
                                nextToken = "ad";
                            }};, ListPipelinesXAmzTargetEnum.CODE_PIPELINE20150709_LIST_PIPELINES) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "consequuntur";
                xAmzDate = "debitis";
                xAmzSecurityToken = "labore";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "eos";
                maxResults = "reprehenderit";
                nextToken = "nostrum";
            }};            

            ListPipelinesResponse res = sdk.sdk.listPipelines(req);

            if (res.listPipelinesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Gets the set of key-value pairs (metadata) that are used to manage the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceInput("iusto") {{
                                maxResults = 664965L;
                                nextToken = "rem";
                            }};, ListTagsForResourceXAmzTargetEnum.CODE_PIPELINE20150709_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "unde";
                xAmzDate = "officiis";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "dicta";
                maxResults = "error";
                nextToken = "porro";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWebhooks

Gets a listing of all the webhooks in this AWS Region for this account. The output lists all webhooks and includes the webhook URL and ARN and the configuration for each webhook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWebhooksRequest;
import org.openapis.openapi.models.operations.ListWebhooksResponse;
import org.openapis.openapi.models.operations.ListWebhooksXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListWebhooksInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWebhooksRequest req = new ListWebhooksRequest(                new ListWebhooksInput() {{
                                maxResults = 491591L;
                                nextToken = "esse";
                            }};, ListWebhooksXAmzTargetEnum.CODE_PIPELINE20150709_LIST_WEBHOOKS) {{
                maxResults = "fugiat";
                nextToken = "ad";
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "enim";
                xAmzCredential = "delectus";
                xAmzDate = "iusto";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "illo";
            }};            

            ListWebhooksResponse res = sdk.sdk.listWebhooks(req);

            if (res.listWebhooksOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pollForJobs

<p>Returns information about any jobs for AWS CodePipeline to act on. <code>PollForJobs</code> is valid only for action types with "Custom" in the owner field. If the action type contains "AWS" or "ThirdParty" in the owner field, the <code>PollForJobs</code> action returns an error.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PollForJobsRequest;
import org.openapis.openapi.models.operations.PollForJobsResponse;
import org.openapis.openapi.models.operations.PollForJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionCategoryEnum;
import org.openapis.openapi.models.shared.ActionOwnerEnum;
import org.openapis.openapi.models.shared.ActionTypeId;
import org.openapis.openapi.models.shared.PollForJobsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PollForJobsRequest req = new PollForJobsRequest(                new PollForJobsInput(                new ActionTypeId(ActionCategoryEnum.BUILD, ActionOwnerEnum.CUSTOM, "saepe", "tempore");) {{
                                maxBatchSize = 334018L;
                                queryParam = new java.util.HashMap<String, String>() {{
                                    put("reiciendis", "earum");
                                }};
                            }};, PollForJobsXAmzTargetEnum.CODE_PIPELINE20150709_POLL_FOR_JOBS) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "nemo";
                xAmzDate = "repellat";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "nihil";
            }};            

            PollForJobsResponse res = sdk.sdk.pollForJobs(req);

            if (res.pollForJobsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pollForThirdPartyJobs

<p>Determines whether there are any third party jobs for a job worker to act on. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PollForThirdPartyJobsRequest;
import org.openapis.openapi.models.operations.PollForThirdPartyJobsResponse;
import org.openapis.openapi.models.operations.PollForThirdPartyJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionCategoryEnum;
import org.openapis.openapi.models.shared.ActionOwnerEnum;
import org.openapis.openapi.models.shared.ActionTypeId;
import org.openapis.openapi.models.shared.PollForThirdPartyJobsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PollForThirdPartyJobsRequest req = new PollForThirdPartyJobsRequest(                new PollForThirdPartyJobsInput(                new ActionTypeId(ActionCategoryEnum.SOURCE, ActionOwnerEnum.AWS, "assumenda", "aliquam");) {{
                                maxBatchSize = 790463L;
                            }};, PollForThirdPartyJobsXAmzTargetEnum.CODE_PIPELINE20150709_POLL_FOR_THIRD_PARTY_JOBS) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "repudiandae";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "nam";
            }};            

            PollForThirdPartyJobsResponse res = sdk.sdk.pollForThirdPartyJobs(req);

            if (res.pollForThirdPartyJobsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putActionRevision

Provides information to AWS CodePipeline about new revisions to a source.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutActionRevisionRequest;
import org.openapis.openapi.models.operations.PutActionRevisionResponse;
import org.openapis.openapi.models.operations.PutActionRevisionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionRevision;
import org.openapis.openapi.models.shared.PutActionRevisionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutActionRevisionRequest req = new PutActionRevisionRequest(                new PutActionRevisionInput("quas",                 new ActionRevision(OffsetDateTime.parse("2021-02-26T17:19:48.572Z"), "rerum", "dignissimos");, "corporis", "vero");, PutActionRevisionXAmzTargetEnum.CODE_PIPELINE20150709_PUT_ACTION_REVISION) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "iure";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "commodi";
            }};            

            PutActionRevisionResponse res = sdk.sdk.putActionRevision(req);

            if (res.putActionRevisionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putApprovalResult

Provides the response to a manual approval request to AWS CodePipeline. Valid responses include Approved and Rejected.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutApprovalResultRequest;
import org.openapis.openapi.models.operations.PutApprovalResultResponse;
import org.openapis.openapi.models.operations.PutApprovalResultXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApprovalResult;
import org.openapis.openapi.models.shared.ApprovalStatusEnum;
import org.openapis.openapi.models.shared.PutApprovalResultInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutApprovalResultRequest req = new PutApprovalResultRequest(                new PutApprovalResultInput("voluptatem", "ad",                 new ApprovalResult(ApprovalStatusEnum.APPROVED, "amet");, "illum", "praesentium");, PutApprovalResultXAmzTargetEnum.CODE_PIPELINE20150709_PUT_APPROVAL_RESULT) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "cum";
                xAmzCredential = "amet";
                xAmzDate = "quasi";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "doloremque";
            }};            

            PutApprovalResultResponse res = sdk.sdk.putApprovalResult(req);

            if (res.putApprovalResultOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putJobFailureResult

Represents the failure of a job as returned to the pipeline by a job worker. Used for custom actions only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutJobFailureResultRequest;
import org.openapis.openapi.models.operations.PutJobFailureResultResponse;
import org.openapis.openapi.models.operations.PutJobFailureResultXAmzTargetEnum;
import org.openapis.openapi.models.shared.FailureDetails;
import org.openapis.openapi.models.shared.FailureTypeEnum;
import org.openapis.openapi.models.shared.PutJobFailureResultInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutJobFailureResultRequest req = new PutJobFailureResultRequest(                new PutJobFailureResultInput(                new FailureDetails("iusto", FailureTypeEnum.CONFIGURATION_ERROR) {{
                                                externalExecutionId = "provident";
                                            }};, "dolorum");, PutJobFailureResultXAmzTargetEnum.CODE_PIPELINE20150709_PUT_JOB_FAILURE_RESULT) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "provident";
                xAmzCredential = "repudiandae";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "itaque";
            }};            

            PutJobFailureResultResponse res = sdk.sdk.putJobFailureResult(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putJobSuccessResult

Represents the success of a job as returned to the pipeline by a job worker. Used for custom actions only.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutJobSuccessResultRequest;
import org.openapis.openapi.models.operations.PutJobSuccessResultResponse;
import org.openapis.openapi.models.operations.PutJobSuccessResultXAmzTargetEnum;
import org.openapis.openapi.models.shared.CurrentRevision;
import org.openapis.openapi.models.shared.ExecutionDetails;
import org.openapis.openapi.models.shared.PutJobSuccessResultInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutJobSuccessResultRequest req = new PutJobSuccessResultRequest(                new PutJobSuccessResultInput("corrupti") {{
                                continuationToken = "aperiam";
                                currentRevision = new CurrentRevision("sint", "accusamus") {{
                                    created = OffsetDateTime.parse("2022-06-25T04:05:11.831Z");
                                    revisionSummary = "dicta";
                                }};;
                                executionDetails = new ExecutionDetails() {{
                                    externalExecutionId = "voluptatem";
                                    percentComplete = 244376L;
                                    summary = "dolor";
                                }};;
                                outputVariables = new java.util.HashMap<String, String>() {{
                                    put("a", "dolor");
                                }};
                            }};, PutJobSuccessResultXAmzTargetEnum.CODE_PIPELINE20150709_PUT_JOB_SUCCESS_RESULT) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "atque";
                xAmzCredential = "beatae";
                xAmzDate = "at";
                xAmzSecurityToken = "labore";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "esse";
            }};            

            PutJobSuccessResultResponse res = sdk.sdk.putJobSuccessResult(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putThirdPartyJobFailureResult

Represents the failure of a third party job as returned to the pipeline by a job worker. Used for partner actions only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutThirdPartyJobFailureResultRequest;
import org.openapis.openapi.models.operations.PutThirdPartyJobFailureResultResponse;
import org.openapis.openapi.models.operations.PutThirdPartyJobFailureResultXAmzTargetEnum;
import org.openapis.openapi.models.shared.FailureDetails;
import org.openapis.openapi.models.shared.FailureTypeEnum;
import org.openapis.openapi.models.shared.PutThirdPartyJobFailureResultInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutThirdPartyJobFailureResultRequest req = new PutThirdPartyJobFailureResultRequest(                new PutThirdPartyJobFailureResultInput("perferendis",                 new FailureDetails("rerum", FailureTypeEnum.PERMISSION_ERROR) {{
                                                externalExecutionId = "aperiam";
                                            }};, "dignissimos");, PutThirdPartyJobFailureResultXAmzTargetEnum.CODE_PIPELINE20150709_PUT_THIRD_PARTY_JOB_FAILURE_RESULT) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "velit";
                xAmzCredential = "porro";
                xAmzDate = "provident";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "dignissimos";
            }};            

            PutThirdPartyJobFailureResultResponse res = sdk.sdk.putThirdPartyJobFailureResult(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putThirdPartyJobSuccessResult

Represents the success of a third party job as returned to the pipeline by a job worker. Used for partner actions only.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutThirdPartyJobSuccessResultRequest;
import org.openapis.openapi.models.operations.PutThirdPartyJobSuccessResultResponse;
import org.openapis.openapi.models.operations.PutThirdPartyJobSuccessResultXAmzTargetEnum;
import org.openapis.openapi.models.shared.CurrentRevision;
import org.openapis.openapi.models.shared.ExecutionDetails;
import org.openapis.openapi.models.shared.PutThirdPartyJobSuccessResultInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutThirdPartyJobSuccessResultRequest req = new PutThirdPartyJobSuccessResultRequest(                new PutThirdPartyJobSuccessResultInput("soluta", "natus") {{
                                continuationToken = "temporibus";
                                currentRevision = new CurrentRevision("officia", "amet") {{
                                    created = OffsetDateTime.parse("2022-08-07T07:49:22.459Z");
                                    revisionSummary = "quo";
                                }};;
                                executionDetails = new ExecutionDetails() {{
                                    externalExecutionId = "itaque";
                                    percentComplete = 848346L;
                                    summary = "laborum";
                                }};;
                            }};, PutThirdPartyJobSuccessResultXAmzTargetEnum.CODE_PIPELINE20150709_PUT_THIRD_PARTY_JOB_SUCCESS_RESULT) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "vero";
                xAmzCredential = "qui";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "explicabo";
            }};            

            PutThirdPartyJobSuccessResultResponse res = sdk.sdk.putThirdPartyJobSuccessResult(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putWebhook

Defines a webhook and returns a unique webhook URL generated by CodePipeline. This URL can be supplied to third party source hosting providers to call every time there's a code change. When CodePipeline receives a POST request on this URL, the pipeline defined in the webhook is started as long as the POST request satisfied the authentication and filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty and DeregisterWebhookWithThirdParty APIs can be used to automatically configure supported third parties to call the generated webhook URL.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutWebhookRequest;
import org.openapis.openapi.models.operations.PutWebhookResponse;
import org.openapis.openapi.models.operations.PutWebhookXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutWebhookInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.WebhookAuthConfiguration;
import org.openapis.openapi.models.shared.WebhookAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.WebhookDefinition;
import org.openapis.openapi.models.shared.WebhookFilterRule;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutWebhookRequest req = new PutWebhookRequest(                new PutWebhookInput(                new WebhookDefinition(WebhookAuthenticationTypeEnum.IP,                 new WebhookAuthConfiguration() {{
                                                                allowedIPRange = "non";
                                                                secretToken = "ab";
                                                            }};,                 new org.openapis.openapi.models.shared.WebhookFilterRule[]{{
                                                                add(new WebhookFilterRule("delectus") {{
                                                                    jsonPath = "hic";
                                                                    matchEquals = "deserunt";
                                                                }}),
                                                            }}, "non", "distinctio", "in");) {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("repudiandae", "modi") {{
                                        key = "labore";
                                        value = "numquam";
                                    }}),
                                    add(new Tag("accusamus", "rem") {{
                                        key = "in";
                                        value = "explicabo";
                                    }}),
                                }};
                            }};, PutWebhookXAmzTargetEnum.CODE_PIPELINE20150709_PUT_WEBHOOK) {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "odit";
                xAmzCredential = "deleniti";
                xAmzDate = "enim";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "minima";
            }};            

            PutWebhookResponse res = sdk.sdk.putWebhook(req);

            if (res.putWebhookOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerWebhookWithThirdParty

Configures a connection between the webhook that was created and the external tool with events to be detected.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterWebhookWithThirdPartyRequest;
import org.openapis.openapi.models.operations.RegisterWebhookWithThirdPartyResponse;
import org.openapis.openapi.models.operations.RegisterWebhookWithThirdPartyXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterWebhookWithThirdPartyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterWebhookWithThirdPartyRequest req = new RegisterWebhookWithThirdPartyRequest(                new RegisterWebhookWithThirdPartyInput() {{
                                webhookName = "magnam";
                            }};, RegisterWebhookWithThirdPartyXAmzTargetEnum.CODE_PIPELINE20150709_REGISTER_WEBHOOK_WITH_THIRD_PARTY) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "modi";
                xAmzCredential = "eum";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "fugiat";
            }};            

            RegisterWebhookWithThirdPartyResponse res = sdk.sdk.registerWebhookWithThirdParty(req);

            if (res.registerWebhookWithThirdPartyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retryStageExecution

Resumes the pipeline execution by retrying the last failed actions in a stage. You can retry a stage immediately if any of the actions in the stage fail. When you retry, all actions that are still in progress continue working, and failed actions are triggered again.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetryStageExecutionRequest;
import org.openapis.openapi.models.operations.RetryStageExecutionResponse;
import org.openapis.openapi.models.operations.RetryStageExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.RetryStageExecutionInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StageRetryModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetryStageExecutionRequest req = new RetryStageExecutionRequest(                new RetryStageExecutionInput("molestiae", "veniam", StageRetryModeEnum.FAILED_ACTIONS, "reiciendis");, RetryStageExecutionXAmzTargetEnum.CODE_PIPELINE20150709_RETRY_STAGE_EXECUTION) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "modi";
                xAmzCredential = "aut";
                xAmzDate = "aut";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "commodi";
            }};            

            RetryStageExecutionResponse res = sdk.sdk.retryStageExecution(req);

            if (res.retryStageExecutionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startPipelineExecution

Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartPipelineExecutionRequest;
import org.openapis.openapi.models.operations.StartPipelineExecutionResponse;
import org.openapis.openapi.models.operations.StartPipelineExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartPipelineExecutionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartPipelineExecutionRequest req = new StartPipelineExecutionRequest(                new StartPipelineExecutionInput("dolorum") {{
                                clientRequestToken = "possimus";
                            }};, StartPipelineExecutionXAmzTargetEnum.CODE_PIPELINE20150709_START_PIPELINE_EXECUTION) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "nesciunt";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "sunt";
            }};            

            StartPipelineExecutionResponse res = sdk.sdk.startPipelineExecution(req);

            if (res.startPipelineExecutionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPipelineExecution

Stops the specified pipeline execution. You choose to either stop the pipeline execution by completing in-progress actions without starting subsequent actions, or by abandoning in-progress actions. While completing or abandoning in-progress actions, the pipeline execution is in a <code>Stopping</code> state. After all in-progress actions are completed or abandoned, the pipeline execution is in a <code>Stopped</code> state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPipelineExecutionRequest;
import org.openapis.openapi.models.operations.StopPipelineExecutionResponse;
import org.openapis.openapi.models.operations.StopPipelineExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopPipelineExecutionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopPipelineExecutionRequest req = new StopPipelineExecutionRequest(                new StopPipelineExecutionInput("iusto", "quas") {{
                                abandon = false;
                                reason = "et";
                            }};, StopPipelineExecutionXAmzTargetEnum.CODE_PIPELINE20150709_STOP_PIPELINE_EXECUTION) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "amet";
                xAmzCredential = "autem";
                xAmzDate = "fuga";
                xAmzSecurityToken = "alias";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "aut";
            }};            

            StopPipelineExecutionResponse res = sdk.sdk.stopPipelineExecution(req);

            if (res.stopPipelineExecutionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceInput("laudantium",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("eaque", "saepe") {{
                                                    key = "veritatis";
                                                    value = "quae";
                                                }}),
                                                add(new Tag("nulla", "officia") {{
                                                    key = "delectus";
                                                    value = "mollitia";
                                                }}),
                                                add(new Tag("alias", "eveniet") {{
                                                    key = "sed";
                                                    value = "voluptatem";
                                                }}),
                                                add(new Tag("incidunt", "qui") {{
                                                    key = "hic";
                                                    value = "voluptatem";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.CODE_PIPELINE20150709_TAG_RESOURCE) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "harum";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "modi";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes tags from an AWS resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceInput("voluptatibus",                 new String[]{{
                                                add("officia"),
                                                add("libero"),
                                                add("totam"),
                                            }});, UntagResourceXAmzTargetEnum.CODE_PIPELINE20150709_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "ea";
                xAmzDate = "impedit";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "velit";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateActionType

Updates an action type that was created with any supported integration model, where the action type is to be used by customers of the action type provider. Use a JSON file with the action definition and <code>UpdateActionType</code> to provide the full structure.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateActionTypeRequest;
import org.openapis.openapi.models.operations.UpdateActionTypeResponse;
import org.openapis.openapi.models.operations.UpdateActionTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionCategoryEnum;
import org.openapis.openapi.models.shared.ActionTypeArtifactDetails;
import org.openapis.openapi.models.shared.ActionTypeDeclaration;
import org.openapis.openapi.models.shared.ActionTypeExecutor;
import org.openapis.openapi.models.shared.ActionTypeIdentifier;
import org.openapis.openapi.models.shared.ActionTypePermissions;
import org.openapis.openapi.models.shared.ActionTypeUrls;
import org.openapis.openapi.models.shared.ExecutorConfiguration;
import org.openapis.openapi.models.shared.ExecutorTypeEnum;
import org.openapis.openapi.models.shared.JobWorkerExecutorConfiguration;
import org.openapis.openapi.models.shared.LambdaExecutorConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateActionTypeInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateActionTypeRequest req = new UpdateActionTypeRequest(                new UpdateActionTypeInput(                new ActionTypeDeclaration(                new ActionTypeExecutor(                new ExecutorConfiguration() {{
                                                                                jobWorkerExecutorConfiguration = new JobWorkerExecutorConfiguration() {{
                                                                                    pollingAccounts = new String[]{{
                                                                                        add("nulla"),
                                                                                        add("laborum"),
                                                                                        add("natus"),
                                                                                        add("accusamus"),
                                                                                    }};
                                                                                    pollingServicePrincipals = new String[]{{
                                                                                        add("nisi"),
                                                                                    }};
                                                                                }};;
                                                                                lambdaExecutorConfiguration = new LambdaExecutorConfiguration("rerum");;
                                                                            }};, ExecutorTypeEnum.LAMBDA) {{
                                                                jobTimeout = 913285L;
                                                                policyStatementsTemplate = "non";
                                                            }};,                 new ActionTypeIdentifier(ActionCategoryEnum.TEST, "quia", "ullam", "quisquam");,                 new ActionTypeArtifactDetails(120277L, 973017L);,                 new ActionTypeArtifactDetails(754901L, 62035L);) {{
                                                description = "officiis";
                                                permissions = new ActionTypePermissions(                new String[]{{
                                                                    add("architecto"),
                                                                }});;
                                                properties = "enim";
                                                urls = new ActionTypeUrls() {{
                                                    configurationUrl = "optio";
                                                    entityUrlTemplate = "rem";
                                                    executionUrlTemplate = "perferendis";
                                                    revisionUrlTemplate = "facilis";
                                                }};;
                                            }};);, UpdateActionTypeXAmzTargetEnum.CODE_PIPELINE20150709_UPDATE_ACTION_TYPE) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "a";
                xAmzCredential = "iste";
                xAmzDate = "dicta";
                xAmzSecurityToken = "quos";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "dolore";
            }};            

            UpdateActionTypeResponse res = sdk.sdk.updateActionType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePipeline

Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure and <code>UpdatePipeline</code> to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePipelineRequest;
import org.openapis.openapi.models.operations.UpdatePipelineResponse;
import org.openapis.openapi.models.operations.UpdatePipelineXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionCategoryEnum;
import org.openapis.openapi.models.shared.ActionDeclaration;
import org.openapis.openapi.models.shared.ActionOwnerEnum;
import org.openapis.openapi.models.shared.ActionTypeId;
import org.openapis.openapi.models.shared.ArtifactStore;
import org.openapis.openapi.models.shared.ArtifactStoreTypeEnum;
import org.openapis.openapi.models.shared.BlockerDeclaration;
import org.openapis.openapi.models.shared.BlockerTypeEnum;
import org.openapis.openapi.models.shared.EncryptionKey;
import org.openapis.openapi.models.shared.EncryptionKeyTypeEnum;
import org.openapis.openapi.models.shared.InputArtifact;
import org.openapis.openapi.models.shared.OutputArtifact;
import org.openapis.openapi.models.shared.PipelineDeclaration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StageDeclaration;
import org.openapis.openapi.models.shared.UpdatePipelineInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePipelineRequest req = new UpdatePipelineRequest(                new UpdatePipelineInput(                new PipelineDeclaration("itaque", "maxime",                 new org.openapis.openapi.models.shared.StageDeclaration[]{{
                                                                add(new StageDeclaration(                new org.openapis.openapi.models.shared.ActionDeclaration[]{{
                                                                                    add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.DEPLOY, ActionOwnerEnum.CUSTOM, "quod", "nemo");, "recusandae") {{
                                                                                        actionTypeId = new ActionTypeId(ActionCategoryEnum.SOURCE, ActionOwnerEnum.AWS, "aliquid", "magni") {{
                                                                                            category = ActionCategoryEnum.BUILD;
                                                                                            owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                            provider = "fuga";
                                                                                            version = "minima";
                                                                                        }};
                                                                                        configuration = new java.util.HashMap<String, String>() {{
                                                                                            put("adipisci", "praesentium");
                                                                                            put("dolor", "exercitationem");
                                                                                        }};
                                                                                        inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                            add(new InputArtifact("consequuntur") {{
                                                                                                name = "Rodolfo Bailey";
                                                                                            }}),
                                                                                            add(new InputArtifact("itaque") {{
                                                                                                name = "Rosie Glover";
                                                                                            }}),
                                                                                            add(new InputArtifact("officiis") {{
                                                                                                name = "Devin Halvorson";
                                                                                            }}),
                                                                                        }};
                                                                                        name = "Miss Linda Nader";
                                                                                        namespace = "quia";
                                                                                        outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                            add(new OutputArtifact("perferendis") {{
                                                                                                name = "Erika Trantow Jr.";
                                                                                            }}),
                                                                                        }};
                                                                                        region = "veritatis";
                                                                                        roleArn = "provident";
                                                                                        runOrder = 765833L;
                                                                                    }}),
                                                                                    add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.INVOKE, ActionOwnerEnum.AWS, "maxime", "ipsam");, "alias") {{
                                                                                        actionTypeId = new ActionTypeId(ActionCategoryEnum.SOURCE, ActionOwnerEnum.THIRD_PARTY, "natus", "provident") {{
                                                                                            category = ActionCategoryEnum.BUILD;
                                                                                            owner = ActionOwnerEnum.AWS;
                                                                                            provider = "dignissimos";
                                                                                            version = "laboriosam";
                                                                                        }};
                                                                                        configuration = new java.util.HashMap<String, String>() {{
                                                                                            put("doloribus", "facilis");
                                                                                            put("quidem", "itaque");
                                                                                            put("laboriosam", "unde");
                                                                                        }};
                                                                                        inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                            add(new InputArtifact("nam") {{
                                                                                                name = "Irvin Rippin";
                                                                                            }}),
                                                                                            add(new InputArtifact("autem") {{
                                                                                                name = "Sophie Schmeler";
                                                                                            }}),
                                                                                        }};
                                                                                        name = "Antonio Stanton";
                                                                                        namespace = "facilis";
                                                                                        outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                            add(new OutputArtifact("ad") {{
                                                                                                name = "Kristopher Walter";
                                                                                            }}),
                                                                                        }};
                                                                                        region = "facere";
                                                                                        roleArn = "laborum";
                                                                                        runOrder = 911451L;
                                                                                    }}),
                                                                                    add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.APPROVAL, ActionOwnerEnum.CUSTOM, "ipsa", "excepturi");, "a") {{
                                                                                        actionTypeId = new ActionTypeId(ActionCategoryEnum.INVOKE, ActionOwnerEnum.THIRD_PARTY, "labore", "quo") {{
                                                                                            category = ActionCategoryEnum.DEPLOY;
                                                                                            owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                            provider = "molestias";
                                                                                            version = "laborum";
                                                                                        }};
                                                                                        configuration = new java.util.HashMap<String, String>() {{
                                                                                            put("fugit", "aliquid");
                                                                                        }};
                                                                                        inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                            add(new InputArtifact("unde") {{
                                                                                                name = "Lynne Weissnat";
                                                                                            }}),
                                                                                            add(new InputArtifact("esse") {{
                                                                                                name = "Jeremiah O'Hara";
                                                                                            }}),
                                                                                        }};
                                                                                        name = "Grant Schultz MD";
                                                                                        namespace = "quod";
                                                                                        outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                            add(new OutputArtifact("consequatur") {{
                                                                                                name = "Sandra Schumm";
                                                                                            }}),
                                                                                            add(new OutputArtifact("quae") {{
                                                                                                name = "Julie Murazik";
                                                                                            }}),
                                                                                        }};
                                                                                        region = "magni";
                                                                                        roleArn = "officiis";
                                                                                        runOrder = 148379L;
                                                                                    }}),
                                                                                    add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.INVOKE, ActionOwnerEnum.THIRD_PARTY, "accusantium", "dicta");, "minus") {{
                                                                                        actionTypeId = new ActionTypeId(ActionCategoryEnum.APPROVAL, ActionOwnerEnum.THIRD_PARTY, "dicta", "suscipit") {{
                                                                                            category = ActionCategoryEnum.APPROVAL;
                                                                                            owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                            provider = "maiores";
                                                                                            version = "alias";
                                                                                        }};
                                                                                        configuration = new java.util.HashMap<String, String>() {{
                                                                                            put("doloribus", "velit");
                                                                                            put("eius", "esse");
                                                                                            put("in", "eligendi");
                                                                                            put("quasi", "neque");
                                                                                        }};
                                                                                        inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                            add(new InputArtifact("dicta") {{
                                                                                                name = "Edward Denesik II";
                                                                                            }}),
                                                                                            add(new InputArtifact("accusantium") {{
                                                                                                name = "Miss Dana Prohaska";
                                                                                            }}),
                                                                                            add(new InputArtifact("quae") {{
                                                                                                name = "Brent Jacobs II";
                                                                                            }}),
                                                                                            add(new InputArtifact("delectus") {{
                                                                                                name = "Barry Koepp";
                                                                                            }}),
                                                                                        }};
                                                                                        name = "Jeremy Douglas";
                                                                                        namespace = "cupiditate";
                                                                                        outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                            add(new OutputArtifact("amet") {{
                                                                                                name = "Elijah Langworth";
                                                                                            }}),
                                                                                            add(new OutputArtifact("molestiae") {{
                                                                                                name = "Angela Schaefer";
                                                                                            }}),
                                                                                        }};
                                                                                        region = "aliquid";
                                                                                        roleArn = "asperiores";
                                                                                        runOrder = 955466L;
                                                                                    }}),
                                                                                }}, "commodi") {{
                                                                    actions = new org.openapis.openapi.models.shared.ActionDeclaration[]{{
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.BUILD, ActionOwnerEnum.THIRD_PARTY, "illo", "repellat");, "nemo") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.INVOKE, ActionOwnerEnum.CUSTOM, "totam", "reiciendis") {{
                                                                                category = ActionCategoryEnum.INVOKE;
                                                                                owner = ActionOwnerEnum.CUSTOM;
                                                                                provider = "doloribus";
                                                                                version = "impedit";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("sint", "nihil");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("neque") {{
                                                                                    name = "Lydia Douglas";
                                                                                }}),
                                                                                add(new InputArtifact("distinctio") {{
                                                                                    name = "Melanie Cruickshank";
                                                                                }}),
                                                                            }};
                                                                            name = "Angela Lebsack II";
                                                                            namespace = "saepe";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("est") {{
                                                                                    name = "Tom Lueilwitz";
                                                                                }}),
                                                                            }};
                                                                            region = "delectus";
                                                                            roleArn = "velit";
                                                                            runOrder = 110522L;
                                                                        }}),
                                                                    }};
                                                                    blockers = new org.openapis.openapi.models.shared.BlockerDeclaration[]{{
                                                                        add(new BlockerDeclaration("optio", BlockerTypeEnum.SCHEDULE) {{
                                                                            name = "Mrs. Stuart Gorczany";
                                                                            type = BlockerTypeEnum.SCHEDULE;
                                                                        }}),
                                                                        add(new BlockerDeclaration("consequuntur", BlockerTypeEnum.SCHEDULE) {{
                                                                            name = "Yvette Dooley";
                                                                            type = BlockerTypeEnum.SCHEDULE;
                                                                        }}),
                                                                        add(new BlockerDeclaration("numquam", BlockerTypeEnum.SCHEDULE) {{
                                                                            name = "Henrietta Nienow";
                                                                            type = BlockerTypeEnum.SCHEDULE;
                                                                        }}),
                                                                        add(new BlockerDeclaration("ex", BlockerTypeEnum.SCHEDULE) {{
                                                                            name = "Travis Rempel";
                                                                            type = BlockerTypeEnum.SCHEDULE;
                                                                        }}),
                                                                    }};
                                                                    name = "Andrew Brekke";
                                                                }}),
                                                                add(new StageDeclaration(                new org.openapis.openapi.models.shared.ActionDeclaration[]{{
                                                                                    add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.INVOKE, ActionOwnerEnum.AWS, "voluptatum", "ipsa");, "at") {{
                                                                                        actionTypeId = new ActionTypeId(ActionCategoryEnum.BUILD, ActionOwnerEnum.THIRD_PARTY, "magni", "quae") {{
                                                                                            category = ActionCategoryEnum.DEPLOY;
                                                                                            owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                            provider = "architecto";
                                                                                            version = "est";
                                                                                        }};
                                                                                        configuration = new java.util.HashMap<String, String>() {{
                                                                                            put("placeat", "enim");
                                                                                            put("labore", "sapiente");
                                                                                            put("saepe", "delectus");
                                                                                        }};
                                                                                        inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                            add(new InputArtifact("quia") {{
                                                                                                name = "Benny Mosciski";
                                                                                            }}),
                                                                                            add(new InputArtifact("eum") {{
                                                                                                name = "Angelo Runolfsdottir";
                                                                                            }}),
                                                                                            add(new InputArtifact("asperiores") {{
                                                                                                name = "Ms. Desiree Douglas";
                                                                                            }}),
                                                                                        }};
                                                                                        name = "Mr. Pat Lakin III";
                                                                                        namespace = "necessitatibus";
                                                                                        outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                            add(new OutputArtifact("aliquam") {{
                                                                                                name = "Ralph Dooley";
                                                                                            }}),
                                                                                        }};
                                                                                        region = "deserunt";
                                                                                        roleArn = "modi";
                                                                                        runOrder = 122085L;
                                                                                    }}),
                                                                                    add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.BUILD, ActionOwnerEnum.AWS, "quaerat", "architecto");, "praesentium") {{
                                                                                        actionTypeId = new ActionTypeId(ActionCategoryEnum.BUILD, ActionOwnerEnum.AWS, "fuga", "hic") {{
                                                                                            category = ActionCategoryEnum.BUILD;
                                                                                            owner = ActionOwnerEnum.CUSTOM;
                                                                                            provider = "aspernatur";
                                                                                            version = "inventore";
                                                                                        }};
                                                                                        configuration = new java.util.HashMap<String, String>() {{
                                                                                            put("dolorem", "architecto");
                                                                                        }};
                                                                                        inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                            add(new InputArtifact("numquam") {{
                                                                                                name = "Mrs. Christie Halvorson";
                                                                                            }}),
                                                                                        }};
                                                                                        name = "Loren Jakubowski IV";
                                                                                        namespace = "expedita";
                                                                                        outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                            add(new OutputArtifact("animi") {{
                                                                                                name = "Miss Gilbert Corwin";
                                                                                            }}),
                                                                                            add(new OutputArtifact("laudantium") {{
                                                                                                name = "Mindy Kunde";
                                                                                            }}),
                                                                                            add(new OutputArtifact("eius") {{
                                                                                                name = "Laverne Weber";
                                                                                            }}),
                                                                                            add(new OutputArtifact("impedit") {{
                                                                                                name = "Dexter Kuhn";
                                                                                            }}),
                                                                                        }};
                                                                                        region = "aliquid";
                                                                                        roleArn = "quis";
                                                                                        runOrder = 704402L;
                                                                                    }}),
                                                                                    add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.DEPLOY, ActionOwnerEnum.AWS, "laudantium", "sed");, "odit") {{
                                                                                        actionTypeId = new ActionTypeId(ActionCategoryEnum.TEST, ActionOwnerEnum.AWS, "minus", "quos") {{
                                                                                            category = ActionCategoryEnum.APPROVAL;
                                                                                            owner = ActionOwnerEnum.AWS;
                                                                                            provider = "expedita";
                                                                                            version = "libero";
                                                                                        }};
                                                                                        configuration = new java.util.HashMap<String, String>() {{
                                                                                            put("sint", "iusto");
                                                                                            put("enim", "accusamus");
                                                                                            put("aperiam", "voluptates");
                                                                                            put("laudantium", "tempora");
                                                                                        }};
                                                                                        inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                            add(new InputArtifact("modi") {{
                                                                                                name = "Gilberto Legros";
                                                                                            }}),
                                                                                        }};
                                                                                        name = "Joe Haag";
                                                                                        namespace = "sequi";
                                                                                        outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                            add(new OutputArtifact("cumque") {{
                                                                                                name = "Joy Toy";
                                                                                            }}),
                                                                                            add(new OutputArtifact("sequi") {{
                                                                                                name = "Sonya Oberbrunner";
                                                                                            }}),
                                                                                            add(new OutputArtifact("aut") {{
                                                                                                name = "Cameron Rohan";
                                                                                            }}),
                                                                                            add(new OutputArtifact("necessitatibus") {{
                                                                                                name = "Sandy McDermott";
                                                                                            }}),
                                                                                        }};
                                                                                        region = "accusantium";
                                                                                        roleArn = "ad";
                                                                                        runOrder = 392752L;
                                                                                    }}),
                                                                                }}, "iusto") {{
                                                                    actions = new org.openapis.openapi.models.shared.ActionDeclaration[]{{
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.DEPLOY, ActionOwnerEnum.AWS, "nisi", "tenetur");, "quis") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.APPROVAL, ActionOwnerEnum.AWS, "eius", "sequi") {{
                                                                                category = ActionCategoryEnum.INVOKE;
                                                                                owner = ActionOwnerEnum.CUSTOM;
                                                                                provider = "quidem";
                                                                                version = "modi";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("asperiores", "esse");
                                                                                put("blanditiis", "sint");
                                                                                put("repellat", "a");
                                                                                put("animi", "maiores");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("enim") {{
                                                                                    name = "Gerard Herzog";
                                                                                }}),
                                                                                add(new InputArtifact("impedit") {{
                                                                                    name = "Elias Keeling MD";
                                                                                }}),
                                                                                add(new InputArtifact("nobis") {{
                                                                                    name = "Mattie Gibson";
                                                                                }}),
                                                                                add(new InputArtifact("quod") {{
                                                                                    name = "Kim Crist";
                                                                                }}),
                                                                            }};
                                                                            name = "Byron Farrell";
                                                                            namespace = "laborum";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("sunt") {{
                                                                                    name = "Jana Brakus";
                                                                                }}),
                                                                                add(new OutputArtifact("ipsam") {{
                                                                                    name = "Tony Connelly";
                                                                                }}),
                                                                            }};
                                                                            region = "eaque";
                                                                            roleArn = "exercitationem";
                                                                            runOrder = 331269L;
                                                                        }}),
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.INVOKE, ActionOwnerEnum.CUSTOM, "quos", "asperiores");, "voluptatum") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.SOURCE, ActionOwnerEnum.CUSTOM, "repellendus", "perferendis") {{
                                                                                category = ActionCategoryEnum.APPROVAL;
                                                                                owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                provider = "suscipit";
                                                                                version = "pariatur";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("sapiente", "sed");
                                                                                put("possimus", "repellat");
                                                                                put("repudiandae", "architecto");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("explicabo") {{
                                                                                    name = "Roderick Grimes";
                                                                                }}),
                                                                            }};
                                                                            name = "Dominic Pagac";
                                                                            namespace = "praesentium";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("cumque") {{
                                                                                    name = "Joyce O'Connell";
                                                                                }}),
                                                                                add(new OutputArtifact("excepturi") {{
                                                                                    name = "Miss Mamie Lowe";
                                                                                }}),
                                                                                add(new OutputArtifact("sed") {{
                                                                                    name = "Rhonda Schuster";
                                                                                }}),
                                                                            }};
                                                                            region = "accusamus";
                                                                            roleArn = "optio";
                                                                            runOrder = 966576L;
                                                                        }}),
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.APPROVAL, ActionOwnerEnum.THIRD_PARTY, "quidem", "totam");, "porro") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.SOURCE, ActionOwnerEnum.CUSTOM, "nostrum", "at") {{
                                                                                category = ActionCategoryEnum.TEST;
                                                                                owner = ActionOwnerEnum.THIRD_PARTY;
                                                                                provider = "accusantium";
                                                                                version = "illo";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("neque", "pariatur");
                                                                                put("vel", "sapiente");
                                                                                put("mollitia", "quae");
                                                                                put("quos", "aperiam");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("consequuntur") {{
                                                                                    name = "Derek Haag";
                                                                                }}),
                                                                                add(new InputArtifact("dolor") {{
                                                                                    name = "Walter Jacobs";
                                                                                }}),
                                                                            }};
                                                                            name = "Edith Runte";
                                                                            namespace = "ducimus";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("voluptatum") {{
                                                                                    name = "Eddie Labadie";
                                                                                }}),
                                                                            }};
                                                                            region = "sit";
                                                                            roleArn = "rerum";
                                                                            runOrder = 84178L;
                                                                        }}),
                                                                        add(new ActionDeclaration(                new ActionTypeId(ActionCategoryEnum.INVOKE, ActionOwnerEnum.CUSTOM, "veritatis", "aut");, "laudantium") {{
                                                                            actionTypeId = new ActionTypeId(ActionCategoryEnum.TEST, ActionOwnerEnum.THIRD_PARTY, "alias", "fuga") {{
                                                                                category = ActionCategoryEnum.TEST;
                                                                                owner = ActionOwnerEnum.AWS;
                                                                                provider = "nihil";
                                                                                version = "voluptas";
                                                                            }};
                                                                            configuration = new java.util.HashMap<String, String>() {{
                                                                                put("dolore", "maxime");
                                                                            }};
                                                                            inputArtifacts = new org.openapis.openapi.models.shared.InputArtifact[]{{
                                                                                add(new InputArtifact("occaecati") {{
                                                                                    name = "Derrick Roob";
                                                                                }}),
                                                                                add(new InputArtifact("quasi") {{
                                                                                    name = "Miss Joshua Koss";
                                                                                }}),
                                                                            }};
                                                                            name = "Keith Pfeffer";
                                                                            namespace = "beatae";
                                                                            outputArtifacts = new org.openapis.openapi.models.shared.OutputArtifact[]{{
                                                                                add(new OutputArtifact("atque") {{
                                                                                    name = "Leroy Ratke";
                                                                                }}),
                                                                                add(new OutputArtifact("incidunt") {{
                                                                                    name = "Felipe Stracke";
                                                                                }}),
                                                                                add(new OutputArtifact("occaecati") {{
                                                                                    name = "Kim Sauer";
                                                                                }}),
                                                                                add(new OutputArtifact("accusantium") {{
                                                                                    name = "Garrett Koch";
                                                                                }}),
                                                                            }};
                                                                            region = "soluta";
                                                                            roleArn = "fugit";
                                                                            runOrder = 866292L;
                                                                        }}),
                                                                    }};
                                                                    blockers = new org.openapis.openapi.models.shared.BlockerDeclaration[]{{
                                                                        add(new BlockerDeclaration("doloremque", BlockerTypeEnum.SCHEDULE) {{
                                                                            name = "Silvia Goodwin";
                                                                            type = BlockerTypeEnum.SCHEDULE;
                                                                        }}),
                                                                        add(new BlockerDeclaration("voluptatum", BlockerTypeEnum.SCHEDULE) {{
                                                                            name = "Natalie Swift";
                                                                            type = BlockerTypeEnum.SCHEDULE;
                                                                        }}),
                                                                    }};
                                                                    name = "Christian Lindgren";
                                                                }}),
                                                            }}) {{
                                                artifactStore = new ArtifactStore("expedita", ArtifactStoreTypeEnum.S3) {{
                                                    encryptionKey = new EncryptionKey("eos", EncryptionKeyTypeEnum.KMS);;
                                                }};;
                                                artifactStores = new java.util.HashMap<String, org.openapis.openapi.models.shared.ArtifactStore>() {{
                                                    put("nesciunt", new ArtifactStore("sunt", ArtifactStoreTypeEnum.S3) {{
                                                        encryptionKey = new EncryptionKey("optio", EncryptionKeyTypeEnum.KMS) {{
                                                            id = "09470bf7-a4fa-487c-b535-a6fae54ebf60";
                                                            type = EncryptionKeyTypeEnum.KMS;
                                                        }};
                                                        location = "sequi";
                                                        type = ArtifactStoreTypeEnum.S3;
                                                    }});
                                                    put("vitae", new ArtifactStore("impedit", ArtifactStoreTypeEnum.S3) {{
                                                        encryptionKey = new EncryptionKey("unde", EncryptionKeyTypeEnum.KMS) {{
                                                            id = "f023b75d-2367-4fe1-a0cc-8df79f0a396d";
                                                            type = EncryptionKeyTypeEnum.KMS;
                                                        }};
                                                        location = "alias";
                                                        type = ArtifactStoreTypeEnum.S3;
                                                    }});
                                                    put("sequi", new ArtifactStore("itaque", ArtifactStoreTypeEnum.S3) {{
                                                        encryptionKey = new EncryptionKey("veritatis", EncryptionKeyTypeEnum.KMS) {{
                                                            id = "64b7c15d-fbac-4e18-8b1c-4ee2c8c6ce61";
                                                            type = EncryptionKeyTypeEnum.KMS;
                                                        }};
                                                        location = "maiores";
                                                        type = ArtifactStoreTypeEnum.S3;
                                                    }});
                                                    put("vero", new ArtifactStore("illum", ArtifactStoreTypeEnum.S3) {{
                                                        encryptionKey = new EncryptionKey("exercitationem", EncryptionKeyTypeEnum.KMS) {{
                                                            id = "b1c7cbdb-6eec-4743-b8ba-25317747dc91";
                                                            type = EncryptionKeyTypeEnum.KMS;
                                                        }};
                                                        location = "laborum";
                                                        type = ArtifactStoreTypeEnum.S3;
                                                    }});
                                                }};
                                                version = 147989L;
                                            }};);, UpdatePipelineXAmzTargetEnum.CODE_PIPELINE20150709_UPDATE_PIPELINE) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "repellat";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "illum";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "commodi";
            }};            

            UpdatePipelineResponse res = sdk.sdk.updatePipeline(req);

            if (res.updatePipelineOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
