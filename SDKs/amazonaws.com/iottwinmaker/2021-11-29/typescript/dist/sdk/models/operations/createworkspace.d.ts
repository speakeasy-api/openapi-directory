import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateWorkspaceRequestBody extends SpeakeasyBase {
    /**
     * The description of the workspace.
     */
    description?: string;
    /**
     * The ARN of the execution role associated with the workspace.
     */
    role: string;
    /**
     * The ARN of the S3 bucket where resources associated with the workspace are stored.
     */
    s3Location: string;
    /**
     * Metadata that you can use to manage the workspace
     */
    tags?: Record<string, string>;
}
export declare class CreateWorkspaceRequest extends SpeakeasyBase {
    requestBody: CreateWorkspaceRequestBody;
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
export declare class CreateWorkspaceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createWorkspaceResponse?: shared.CreateWorkspaceResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
