import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartTriggerXAmzTargetEnum {
    AWSGlueStartTrigger = "AWSGlue.StartTrigger"
}
export declare class StartTriggerRequest extends SpeakeasyBase {
    startTriggerRequest: shared.StartTriggerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartTriggerXAmzTargetEnum;
}
export declare class StartTriggerResponse extends SpeakeasyBase {
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
    startTriggerResponse?: shared.StartTriggerResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
