import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopWorkflowRunXAmzTargetEnum {
    AWSGlueStopWorkflowRun = "AWSGlue.StopWorkflowRun"
}
export declare class StopWorkflowRunRequest extends SpeakeasyBase {
    stopWorkflowRunRequest: shared.StopWorkflowRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopWorkflowRunXAmzTargetEnum;
}
export declare class StopWorkflowRunResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopWorkflowRunResponse?: Record<string, any>;
}
