import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetMLTaskRunXAmzTargetEnum {
    AWSGlueGetMLTaskRun = "AWSGlue.GetMLTaskRun"
}
export declare class GetMLTaskRunRequest extends SpeakeasyBase {
    getMLTaskRunRequest: shared.GetMLTaskRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMLTaskRunXAmzTargetEnum;
}
export declare class GetMLTaskRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getMLTaskRunResponse?: shared.GetMLTaskRunResponse;
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
