import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The application definition for a particular application.
 */
export declare class UpdateApplicationRequestBodyDefinition extends SpeakeasyBase {
    content?: string;
    s3Location?: string;
}
export declare class UpdateApplicationRequestBody extends SpeakeasyBase {
    /**
     * The current version of the application to update.
     */
    currentApplicationVersion: number;
    /**
     * The application definition for a particular application.
     */
    definition?: UpdateApplicationRequestBodyDefinition;
    /**
     * The description of the application to update.
     */
    description?: string;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    requestBody: UpdateApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the application you want to update.
     */
    applicationId: string;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
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
    updateApplicationResponse?: shared.UpdateApplicationResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
