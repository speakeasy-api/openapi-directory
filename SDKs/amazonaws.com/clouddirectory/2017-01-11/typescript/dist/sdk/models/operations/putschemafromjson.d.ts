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
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidRuleException
     */
    invalidRuleException?: any;
    /**
     * InvalidSchemaDocException
     */
    invalidSchemaDocException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    putSchemaFromJsonResponse?: shared.PutSchemaFromJsonResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
