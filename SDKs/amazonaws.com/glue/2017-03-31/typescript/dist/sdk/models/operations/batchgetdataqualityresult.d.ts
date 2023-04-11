import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetDataQualityResultXAmzTargetEnum {
    AWSGlueBatchGetDataQualityResult = "AWSGlue.BatchGetDataQualityResult"
}
export declare class BatchGetDataQualityResultRequest extends SpeakeasyBase {
    batchGetDataQualityResultRequest: shared.BatchGetDataQualityResultRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetDataQualityResultXAmzTargetEnum;
}
export declare class BatchGetDataQualityResultResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetDataQualityResultResponse?: shared.BatchGetDataQualityResultResponse;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
