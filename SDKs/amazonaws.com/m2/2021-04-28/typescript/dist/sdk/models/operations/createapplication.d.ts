import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The application definition for a particular application.
 */
export declare class CreateApplicationRequestBodyDefinition extends SpeakeasyBase {
    content?: string;
    s3Location?: string;
}
/**
 * The type of the target platform for this application.
 */
export declare enum CreateApplicationRequestBodyEngineTypeEnum {
    Microfocus = "microfocus",
    Bluage = "bluage"
}
export declare class CreateApplicationRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier the service generates to ensure the idempotency of the request to create an application. The service generates the clientToken when the API call is triggered. The token expires after one hour, so if you retry the API within this timeframe with the same clientToken, you will get the same response. The service also handles deleting the clientToken after it expires.
     */
    clientToken?: string;
    /**
     * The application definition for a particular application.
     */
    definition: CreateApplicationRequestBodyDefinition;
    /**
     * The description of the application.
     */
    description?: string;
    /**
     * The type of the target platform for this application.
     */
    engineType: CreateApplicationRequestBodyEngineTypeEnum;
    /**
     * The identifier of a customer managed key.
     */
    kmsKeyId?: string;
    /**
     * The unique identifier of the application.
     */
    name: string;
    /**
     * A list of tags to apply to the application.
     */
    tags?: Record<string, string>;
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    requestBody: CreateApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
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
    createApplicationResponse?: shared.CreateApplicationResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
     * ValidationException
     */
    validationException?: any;
}
