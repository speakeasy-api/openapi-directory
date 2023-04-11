import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelTaskExecutionXAmzTargetEnum {
    FmrsServiceCancelTaskExecution = "FmrsService.CancelTaskExecution"
}
export declare class CancelTaskExecutionRequest extends SpeakeasyBase {
    cancelTaskExecutionRequest: shared.CancelTaskExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelTaskExecutionXAmzTargetEnum;
}
export declare class CancelTaskExecutionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelTaskExecutionResponse?: Record<string, any>;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
