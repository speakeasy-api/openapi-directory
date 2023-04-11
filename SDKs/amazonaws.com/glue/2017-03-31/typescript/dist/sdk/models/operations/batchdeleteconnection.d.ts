import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDeleteConnectionXAmzTargetEnum {
    AWSGlueBatchDeleteConnection = "AWSGlue.BatchDeleteConnection"
}
export declare class BatchDeleteConnectionRequest extends SpeakeasyBase {
    batchDeleteConnectionRequest: shared.BatchDeleteConnectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDeleteConnectionXAmzTargetEnum;
}
export declare class BatchDeleteConnectionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDeleteConnectionResponse?: shared.BatchDeleteConnectionResponse;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
