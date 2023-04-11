import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchStopJobRunXAmzTargetEnum {
    AWSGlueBatchStopJobRun = "AWSGlue.BatchStopJobRun"
}
export declare class BatchStopJobRunRequest extends SpeakeasyBase {
    batchStopJobRunRequest: shared.BatchStopJobRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchStopJobRunXAmzTargetEnum;
}
export declare class BatchStopJobRunResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchStopJobRunResponse?: shared.BatchStopJobRunResponse;
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
