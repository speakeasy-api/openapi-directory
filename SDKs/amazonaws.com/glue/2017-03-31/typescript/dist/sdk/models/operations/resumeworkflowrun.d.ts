import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ResumeWorkflowRunXAmzTargetEnum {
    AWSGlueResumeWorkflowRun = "AWSGlue.ResumeWorkflowRun"
}
export declare class ResumeWorkflowRunRequest extends SpeakeasyBase {
    resumeWorkflowRunRequest: shared.ResumeWorkflowRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResumeWorkflowRunXAmzTargetEnum;
}
export declare class ResumeWorkflowRunResponse extends SpeakeasyBase {
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
     * IllegalWorkflowStateException
     */
    illegalWorkflowStateException?: any;
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
     * Success
     */
    resumeWorkflowRunResponse?: shared.ResumeWorkflowRunResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
