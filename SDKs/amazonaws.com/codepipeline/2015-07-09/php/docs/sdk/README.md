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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcknowledgeJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcknowledgeJobInput;
use \OpenAPI\OpenAPI\Models\Operations\AcknowledgeJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcknowledgeJobRequest();
    $request->acknowledgeJobInput = new AcknowledgeJobInput();
    $request->acknowledgeJobInput->jobId = 'error';
    $request->acknowledgeJobInput->nonce = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = AcknowledgeJobXAmzTargetEnum::CODE_PIPELINE20150709_ACKNOWLEDGE_JOB;

    $response = $sdk->sdk->acknowledgeJob($request);

    if ($response->acknowledgeJobOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## acknowledgeThirdPartyJob

Confirms a job worker has received the specified job. Used for partner actions only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcknowledgeThirdPartyJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcknowledgeThirdPartyJobInput;
use \OpenAPI\OpenAPI\Models\Operations\AcknowledgeThirdPartyJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcknowledgeThirdPartyJobRequest();
    $request->acknowledgeThirdPartyJobInput = new AcknowledgeThirdPartyJobInput();
    $request->acknowledgeThirdPartyJobInput->clientToken = 'suscipit';
    $request->acknowledgeThirdPartyJobInput->jobId = 'molestiae';
    $request->acknowledgeThirdPartyJobInput->nonce = 'minus';
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = AcknowledgeThirdPartyJobXAmzTargetEnum::CODE_PIPELINE20150709_ACKNOWLEDGE_THIRD_PARTY_JOB;

    $response = $sdk->sdk->acknowledgeThirdPartyJob($request);

    if ($response->acknowledgeThirdPartyJobOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCustomActionType

Creates a new custom action that can be used in all pipelines associated with the AWS account. Only used for custom actions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomActionTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCustomActionTypeInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionConfigurationProperty;
use \OpenAPI\OpenAPI\Models\Shared\ActionConfigurationPropertyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactDetails;
use \OpenAPI\OpenAPI\Models\Shared\ActionTypeSettings;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomActionTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomActionTypeRequest();
    $request->createCustomActionTypeInput = new CreateCustomActionTypeInput();
    $request->createCustomActionTypeInput->category = ActionCategoryEnum::SOURCE;
    $request->createCustomActionTypeInput->configurationProperties = [
        new ActionConfigurationProperty(),
        new ActionConfigurationProperty(),
    ];
    $request->createCustomActionTypeInput->inputArtifactDetails = new ArtifactDetails();
    $request->createCustomActionTypeInput->inputArtifactDetails->maximumCount = 87129;
    $request->createCustomActionTypeInput->inputArtifactDetails->minimumCount = 648172;
    $request->createCustomActionTypeInput->outputArtifactDetails = new ArtifactDetails();
    $request->createCustomActionTypeInput->outputArtifactDetails->maximumCount = 20218;
    $request->createCustomActionTypeInput->outputArtifactDetails->minimumCount = 368241;
    $request->createCustomActionTypeInput->provider = 'repellendus';
    $request->createCustomActionTypeInput->settings = new ActionTypeSettings();
    $request->createCustomActionTypeInput->settings->entityUrlTemplate = 'sapiente';
    $request->createCustomActionTypeInput->settings->executionUrlTemplate = 'quo';
    $request->createCustomActionTypeInput->settings->revisionUrlTemplate = 'odit';
    $request->createCustomActionTypeInput->settings->thirdPartyConfigurationUrl = 'at';
    $request->createCustomActionTypeInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createCustomActionTypeInput->version = 'maiores';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = CreateCustomActionTypeXAmzTargetEnum::CODE_PIPELINE20150709_CREATE_CUSTOM_ACTION_TYPE;

    $response = $sdk->sdk->createCustomActionType($request);

    if ($response->createCustomActionTypeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPipeline

<p>Creates a pipeline.</p> <note> <p>In the pipeline structure, you must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePipelineInput;
use \OpenAPI\OpenAPI\Models\Shared\PipelineDeclaration;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactStore;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactStoreTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StageDeclaration;
use \OpenAPI\OpenAPI\Models\Shared\ActionDeclaration;
use \OpenAPI\OpenAPI\Models\Shared\ActionTypeId;
use \OpenAPI\OpenAPI\Models\Shared\ActionCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionOwnerEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputArtifact;
use \OpenAPI\OpenAPI\Models\Shared\OutputArtifact;
use \OpenAPI\OpenAPI\Models\Shared\BlockerDeclaration;
use \OpenAPI\OpenAPI\Models\Shared\BlockerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePipelineRequest();
    $request->createPipelineInput = new CreatePipelineInput();
    $request->createPipelineInput->pipeline = new PipelineDeclaration();
    $request->createPipelineInput->pipeline->artifactStore = new ArtifactStore();
    $request->createPipelineInput->pipeline->artifactStore->encryptionKey = new EncryptionKey();
    $request->createPipelineInput->pipeline->artifactStore->encryptionKey->id = '1ba928fc-8167-442c-b739-205929396fea';
    $request->createPipelineInput->pipeline->artifactStore->encryptionKey->type = EncryptionKeyTypeEnum::KMS;
    $request->createPipelineInput->pipeline->artifactStore->location = 'in';
    $request->createPipelineInput->pipeline->artifactStore->type = ArtifactStoreTypeEnum::S3;
    $request->createPipelineInput->pipeline->artifactStores = [
        'iste' => new ArtifactStore(),
        'iure' => new ArtifactStore(),
    ];
    $request->createPipelineInput->pipeline->name = 'Dr. Rickey Boyle';
    $request->createPipelineInput->pipeline->roleArn = 'mollitia';
    $request->createPipelineInput->pipeline->stages = [
        new StageDeclaration(),
        new StageDeclaration(),
        new StageDeclaration(),
    ];
    $request->createPipelineInput->pipeline->version = 170909;
    $request->createPipelineInput->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = CreatePipelineXAmzTargetEnum::CODE_PIPELINE20150709_CREATE_PIPELINE;

    $response = $sdk->sdk->createPipeline($request);

    if ($response->createPipelineOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomActionType

<p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action fails after the action is marked for deletion. Used for custom actions only.</p> <important> <p>To re-create a custom action after it has been deleted you must use a string in the version field that has never been used before. This string can be an incremented version number, for example. To restore a deleted custom action, use a JSON file that is identical to the deleted action, including the original string in the version field.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomActionTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCustomActionTypeInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomActionTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomActionTypeRequest();
    $request->deleteCustomActionTypeInput = new DeleteCustomActionTypeInput();
    $request->deleteCustomActionTypeInput->category = ActionCategoryEnum::TEST;
    $request->deleteCustomActionTypeInput->provider = 'accusantium';
    $request->deleteCustomActionTypeInput->version = 'iure';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = DeleteCustomActionTypeXAmzTargetEnum::CODE_PIPELINE20150709_DELETE_CUSTOM_ACTION_TYPE;

    $response = $sdk->sdk->deleteCustomActionType($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePipeline

Deletes the specified pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePipelineInput;
use \OpenAPI\OpenAPI\Models\Operations\DeletePipelineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePipelineRequest();
    $request->deletePipelineInput = new DeletePipelineInput();
    $request->deletePipelineInput->name = 'Jaime O'Hara';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = DeletePipelineXAmzTargetEnum::CODE_PIPELINE20150709_DELETE_PIPELINE;

    $response = $sdk->sdk->deletePipeline($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWebhook

Deletes a previously created webhook by name. Deleting the webhook stops AWS CodePipeline from starting a pipeline every time an external event occurs. The API returns successfully when trying to delete a webhook that is already deleted. If a deleted webhook is re-created by calling PutWebhook with the same name, it will have a different URL.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteWebhookInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhookRequest();
    $request->deleteWebhookInput = new DeleteWebhookInput();
    $request->deleteWebhookInput->name = 'Kayla O'Kon';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = DeleteWebhookXAmzTargetEnum::CODE_PIPELINE20150709_DELETE_WEBHOOK;

    $response = $sdk->sdk->deleteWebhook($request);

    if ($response->deleteWebhookOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterWebhookWithThirdParty

Removes the connection between the webhook that was created by CodePipeline and the external tool with events to be detected. Currently supported only for webhooks that target an action type of GitHub.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterWebhookWithThirdPartyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterWebhookWithThirdPartyInput;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterWebhookWithThirdPartyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterWebhookWithThirdPartyRequest();
    $request->deregisterWebhookWithThirdPartyInput = new DeregisterWebhookWithThirdPartyInput();
    $request->deregisterWebhookWithThirdPartyInput->webhookName = 'quasi';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DeregisterWebhookWithThirdPartyXAmzTargetEnum::CODE_PIPELINE20150709_DEREGISTER_WEBHOOK_WITH_THIRD_PARTY;

    $response = $sdk->sdk->deregisterWebhookWithThirdParty($request);

    if ($response->deregisterWebhookWithThirdPartyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableStageTransition

Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableStageTransitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisableStageTransitionInput;
use \OpenAPI\OpenAPI\Models\Shared\StageTransitionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisableStageTransitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableStageTransitionRequest();
    $request->disableStageTransitionInput = new DisableStageTransitionInput();
    $request->disableStageTransitionInput->pipelineName = 'nihil';
    $request->disableStageTransitionInput->reason = 'praesentium';
    $request->disableStageTransitionInput->stageName = 'voluptatibus';
    $request->disableStageTransitionInput->transitionType = StageTransitionTypeEnum::INBOUND;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'ut';
    $request->xAmzTarget = DisableStageTransitionXAmzTargetEnum::CODE_PIPELINE20150709_DISABLE_STAGE_TRANSITION;

    $response = $sdk->sdk->disableStageTransition($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableStageTransition

Enables artifacts in a pipeline to transition to a stage in a pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableStageTransitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnableStageTransitionInput;
use \OpenAPI\OpenAPI\Models\Shared\StageTransitionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\EnableStageTransitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableStageTransitionRequest();
    $request->enableStageTransitionInput = new EnableStageTransitionInput();
    $request->enableStageTransitionInput->pipelineName = 'maiores';
    $request->enableStageTransitionInput->stageName = 'dicta';
    $request->enableStageTransitionInput->transitionType = StageTransitionTypeEnum::INBOUND;
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = EnableStageTransitionXAmzTargetEnum::CODE_PIPELINE20150709_ENABLE_STAGE_TRANSITION;

    $response = $sdk->sdk->enableStageTransition($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionType

Returns information about an action type created for an external provider, where the action is to be used by customers of the external provider. The action can be created with any supported integration model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetActionTypeInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetActionTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionTypeRequest();
    $request->getActionTypeInput = new GetActionTypeInput();
    $request->getActionTypeInput->category = ActionCategoryEnum::APPROVAL;
    $request->getActionTypeInput->owner = 'quae';
    $request->getActionTypeInput->provider = 'ipsum';
    $request->getActionTypeInput->version = 'quidem';
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->xAmzTarget = GetActionTypeXAmzTargetEnum::CODE_PIPELINE20150709_GET_ACTION_TYPE;

    $response = $sdk->sdk->getActionType($request);

    if ($response->getActionTypeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobDetails

<p>Returns information about a job. Used for custom actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetJobDetailsInput;
use \OpenAPI\OpenAPI\Models\Operations\GetJobDetailsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobDetailsRequest();
    $request->getJobDetailsInput = new GetJobDetailsInput();
    $request->getJobDetailsInput->jobId = 'quasi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = GetJobDetailsXAmzTargetEnum::CODE_PIPELINE20150709_GET_JOB_DETAILS;

    $response = $sdk->sdk->getJobDetails($request);

    if ($response->getJobDetailsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPipeline

Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with <a>UpdatePipeline</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPipelineInput;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineRequest();
    $request->getPipelineInput = new GetPipelineInput();
    $request->getPipelineInput->name = 'Taylor Cole';
    $request->getPipelineInput->version = 841386;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = GetPipelineXAmzTargetEnum::CODE_PIPELINE20150709_GET_PIPELINE;

    $response = $sdk->sdk->getPipeline($request);

    if ($response->getPipelineOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPipelineExecution

Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPipelineExecutionInput;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineExecutionRequest();
    $request->getPipelineExecutionInput = new GetPipelineExecutionInput();
    $request->getPipelineExecutionInput->pipelineExecutionId = 'magni';
    $request->getPipelineExecutionInput->pipelineName = 'assumenda';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = GetPipelineExecutionXAmzTargetEnum::CODE_PIPELINE20150709_GET_PIPELINE_EXECUTION;

    $response = $sdk->sdk->getPipelineExecution($request);

    if ($response->getPipelineExecutionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPipelineState

<p>Returns information about the state of a pipeline, including the stages and actions.</p> <note> <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code> fields indicate the source revision information, such as the commit ID, for the current state.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPipelineStateInput;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineStateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineStateRequest();
    $request->getPipelineStateInput = new GetPipelineStateInput();
    $request->getPipelineStateInput->name = 'Francisco Windler';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = GetPipelineStateXAmzTargetEnum::CODE_PIPELINE20150709_GET_PIPELINE_STATE;

    $response = $sdk->sdk->getPipelineState($request);

    if ($response->getPipelineStateOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getThirdPartyJobDetails

<p>Requests the details of a job for a third party action. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetThirdPartyJobDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetThirdPartyJobDetailsInput;
use \OpenAPI\OpenAPI\Models\Operations\GetThirdPartyJobDetailsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetThirdPartyJobDetailsRequest();
    $request->getThirdPartyJobDetailsInput = new GetThirdPartyJobDetailsInput();
    $request->getThirdPartyJobDetailsInput->clientToken = 'dolor';
    $request->getThirdPartyJobDetailsInput->jobId = 'debitis';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = GetThirdPartyJobDetailsXAmzTargetEnum::CODE_PIPELINE20150709_GET_THIRD_PARTY_JOB_DETAILS;

    $response = $sdk->sdk->getThirdPartyJobDetails($request);

    if ($response->getThirdPartyJobDetailsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listActionExecutions

Lists the action executions that have occurred in a pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListActionExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListActionExecutionsInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionExecutionFilter;
use \OpenAPI\OpenAPI\Models\Operations\ListActionExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListActionExecutionsRequest();
    $request->listActionExecutionsInput = new ListActionExecutionsInput();
    $request->listActionExecutionsInput->filter = new ActionExecutionFilter();
    $request->listActionExecutionsInput->filter->pipelineExecutionId = 'dicta';
    $request->listActionExecutionsInput->maxResults = 297437;
    $request->listActionExecutionsInput->nextToken = 'cumque';
    $request->listActionExecutionsInput->pipelineName = 'facere';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = ListActionExecutionsXAmzTargetEnum::CODE_PIPELINE20150709_LIST_ACTION_EXECUTIONS;
    $request->maxResults = 'accusamus';
    $request->nextToken = 'delectus';

    $response = $sdk->sdk->listActionExecutions($request);

    if ($response->listActionExecutionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listActionTypes

Gets a summary of all AWS CodePipeline action types associated with your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListActionTypesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListActionTypesInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionOwnerEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListActionTypesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListActionTypesRequest();
    $request->listActionTypesInput = new ListActionTypesInput();
    $request->listActionTypesInput->actionOwnerFilter = ActionOwnerEnum::CUSTOM;
    $request->listActionTypesInput->nextToken = 'provident';
    $request->listActionTypesInput->regionFilter = 'nam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = ListActionTypesXAmzTargetEnum::CODE_PIPELINE20150709_LIST_ACTION_TYPES;
    $request->nextToken = 'vel';

    $response = $sdk->sdk->listActionTypes($request);

    if ($response->listActionTypesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPipelineExecutions

Gets a summary of the most recent executions for a pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPipelineExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPipelineExecutionsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListPipelineExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPipelineExecutionsRequest();
    $request->listPipelineExecutionsInput = new ListPipelineExecutionsInput();
    $request->listPipelineExecutionsInput->maxResults = 618809;
    $request->listPipelineExecutionsInput->nextToken = 'omnis';
    $request->listPipelineExecutionsInput->pipelineName = 'molestiae';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = ListPipelineExecutionsXAmzTargetEnum::CODE_PIPELINE20150709_LIST_PIPELINE_EXECUTIONS;
    $request->maxResults = 'suscipit';
    $request->nextToken = 'natus';

    $response = $sdk->sdk->listPipelineExecutions($request);

    if ($response->listPipelineExecutionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPipelines

Gets a summary of all of the pipelines associated with your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPipelinesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPipelinesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListPipelinesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPipelinesRequest();
    $request->listPipelinesInput = new ListPipelinesInput();
    $request->listPipelinesInput->maxResults = 749170;
    $request->listPipelinesInput->nextToken = 'eum';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = ListPipelinesXAmzTargetEnum::CODE_PIPELINE20150709_LIST_PIPELINES;
    $request->maxResults = 'provident';
    $request->nextToken = 'quos';

    $response = $sdk->sdk->listPipelines($request);

    if ($response->listPipelinesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Gets the set of key-value pairs (metadata) that are used to manage the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceInput = new ListTagsForResourceInput();
    $request->listTagsForResourceInput->maxResults = 574325;
    $request->listTagsForResourceInput->nextToken = 'accusantium';
    $request->listTagsForResourceInput->resourceArn = 'mollitia';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::CODE_PIPELINE20150709_LIST_TAGS_FOR_RESOURCE;
    $request->maxResults = 'nemo';
    $request->nextToken = 'quasi';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWebhooks

Gets a listing of all the webhooks in this AWS Region for this account. The output lists all webhooks and includes the webhook URL and ARN and the configuration for each webhook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWebhooksRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListWebhooksInput;
use \OpenAPI\OpenAPI\Models\Operations\ListWebhooksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWebhooksRequest();
    $request->listWebhooksInput = new ListWebhooksInput();
    $request->listWebhooksInput->maxResults = 435865;
    $request->listWebhooksInput->nextToken = 'doloribus';
    $request->maxResults = 'debitis';
    $request->nextToken = 'eius';
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = ListWebhooksXAmzTargetEnum::CODE_PIPELINE20150709_LIST_WEBHOOKS;

    $response = $sdk->sdk->listWebhooks($request);

    if ($response->listWebhooksOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pollForJobs

<p>Returns information about any jobs for AWS CodePipeline to act on. <code>PollForJobs</code> is valid only for action types with "Custom" in the owner field. If the action type contains "AWS" or "ThirdParty" in the owner field, the <code>PollForJobs</code> action returns an error.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PollForJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PollForJobsInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionTypeId;
use \OpenAPI\OpenAPI\Models\Shared\ActionCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionOwnerEnum;
use \OpenAPI\OpenAPI\Models\Operations\PollForJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PollForJobsRequest();
    $request->pollForJobsInput = new PollForJobsInput();
    $request->pollForJobsInput->actionTypeId = new ActionTypeId();
    $request->pollForJobsInput->actionTypeId->category = ActionCategoryEnum::DEPLOY;
    $request->pollForJobsInput->actionTypeId->owner = ActionOwnerEnum::CUSTOM;
    $request->pollForJobsInput->actionTypeId->provider = 'nihil';
    $request->pollForJobsInput->actionTypeId->version = 'repellat';
    $request->pollForJobsInput->maxBatchSize = 841140;
    $request->pollForJobsInput->queryParam = [
        'saepe' => 'pariatur',
    ];
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = PollForJobsXAmzTargetEnum::CODE_PIPELINE20150709_POLL_FOR_JOBS;

    $response = $sdk->sdk->pollForJobs($request);

    if ($response->pollForJobsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pollForThirdPartyJobs

<p>Determines whether there are any third party jobs for a job worker to act on. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PollForThirdPartyJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PollForThirdPartyJobsInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionTypeId;
use \OpenAPI\OpenAPI\Models\Shared\ActionCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionOwnerEnum;
use \OpenAPI\OpenAPI\Models\Operations\PollForThirdPartyJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PollForThirdPartyJobsRequest();
    $request->pollForThirdPartyJobsInput = new PollForThirdPartyJobsInput();
    $request->pollForThirdPartyJobsInput->actionTypeId = new ActionTypeId();
    $request->pollForThirdPartyJobsInput->actionTypeId->category = ActionCategoryEnum::APPROVAL;
    $request->pollForThirdPartyJobsInput->actionTypeId->owner = ActionOwnerEnum::CUSTOM;
    $request->pollForThirdPartyJobsInput->actionTypeId->provider = 'maxime';
    $request->pollForThirdPartyJobsInput->actionTypeId->version = 'ea';
    $request->pollForThirdPartyJobsInput->maxBatchSize = 569101;
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = PollForThirdPartyJobsXAmzTargetEnum::CODE_PIPELINE20150709_POLL_FOR_THIRD_PARTY_JOBS;

    $response = $sdk->sdk->pollForThirdPartyJobs($request);

    if ($response->pollForThirdPartyJobsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putActionRevision

Provides information to AWS CodePipeline about new revisions to a source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutActionRevisionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutActionRevisionInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionRevision;
use \OpenAPI\OpenAPI\Models\Operations\PutActionRevisionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutActionRevisionRequest();
    $request->putActionRevisionInput = new PutActionRevisionInput();
    $request->putActionRevisionInput->actionName = 'voluptate';
    $request->putActionRevisionInput->actionRevision = new ActionRevision();
    $request->putActionRevisionInput->actionRevision->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-12T10:47:34.158Z');
    $request->putActionRevisionInput->actionRevision->revisionChangeId = 'eaque';
    $request->putActionRevisionInput->actionRevision->revisionId = 'pariatur';
    $request->putActionRevisionInput->pipelineName = 'nemo';
    $request->putActionRevisionInput->stageName = 'voluptatibus';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = PutActionRevisionXAmzTargetEnum::CODE_PIPELINE20150709_PUT_ACTION_REVISION;

    $response = $sdk->sdk->putActionRevision($request);

    if ($response->putActionRevisionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putApprovalResult

Provides the response to a manual approval request to AWS CodePipeline. Valid responses include Approved and Rejected.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutApprovalResultRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutApprovalResultInput;
use \OpenAPI\OpenAPI\Models\Shared\ApprovalResult;
use \OpenAPI\OpenAPI\Models\Shared\ApprovalStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutApprovalResultXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutApprovalResultRequest();
    $request->putApprovalResultInput = new PutApprovalResultInput();
    $request->putApprovalResultInput->actionName = 'libero';
    $request->putApprovalResultInput->pipelineName = 'nobis';
    $request->putApprovalResultInput->result = new ApprovalResult();
    $request->putApprovalResultInput->result->status = ApprovalStatusEnum::APPROVED;
    $request->putApprovalResultInput->result->summary = 'quis';
    $request->putApprovalResultInput->stageName = 'totam';
    $request->putApprovalResultInput->token = 'dignissimos';
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = PutApprovalResultXAmzTargetEnum::CODE_PIPELINE20150709_PUT_APPROVAL_RESULT;

    $response = $sdk->sdk->putApprovalResult($request);

    if ($response->putApprovalResultOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putJobFailureResult

Represents the failure of a job as returned to the pipeline by a job worker. Used for custom actions only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutJobFailureResultRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutJobFailureResultInput;
use \OpenAPI\OpenAPI\Models\Shared\FailureDetails;
use \OpenAPI\OpenAPI\Models\Shared\FailureTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutJobFailureResultXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutJobFailureResultRequest();
    $request->putJobFailureResultInput = new PutJobFailureResultInput();
    $request->putJobFailureResultInput->failureDetails = new FailureDetails();
    $request->putJobFailureResultInput->failureDetails->externalExecutionId = 'quam';
    $request->putJobFailureResultInput->failureDetails->message = 'dolor';
    $request->putJobFailureResultInput->failureDetails->type = FailureTypeEnum::SYSTEM_UNAVAILABLE;
    $request->putJobFailureResultInput->jobId = 'nostrum';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = PutJobFailureResultXAmzTargetEnum::CODE_PIPELINE20150709_PUT_JOB_FAILURE_RESULT;

    $response = $sdk->sdk->putJobFailureResult($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putJobSuccessResult

Represents the success of a job as returned to the pipeline by a job worker. Used for custom actions only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutJobSuccessResultRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutJobSuccessResultInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrentRevision;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionDetails;
use \OpenAPI\OpenAPI\Models\Operations\PutJobSuccessResultXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutJobSuccessResultRequest();
    $request->putJobSuccessResultInput = new PutJobSuccessResultInput();
    $request->putJobSuccessResultInput->continuationToken = 'consequuntur';
    $request->putJobSuccessResultInput->currentRevision = new CurrentRevision();
    $request->putJobSuccessResultInput->currentRevision->changeIdentifier = 'blanditiis';
    $request->putJobSuccessResultInput->currentRevision->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-25T05:30:58.706Z');
    $request->putJobSuccessResultInput->currentRevision->revision = 'occaecati';
    $request->putJobSuccessResultInput->currentRevision->revisionSummary = 'rerum';
    $request->putJobSuccessResultInput->executionDetails = new ExecutionDetails();
    $request->putJobSuccessResultInput->executionDetails->externalExecutionId = 'adipisci';
    $request->putJobSuccessResultInput->executionDetails->percentComplete = 992397;
    $request->putJobSuccessResultInput->executionDetails->summary = 'earum';
    $request->putJobSuccessResultInput->jobId = 'modi';
    $request->putJobSuccessResultInput->outputVariables = [
        'dolorum' => 'deleniti',
        'pariatur' => 'provident',
        'nobis' => 'libero',
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = PutJobSuccessResultXAmzTargetEnum::CODE_PIPELINE20150709_PUT_JOB_SUCCESS_RESULT;

    $response = $sdk->sdk->putJobSuccessResult($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putThirdPartyJobFailureResult

Represents the failure of a third party job as returned to the pipeline by a job worker. Used for partner actions only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutThirdPartyJobFailureResultRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutThirdPartyJobFailureResultInput;
use \OpenAPI\OpenAPI\Models\Shared\FailureDetails;
use \OpenAPI\OpenAPI\Models\Shared\FailureTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutThirdPartyJobFailureResultXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutThirdPartyJobFailureResultRequest();
    $request->putThirdPartyJobFailureResultInput = new PutThirdPartyJobFailureResultInput();
    $request->putThirdPartyJobFailureResultInput->clientToken = 'qui';
    $request->putThirdPartyJobFailureResultInput->failureDetails = new FailureDetails();
    $request->putThirdPartyJobFailureResultInput->failureDetails->externalExecutionId = 'ipsum';
    $request->putThirdPartyJobFailureResultInput->failureDetails->message = 'hic';
    $request->putThirdPartyJobFailureResultInput->failureDetails->type = FailureTypeEnum::REVISION_OUT_OF_SYNC;
    $request->putThirdPartyJobFailureResultInput->jobId = 'cum';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = PutThirdPartyJobFailureResultXAmzTargetEnum::CODE_PIPELINE20150709_PUT_THIRD_PARTY_JOB_FAILURE_RESULT;

    $response = $sdk->sdk->putThirdPartyJobFailureResult($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putThirdPartyJobSuccessResult

Represents the success of a third party job as returned to the pipeline by a job worker. Used for partner actions only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutThirdPartyJobSuccessResultRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutThirdPartyJobSuccessResultInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrentRevision;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionDetails;
use \OpenAPI\OpenAPI\Models\Operations\PutThirdPartyJobSuccessResultXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutThirdPartyJobSuccessResultRequest();
    $request->putThirdPartyJobSuccessResultInput = new PutThirdPartyJobSuccessResultInput();
    $request->putThirdPartyJobSuccessResultInput->clientToken = 'ipsa';
    $request->putThirdPartyJobSuccessResultInput->continuationToken = 'ipsa';
    $request->putThirdPartyJobSuccessResultInput->currentRevision = new CurrentRevision();
    $request->putThirdPartyJobSuccessResultInput->currentRevision->changeIdentifier = 'iure';
    $request->putThirdPartyJobSuccessResultInput->currentRevision->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-09T04:40:04.540Z');
    $request->putThirdPartyJobSuccessResultInput->currentRevision->revision = 'accusamus';
    $request->putThirdPartyJobSuccessResultInput->currentRevision->revisionSummary = 'quidem';
    $request->putThirdPartyJobSuccessResultInput->executionDetails = new ExecutionDetails();
    $request->putThirdPartyJobSuccessResultInput->executionDetails->externalExecutionId = 'voluptatibus';
    $request->putThirdPartyJobSuccessResultInput->executionDetails->percentComplete = 377752;
    $request->putThirdPartyJobSuccessResultInput->executionDetails->summary = 'natus';
    $request->putThirdPartyJobSuccessResultInput->jobId = 'eos';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = PutThirdPartyJobSuccessResultXAmzTargetEnum::CODE_PIPELINE20150709_PUT_THIRD_PARTY_JOB_SUCCESS_RESULT;

    $response = $sdk->sdk->putThirdPartyJobSuccessResult($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putWebhook

Defines a webhook and returns a unique webhook URL generated by CodePipeline. This URL can be supplied to third party source hosting providers to call every time there's a code change. When CodePipeline receives a POST request on this URL, the pipeline defined in the webhook is started as long as the POST request satisfied the authentication and filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty and DeregisterWebhookWithThirdParty APIs can be used to automatically configure supported third parties to call the generated webhook URL.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutWebhookInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\WebhookDefinition;
use \OpenAPI\OpenAPI\Models\Shared\WebhookAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebhookAuthConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WebhookFilterRule;
use \OpenAPI\OpenAPI\Models\Operations\PutWebhookXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutWebhookRequest();
    $request->putWebhookInput = new PutWebhookInput();
    $request->putWebhookInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->putWebhookInput->webhook = new WebhookDefinition();
    $request->putWebhookInput->webhook->authentication = WebhookAuthenticationTypeEnum::UNAUTHENTICATED;
    $request->putWebhookInput->webhook->authenticationConfiguration = new WebhookAuthConfiguration();
    $request->putWebhookInput->webhook->authenticationConfiguration->allowedIPRange = 'deleniti';
    $request->putWebhookInput->webhook->authenticationConfiguration->secretToken = 'omnis';
    $request->putWebhookInput->webhook->filters = [
        new WebhookFilterRule(),
        new WebhookFilterRule(),
        new WebhookFilterRule(),
        new WebhookFilterRule(),
    ];
    $request->putWebhookInput->webhook->name = 'Emmett Kovacek';
    $request->putWebhookInput->webhook->targetAction = 'id';
    $request->putWebhookInput->webhook->targetPipeline = 'saepe';
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = PutWebhookXAmzTargetEnum::CODE_PIPELINE20150709_PUT_WEBHOOK;

    $response = $sdk->sdk->putWebhook($request);

    if ($response->putWebhookOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerWebhookWithThirdParty

Configures a connection between the webhook that was created and the external tool with events to be detected.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterWebhookWithThirdPartyRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterWebhookWithThirdPartyInput;
use \OpenAPI\OpenAPI\Models\Operations\RegisterWebhookWithThirdPartyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterWebhookWithThirdPartyRequest();
    $request->registerWebhookWithThirdPartyInput = new RegisterWebhookWithThirdPartyInput();
    $request->registerWebhookWithThirdPartyInput->webhookName = 'saepe';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'similique';
    $request->xAmzTarget = RegisterWebhookWithThirdPartyXAmzTargetEnum::CODE_PIPELINE20150709_REGISTER_WEBHOOK_WITH_THIRD_PARTY;

    $response = $sdk->sdk->registerWebhookWithThirdParty($request);

    if ($response->registerWebhookWithThirdPartyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retryStageExecution

Resumes the pipeline execution by retrying the last failed actions in a stage. You can retry a stage immediately if any of the actions in the stage fail. When you retry, all actions that are still in progress continue working, and failed actions are triggered again.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetryStageExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\RetryStageExecutionInput;
use \OpenAPI\OpenAPI\Models\Shared\StageRetryModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetryStageExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetryStageExecutionRequest();
    $request->retryStageExecutionInput = new RetryStageExecutionInput();
    $request->retryStageExecutionInput->pipelineExecutionId = 'alias';
    $request->retryStageExecutionInput->pipelineName = 'at';
    $request->retryStageExecutionInput->retryMode = StageRetryModeEnum::FAILED_ACTIONS;
    $request->retryStageExecutionInput->stageName = 'quaerat';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = RetryStageExecutionXAmzTargetEnum::CODE_PIPELINE20150709_RETRY_STAGE_EXECUTION;

    $response = $sdk->sdk->retryStageExecution($request);

    if ($response->retryStageExecutionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startPipelineExecution

Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartPipelineExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartPipelineExecutionInput;
use \OpenAPI\OpenAPI\Models\Operations\StartPipelineExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartPipelineExecutionRequest();
    $request->startPipelineExecutionInput = new StartPipelineExecutionInput();
    $request->startPipelineExecutionInput->clientRequestToken = 'esse';
    $request->startPipelineExecutionInput->name = 'Tyrone Emard';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = StartPipelineExecutionXAmzTargetEnum::CODE_PIPELINE20150709_START_PIPELINE_EXECUTION;

    $response = $sdk->sdk->startPipelineExecution($request);

    if ($response->startPipelineExecutionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPipelineExecution

Stops the specified pipeline execution. You choose to either stop the pipeline execution by completing in-progress actions without starting subsequent actions, or by abandoning in-progress actions. While completing or abandoning in-progress actions, the pipeline execution is in a <code>Stopping</code> state. After all in-progress actions are completed or abandoned, the pipeline execution is in a <code>Stopped</code> state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopPipelineExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopPipelineExecutionInput;
use \OpenAPI\OpenAPI\Models\Operations\StopPipelineExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPipelineExecutionRequest();
    $request->stopPipelineExecutionInput = new StopPipelineExecutionInput();
    $request->stopPipelineExecutionInput->abandon = false;
    $request->stopPipelineExecutionInput->pipelineExecutionId = 'totam';
    $request->stopPipelineExecutionInput->pipelineName = 'nihil';
    $request->stopPipelineExecutionInput->reason = 'sit';
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = StopPipelineExecutionXAmzTargetEnum::CODE_PIPELINE20150709_STOP_PIPELINE_EXECUTION;

    $response = $sdk->sdk->stopPipelineExecution($request);

    if ($response->stopPipelineExecutionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceInput = new TagResourceInput();
    $request->tagResourceInput->resourceArn = 'quam';
    $request->tagResourceInput->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::CODE_PIPELINE20150709_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from an AWS resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceInput = new UntagResourceInput();
    $request->untagResourceInput->resourceArn = 'laborum';
    $request->untagResourceInput->tagKeys = [
        'incidunt',
        'aspernatur',
        'dolores',
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::CODE_PIPELINE20150709_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateActionType

Updates an action type that was created with any supported integration model, where the action type is to be used by customers of the action type provider. Use a JSON file with the action definition and <code>UpdateActionType</code> to provide the full structure.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateActionTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateActionTypeInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionTypeDeclaration;
use \OpenAPI\OpenAPI\Models\Shared\ActionTypeExecutor;
use \OpenAPI\OpenAPI\Models\Shared\ExecutorConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\JobWorkerExecutorConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LambdaExecutorConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ExecutorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionTypeIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\ActionCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionTypeArtifactDetails;
use \OpenAPI\OpenAPI\Models\Shared\ActionTypePermissions;
use \OpenAPI\OpenAPI\Models\Shared\ActionTypeUrls;
use \OpenAPI\OpenAPI\Models\Operations\UpdateActionTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateActionTypeRequest();
    $request->updateActionTypeInput = new UpdateActionTypeInput();
    $request->updateActionTypeInput->actionType = new ActionTypeDeclaration();
    $request->updateActionTypeInput->actionType->description = 'neque';
    $request->updateActionTypeInput->actionType->executor = new ActionTypeExecutor();
    $request->updateActionTypeInput->actionType->executor->configuration = new ExecutorConfiguration();
    $request->updateActionTypeInput->actionType->executor->configuration->jobWorkerExecutorConfiguration = new JobWorkerExecutorConfiguration();
    $request->updateActionTypeInput->actionType->executor->configuration->jobWorkerExecutorConfiguration->pollingAccounts = [
        'magni',
    ];
    $request->updateActionTypeInput->actionType->executor->configuration->jobWorkerExecutorConfiguration->pollingServicePrincipals = [
        'sunt',
        'ullam',
    ];
    $request->updateActionTypeInput->actionType->executor->configuration->lambdaExecutorConfiguration = new LambdaExecutorConfiguration();
    $request->updateActionTypeInput->actionType->executor->configuration->lambdaExecutorConfiguration->lambdaFunctionArn = 'nam';
    $request->updateActionTypeInput->actionType->executor->jobTimeout = 940432;
    $request->updateActionTypeInput->actionType->executor->policyStatementsTemplate = 'voluptatem';
    $request->updateActionTypeInput->actionType->executor->type = ExecutorTypeEnum::LAMBDA;
    $request->updateActionTypeInput->actionType->id = new ActionTypeIdentifier();
    $request->updateActionTypeInput->actionType->id->category = ActionCategoryEnum::INVOKE;
    $request->updateActionTypeInput->actionType->id->owner = 'nobis';
    $request->updateActionTypeInput->actionType->id->provider = 'et';
    $request->updateActionTypeInput->actionType->id->version = 'saepe';
    $request->updateActionTypeInput->actionType->inputArtifactDetails = new ActionTypeArtifactDetails();
    $request->updateActionTypeInput->actionType->inputArtifactDetails->maximumCount = 217450;
    $request->updateActionTypeInput->actionType->inputArtifactDetails->minimumCount = 83422;
    $request->updateActionTypeInput->actionType->outputArtifactDetails = new ActionTypeArtifactDetails();
    $request->updateActionTypeInput->actionType->outputArtifactDetails->maximumCount = 749255;
    $request->updateActionTypeInput->actionType->outputArtifactDetails->minimumCount = 552193;
    $request->updateActionTypeInput->actionType->permissions = new ActionTypePermissions();
    $request->updateActionTypeInput->actionType->permissions->allowedAccounts = [
        'cupiditate',
        'aperiam',
        'delectus',
    ];
    $request->updateActionTypeInput->actionType->properties = 'dolorem';
    $request->updateActionTypeInput->actionType->urls = new ActionTypeUrls();
    $request->updateActionTypeInput->actionType->urls->configurationUrl = 'dolore';
    $request->updateActionTypeInput->actionType->urls->entityUrlTemplate = 'labore';
    $request->updateActionTypeInput->actionType->urls->executionUrlTemplate = 'adipisci';
    $request->updateActionTypeInput->actionType->urls->revisionUrlTemplate = 'dolorum';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = UpdateActionTypeXAmzTargetEnum::CODE_PIPELINE20150709_UPDATE_ACTION_TYPE;

    $response = $sdk->sdk->updateActionType($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePipeline

Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure and <code>UpdatePipeline</code> to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePipelineInput;
use \OpenAPI\OpenAPI\Models\Shared\PipelineDeclaration;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactStore;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactStoreTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StageDeclaration;
use \OpenAPI\OpenAPI\Models\Shared\ActionDeclaration;
use \OpenAPI\OpenAPI\Models\Shared\ActionTypeId;
use \OpenAPI\OpenAPI\Models\Shared\ActionCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionOwnerEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputArtifact;
use \OpenAPI\OpenAPI\Models\Shared\OutputArtifact;
use \OpenAPI\OpenAPI\Models\Shared\BlockerDeclaration;
use \OpenAPI\OpenAPI\Models\Shared\BlockerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePipelineRequest();
    $request->updatePipelineInput = new UpdatePipelineInput();
    $request->updatePipelineInput->pipeline = new PipelineDeclaration();
    $request->updatePipelineInput->pipeline->artifactStore = new ArtifactStore();
    $request->updatePipelineInput->pipeline->artifactStore->encryptionKey = new EncryptionKey();
    $request->updatePipelineInput->pipeline->artifactStore->encryptionKey->id = 'dcf4b921-879f-4ce9-93f7-3ef7fbc7abd7';
    $request->updatePipelineInput->pipeline->artifactStore->encryptionKey->type = EncryptionKeyTypeEnum::KMS;
    $request->updatePipelineInput->pipeline->artifactStore->location = 'dolore';
    $request->updatePipelineInput->pipeline->artifactStore->type = ArtifactStoreTypeEnum::S3;
    $request->updatePipelineInput->pipeline->artifactStores = [
        'illum' => new ArtifactStore(),
        'sequi' => new ArtifactStore(),
        'natus' => new ArtifactStore(),
        'impedit' => new ArtifactStore(),
    ];
    $request->updatePipelineInput->pipeline->name = 'Camille Heidenreich';
    $request->updatePipelineInput->pipeline->roleArn = 'porro';
    $request->updatePipelineInput->pipeline->stages = [
        new StageDeclaration(),
        new StageDeclaration(),
        new StageDeclaration(),
        new StageDeclaration(),
    ];
    $request->updatePipelineInput->pipeline->version = 985033;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = UpdatePipelineXAmzTargetEnum::CODE_PIPELINE20150709_UPDATE_PIPELINE;

    $response = $sdk->sdk->updatePipeline($request);

    if ($response->updatePipelineOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
