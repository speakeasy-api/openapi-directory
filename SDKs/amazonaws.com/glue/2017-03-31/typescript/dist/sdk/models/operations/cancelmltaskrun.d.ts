import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelMLTaskRunXAmzTargetEnum {
    AWSGlueCancelMLTaskRun = "AWSGlue.CancelMLTaskRun"
}
export declare class CancelMLTaskRunRequest extends SpeakeasyBase {
    cancelMLTaskRunRequest: shared.CancelMLTaskRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelMLTaskRunXAmzTargetEnum;
}
export declare class CancelMLTaskRunResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelMLTaskRunResponse?: shared.CancelMLTaskRunResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
