import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SetTaskStatusXAmzTargetEnum {
    DataPipelineSetTaskStatus = "DataPipeline.SetTaskStatus"
}
export declare class SetTaskStatusRequest extends SpeakeasyBase {
    setTaskStatusInput: shared.SetTaskStatusInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetTaskStatusXAmzTargetEnum;
}
export declare class SetTaskStatusResponse extends SpeakeasyBase {
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
     * PipelineDeletedException
     */
    pipelineDeletedException?: any;
    /**
     * PipelineNotFoundException
     */
    pipelineNotFoundException?: any;
    /**
     * Success
     */
    setTaskStatusOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TaskNotFoundException
     */
    taskNotFoundException?: any;
}
