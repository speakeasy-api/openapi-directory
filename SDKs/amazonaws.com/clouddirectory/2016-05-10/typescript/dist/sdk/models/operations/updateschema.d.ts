import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSchemaRequestBody extends SpeakeasyBase {
    /**
     * The name of the schema.
     */
    name: string;
}
export declare class UpdateSchemaRequest extends SpeakeasyBase {
    requestBody: UpdateSchemaRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) of the development schema. For more information, see <a>arns</a>.
     */
    xAmzDataPartition: string;
}
export declare class UpdateSchemaResponse extends SpeakeasyBase {
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
     * LimitExceededException
     */
    limitExceededException?: shared.LimitExceededException;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: shared.ResourceNotFoundException;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSchemaResponse?: shared.UpdateSchemaResponse;
    /**
     * ValidationException
     */
    validationException?: shared.ValidationException;
}
