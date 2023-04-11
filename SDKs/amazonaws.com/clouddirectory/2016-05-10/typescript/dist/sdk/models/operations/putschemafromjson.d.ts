import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSchemaFromJsonRequestBody extends SpeakeasyBase {
    /**
     * The replacement JSON schema.
     */
    document: string;
}
export declare class PutSchemaFromJsonRequest extends SpeakeasyBase {
    requestBody: PutSchemaFromJsonRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ARN of the schema to update.
     */
    xAmzDataPartition: string;
}
export declare class PutSchemaFromJsonResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: shared.InternalServiceException;
    /**
     * InvalidArnException
     */
    invalidArnException?: shared.InvalidArnException;
    /**
     * InvalidRuleException
     */
    invalidRuleException?: shared.InvalidRuleException;
    /**
     * InvalidSchemaDocException
     */
    invalidSchemaDocException?: shared.InvalidSchemaDocException;
    /**
     * LimitExceededException
     */
    limitExceededException?: shared.LimitExceededException;
    /**
     * Success
     */
    putSchemaFromJsonResponse?: shared.PutSchemaFromJsonResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: shared.RetryableConflictException;
    /**
     * ValidationException
     */
    validationException?: shared.ValidationException;
}
