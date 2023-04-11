import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApplySchemaRequestBody extends SpeakeasyBase {
    /**
     * Published schema Amazon Resource Name (ARN) that needs to be copied. For more information, see <a>arns</a>.
     */
    publishedSchemaArn: string;
}
export declare class ApplySchemaRequest extends SpeakeasyBase {
    requestBody: ApplySchemaRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> into which the schema is copied. For more information, see <a>arns</a>.
     */
    xAmzDataPartition: string;
}
export declare class ApplySchemaResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    applySchemaResponse?: shared.ApplySchemaResponse;
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
     * InvalidAttachmentException
     */
    invalidAttachmentException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
