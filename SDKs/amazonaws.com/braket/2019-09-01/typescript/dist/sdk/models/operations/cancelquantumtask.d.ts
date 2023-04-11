import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelQuantumTaskRequestBody extends SpeakeasyBase {
    /**
     * The client token associated with the request.
     */
    clientToken: string;
}
export declare class CancelQuantumTaskRequest extends SpeakeasyBase {
    requestBody: CancelQuantumTaskRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ARN of the task to cancel.
     */
    quantumTaskArn: string;
}
export declare class CancelQuantumTaskResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    cancelQuantumTaskResponse?: shared.CancelQuantumTaskResponse;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
