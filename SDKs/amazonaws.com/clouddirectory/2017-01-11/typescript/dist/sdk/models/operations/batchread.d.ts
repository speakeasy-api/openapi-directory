import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchReadRequestBody extends SpeakeasyBase {
    /**
     * A list of operations that are part of the batch.
     */
    operations: shared.BatchReadOperation[];
}
/**
 * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
 */
export declare enum BatchReadXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class BatchReadRequest extends SpeakeasyBase {
    requestBody: BatchReadRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
     */
    xAmzConsistencyLevel?: BatchReadXAmzConsistencyLevelEnum;
    /**
     * The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>. For more information, see <a>arns</a>.
     */
    xAmzDataPartition: string;
}
export declare class BatchReadResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchReadResponse?: shared.BatchReadResponse;
    contentType: string;
    /**
     * DirectoryNotEnabledException
     */
    directoryNotEnabledException?: any;
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
     * ValidationException
     */
    validationException?: any;
}
