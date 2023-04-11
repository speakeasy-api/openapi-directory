import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateWorkflowStepGroupRequestBody extends SpeakeasyBase {
    /**
     * The description of the step group.
     */
    description?: string;
    /**
     * The name of the step group.
     */
    name: string;
    /**
     * The next step group.
     */
    next?: string[];
    /**
     * The previous step group.
     */
    previous?: string[];
    /**
     * The ID of the migration workflow that will contain the step group.
     */
    workflowId: string;
}
export declare class CreateWorkflowStepGroupRequest extends SpeakeasyBase {
    requestBody: CreateWorkflowStepGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateWorkflowStepGroupResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createWorkflowStepGroupResponse?: shared.CreateWorkflowStepGroupResponse;
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
