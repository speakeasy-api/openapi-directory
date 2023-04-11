import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSchemaRequestBody extends SpeakeasyBase {
    /**
     * The name that is associated with the schema. This is unique to each account and in each region.
     */
    name: string;
}
export declare class CreateSchemaRequest extends SpeakeasyBase {
    requestBody: CreateSchemaRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSchemaResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createSchemaResponse?: shared.CreateSchemaResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: any;
    /**
     * SchemaAlreadyExistsException
     */
    schemaAlreadyExistsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
