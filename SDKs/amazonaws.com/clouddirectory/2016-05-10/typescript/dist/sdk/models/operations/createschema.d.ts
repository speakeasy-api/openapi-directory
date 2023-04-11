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
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    /**
     * Success
     */
    createSchemaResponse?: shared.CreateSchemaResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: shared.InternalServiceException;
    /**
     * InvalidArnException
     */
    invalidArnException?: shared.InvalidArnException;
    /**
     * LimitExceededException
     */
    limitExceededException?: shared.LimitExceededException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: shared.RetryableConflictException;
    /**
     * SchemaAlreadyExistsException
     */
    schemaAlreadyExistsException?: shared.SchemaAlreadyExistsException;
    /**
     * ValidationException
     */
    validationException?: shared.ValidationException;
}
