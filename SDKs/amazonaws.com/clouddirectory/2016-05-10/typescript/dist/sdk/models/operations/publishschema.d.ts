import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishSchemaRequestBody extends SpeakeasyBase {
    /**
     * The minor version under which the schema will be published. This parameter is recommended. Schemas have both a major and minor version associated with them.
     */
    minorVersion?: string;
    /**
     * The new name under which the schema will be published. If this is not provided, the development schema is considered.
     */
    name?: string;
    /**
     * The major version under which the schema will be published. Schemas have both a major and minor version associated with them.
     */
    version: string;
}
export declare class PublishSchemaRequest extends SpeakeasyBase {
    requestBody: PublishSchemaRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) that is associated with the development schema. For more information, see <a>arns</a>.
     */
    xAmzDataPartition: string;
}
export declare class PublishSchemaResponse extends SpeakeasyBase {
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
     * Success
     */
    publishSchemaResponse?: shared.PublishSchemaResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: shared.ResourceNotFoundException;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: shared.RetryableConflictException;
    /**
     * SchemaAlreadyPublishedException
     */
    schemaAlreadyPublishedException?: shared.SchemaAlreadyPublishedException;
    /**
     * ValidationException
     */
    validationException?: shared.ValidationException;
}
