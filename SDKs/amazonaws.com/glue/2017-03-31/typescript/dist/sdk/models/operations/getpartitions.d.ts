import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPartitionsXAmzTargetEnum {
    AWSGlueGetPartitions = "AWSGlue.GetPartitions"
}
export declare class GetPartitionsRequest extends SpeakeasyBase {
    getPartitionsRequest: shared.GetPartitionsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPartitionsXAmzTargetEnum;
}
export declare class GetPartitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getPartitionsResponse?: shared.GetPartitionsResponse;
    /**
     * GlueEncryptionException
     */
    glueEncryptionException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    /**
     * ResourceNotReadyException
     */
    resourceNotReadyException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
