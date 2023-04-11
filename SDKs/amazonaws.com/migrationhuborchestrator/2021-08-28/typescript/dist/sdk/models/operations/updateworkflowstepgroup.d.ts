import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateWorkflowStepGroupRequestBody extends SpeakeasyBase {
    /**
     * The description of the step group.
     */
    description?: string;
    /**
     * The name of the step group.
     */
    name?: string;
    /**
     * The next step group.
     */
    next?: string[];
    /**
     * The previous step group.
     */
    previous?: string[];
}
export declare class UpdateWorkflowStepGroupRequest extends SpeakeasyBase {
    requestBody: UpdateWorkflowStepGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the step group.
     */
    id: string;
    /**
     * The ID of the migration workflow.
     */
    workflowId: string;
}
export declare class UpdateWorkflowStepGroupResponse extends SpeakeasyBase {
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
    updateWorkflowStepGroupResponse?: shared.UpdateWorkflowStepGroupResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
