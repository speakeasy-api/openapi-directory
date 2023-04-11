import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartWorkflowRunXAmzTargetEnum {
    AWSGlueStartWorkflowRun = "AWSGlue.StartWorkflowRun"
}
export declare class StartWorkflowRunRequest extends SpeakeasyBase {
    startWorkflowRunRequest: shared.StartWorkflowRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartWorkflowRunXAmzTargetEnum;
}
export declare class StartWorkflowRunResponse extends SpeakeasyBase {
    /**
     * ConcurrentRunsExceededException
     */
    concurrentRunsExceededException?: any;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
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
    /**
     * ResourceNumberLimitExceededException
     */
    resourceNumberLimitExceededException?: any;
    /**
     * Success
     */
    startWorkflowRunResponse?: shared.StartWorkflowRunResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
