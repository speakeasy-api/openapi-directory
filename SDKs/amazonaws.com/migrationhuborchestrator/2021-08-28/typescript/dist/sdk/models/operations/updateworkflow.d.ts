import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateWorkflowRequestBody extends SpeakeasyBase {
    /**
     * The description of the migration workflow.
     */
    description?: string;
    /**
     * The input parameters required to update a migration workflow.
     */
    inputParameters?: Record<string, shared.StepInput>;
    /**
     * The name of the migration workflow.
     */
    name?: string;
    /**
     * The servers on which a step will be run.
     */
    stepTargets?: string[];
}
export declare class UpdateWorkflowRequest extends SpeakeasyBase {
    requestBody: UpdateWorkflowRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the migration workflow.
     */
    id: string;
}
export declare class UpdateWorkflowResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateMigrationWorkflowResponse?: shared.UpdateMigrationWorkflowResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
