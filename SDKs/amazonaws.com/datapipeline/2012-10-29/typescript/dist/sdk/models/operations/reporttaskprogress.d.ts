import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ReportTaskProgressXAmzTargetEnum {
    DataPipelineReportTaskProgress = "DataPipeline.ReportTaskProgress"
}
export declare class ReportTaskProgressRequest extends SpeakeasyBase {
    reportTaskProgressInput: shared.ReportTaskProgressInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ReportTaskProgressXAmzTargetEnum;
}
export declare class ReportTaskProgressResponse extends SpeakeasyBase {
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
    reportTaskProgressOutput?: shared.ReportTaskProgressOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TaskNotFoundException
     */
    taskNotFoundException?: any;
}
