import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetWorkflowRunXAmzTargetEnum {
    AWSGlueGetWorkflowRun = "AWSGlue.GetWorkflowRun"
}
export declare class GetWorkflowRunRequest extends SpeakeasyBase {
    getWorkflowRunRequest: shared.GetWorkflowRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetWorkflowRunXAmzTargetEnum;
}
export declare class GetWorkflowRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getWorkflowRunResponse?: shared.GetWorkflowRunResponse;
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
