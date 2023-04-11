import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetJobsXAmzTargetEnum {
    AWSGlueBatchGetJobs = "AWSGlue.BatchGetJobs"
}
export declare class BatchGetJobsRequest extends SpeakeasyBase {
    batchGetJobsRequest: shared.BatchGetJobsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetJobsXAmzTargetEnum;
}
export declare class BatchGetJobsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetJobsResponse?: shared.BatchGetJobsResponse;
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
