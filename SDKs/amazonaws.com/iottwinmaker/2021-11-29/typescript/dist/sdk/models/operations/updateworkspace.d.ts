import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateWorkspaceRequestBody extends SpeakeasyBase {
    /**
     * The description of the workspace.
     */
    description?: string;
    /**
     * The ARN of the execution role associated with the workspace.
     */
    role?: string;
}
export declare class UpdateWorkspaceRequest extends SpeakeasyBase {
    requestBody: UpdateWorkspaceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the workspace.
     */
    workspaceId: string;
}
export declare class UpdateWorkspaceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateWorkspaceResponse?: shared.UpdateWorkspaceResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
