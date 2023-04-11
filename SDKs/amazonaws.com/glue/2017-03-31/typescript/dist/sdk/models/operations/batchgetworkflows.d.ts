import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetWorkflowsXAmzTargetEnum {
    AWSGlueBatchGetWorkflows = "AWSGlue.BatchGetWorkflows"
}
export declare class BatchGetWorkflowsRequest extends SpeakeasyBase {
    batchGetWorkflowsRequest: shared.BatchGetWorkflowsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetWorkflowsXAmzTargetEnum;
}
export declare class BatchGetWorkflowsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetWorkflowsResponse?: shared.BatchGetWorkflowsResponse;
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
