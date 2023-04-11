import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartTaskExecutionXAmzTargetEnum {
    FmrsServiceStartTaskExecution = "FmrsService.StartTaskExecution"
}
export declare class StartTaskExecutionRequest extends SpeakeasyBase {
    startTaskExecutionRequest: shared.StartTaskExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartTaskExecutionXAmzTargetEnum;
}
export declare class StartTaskExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    startTaskExecutionResponse?: shared.StartTaskExecutionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
