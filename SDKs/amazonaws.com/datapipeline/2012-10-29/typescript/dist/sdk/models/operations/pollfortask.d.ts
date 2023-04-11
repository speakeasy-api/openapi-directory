import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PollForTaskXAmzTargetEnum {
    DataPipelinePollForTask = "DataPipeline.PollForTask"
}
export declare class PollForTaskRequest extends SpeakeasyBase {
    pollForTaskInput: shared.PollForTaskInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PollForTaskXAmzTargetEnum;
}
export declare class PollForTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    pollForTaskOutput?: shared.PollForTaskOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TaskNotFoundException
     */
    taskNotFoundException?: any;
}
