import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The status of the step.
 */
export declare enum UpdateWorkflowStepRequestBodyStatusEnum {
    AwaitingDependencies = "AWAITING_DEPENDENCIES",
    Ready = "READY",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
    Failed = "FAILED",
    Paused = "PAUSED",
    UserAttentionRequired = "USER_ATTENTION_REQUIRED"
}
/**
 * The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step.
 */
export declare enum UpdateWorkflowStepRequestBodyStepActionTypeEnum {
    Manual = "MANUAL",
    Automated = "AUTOMATED"
}
/**
 * The custom script to run tests on source or target environments.
 */
export declare class UpdateWorkflowStepRequestBodyWorkflowStepAutomationConfiguration extends SpeakeasyBase {
    command?: shared.PlatformCommand;
    runEnvironment?: shared.RunEnvironmentEnum;
    scriptLocationS3Bucket?: string;
    scriptLocationS3Key?: shared.PlatformScriptKey;
    targetType?: shared.TargetTypeEnum;
}
export declare class UpdateWorkflowStepRequestBody extends SpeakeasyBase {
    /**
     * The description of the step.
     */
    description?: string;
    /**
     * The name of the step.
     */
    name?: string;
    /**
     * The next step.
     */
    next?: string[];
    /**
     * The outputs of a step.
     */
    outputs?: shared.WorkflowStepOutput[];
    /**
     * The previous step.
     */
    previous?: string[];
    /**
     * The status of the step.
     */
    status?: UpdateWorkflowStepRequestBodyStatusEnum;
    /**
     * The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step.
     */
    stepActionType?: UpdateWorkflowStepRequestBodyStepActionTypeEnum;
    /**
     * The ID of the step group.
     */
    stepGroupId: string;
    /**
     * The servers on which a step will be run.
     */
    stepTarget?: string[];
    /**
     * The ID of the migration workflow.
     */
    workflowId: string;
    /**
     * The custom script to run tests on source or target environments.
     */
    workflowStepAutomationConfiguration?: UpdateWorkflowStepRequestBodyWorkflowStepAutomationConfiguration;
}
export declare class UpdateWorkflowStepRequest extends SpeakeasyBase {
    requestBody: UpdateWorkflowStepRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the step.
     */
    id: string;
}
export declare class UpdateWorkflowStepResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateWorkflowStepResponse?: shared.UpdateWorkflowStepResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
