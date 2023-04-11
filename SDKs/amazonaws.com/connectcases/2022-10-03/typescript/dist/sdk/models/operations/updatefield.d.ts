import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateFieldRequestBody extends SpeakeasyBase {
    /**
     * The description of a field.
     */
    description?: string;
    /**
     * The name of the field.
     */
    name?: string;
}
export declare class UpdateFieldRequest extends SpeakeasyBase {
    requestBody: UpdateFieldRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the Cases domain.
     */
    domainId: string;
    /**
     * The unique identifier of a field.
     */
    fieldId: string;
}
export declare class UpdateFieldResponse extends SpeakeasyBase {
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateFieldResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
