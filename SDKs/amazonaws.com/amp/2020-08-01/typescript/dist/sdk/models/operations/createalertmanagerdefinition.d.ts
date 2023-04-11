import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAlertManagerDefinitionRequestBody extends SpeakeasyBase {
    /**
     * An identifier used to ensure the idempotency of a write request.
     */
    clientToken?: string;
    /**
     * The alert manager definition data.
     */
    data: string;
}
export declare class CreateAlertManagerDefinitionRequest extends SpeakeasyBase {
    requestBody: CreateAlertManagerDefinitionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the workspace in which to create the alert manager definition.
     */
    workspaceId: string;
}
export declare class CreateAlertManagerDefinitionResponse extends SpeakeasyBase {
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
    createAlertManagerDefinitionResponse?: shared.CreateAlertManagerDefinitionResponse;
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
