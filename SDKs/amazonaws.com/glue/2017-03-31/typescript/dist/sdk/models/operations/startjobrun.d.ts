import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartJobRunXAmzTargetEnum {
    AWSGlueStartJobRun = "AWSGlue.StartJobRun"
}
export declare class StartJobRunRequest extends SpeakeasyBase {
    startJobRunRequest: shared.StartJobRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartJobRunXAmzTargetEnum;
}
export declare class StartJobRunResponse extends SpeakeasyBase {
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
    startJobRunResponse?: shared.StartJobRunResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
