import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateTaskExecutionXAmzTargetEnum {
    FmrsServiceUpdateTaskExecution = "FmrsService.UpdateTaskExecution"
}
export declare class UpdateTaskExecutionRequest extends SpeakeasyBase {
    updateTaskExecutionRequest: shared.UpdateTaskExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTaskExecutionXAmzTargetEnum;
}
export declare class UpdateTaskExecutionResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    updateTaskExecutionResponse?: Record<string, any>;
}
