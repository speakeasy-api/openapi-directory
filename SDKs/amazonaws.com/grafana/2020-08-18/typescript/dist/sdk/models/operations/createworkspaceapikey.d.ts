import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateWorkspaceApiKeyRequestBody extends SpeakeasyBase {
    /**
     * Specifies the name of the key. Keynames must be unique to the workspace.
     */
    keyName: string;
    /**
     * <p>Specifies the permission level of the key.</p> <p> Valid values: <code>VIEWER</code>|<code>EDITOR</code>|<code>ADMIN</code> </p>
     */
    keyRole: string;
    /**
     * Specifies the time in seconds until the key expires. Keys can be valid for up to 30 days.
     */
    secondsToLive: number;
}
export declare class CreateWorkspaceApiKeyRequest extends SpeakeasyBase {
    requestBody: CreateWorkspaceApiKeyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the workspace to create an API key.
     */
    workspaceId: string;
}
export declare class CreateWorkspaceApiKeyResponse extends SpeakeasyBase {
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
    createWorkspaceApiKeyResponse?: shared.CreateWorkspaceApiKeyResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
