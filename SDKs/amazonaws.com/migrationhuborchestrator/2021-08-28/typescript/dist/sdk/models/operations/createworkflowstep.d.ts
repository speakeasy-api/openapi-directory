import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step.
 */
export declare enum CreateWorkflowStepRequestBodyStepActionTypeEnum {
    Manual = "MANUAL",
    Automated = "AUTOMATED"
}
/**
 * The custom script to run tests on source or target environments.
 */
export declare class CreateWorkflowStepRequestBodyWorkflowStepAutomationConfiguration extends SpeakeasyBase {
    command?: shared.PlatformCommand;
    runEnvironment?: shared.RunEnvironmentEnum;
    scriptLocationS3Bucket?: string;
    scriptLocationS3Key?: shared.PlatformScriptKey;
    targetType?: shared.TargetTypeEnum;
}
export declare class CreateWorkflowStepRequestBody extends SpeakeasyBase {
    /**
     * The description of the step.
     */
    description?: string;
    /**
     * The name of the step.
     */
    name: string;
    /**
     * The next step.
     */
    next?: string[];
    /**
     * The key value pairs added for the expected output.
     */
    outputs?: shared.WorkflowStepOutput[];
    /**
     * The previous step.
     */
    previous?: string[];
    /**
     * The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step.
     */
    stepActionType: CreateWorkflowStepRequestBodyStepActionTypeEnum;
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
    workflowStepAutomationConfiguration?: CreateWorkflowStepRequestBodyWorkflowStepAutomationConfiguration;
}
export declare class CreateWorkflowStepRequest extends SpeakeasyBase {
    requestBody: CreateWorkflowStepRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateWorkflowStepResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createWorkflowStepResponse?: shared.CreateWorkflowStepResponse;
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
     * ValidationException
     */
    validationException?: any;
}
