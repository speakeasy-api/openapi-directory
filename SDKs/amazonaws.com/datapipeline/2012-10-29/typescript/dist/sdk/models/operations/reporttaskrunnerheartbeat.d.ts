import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ReportTaskRunnerHeartbeatXAmzTargetEnum {
    DataPipelineReportTaskRunnerHeartbeat = "DataPipeline.ReportTaskRunnerHeartbeat"
}
export declare class ReportTaskRunnerHeartbeatRequest extends SpeakeasyBase {
    reportTaskRunnerHeartbeatInput: shared.ReportTaskRunnerHeartbeatInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ReportTaskRunnerHeartbeatXAmzTargetEnum;
}
export declare class ReportTaskRunnerHeartbeatResponse extends SpeakeasyBase {
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
    reportTaskRunnerHeartbeatOutput?: shared.ReportTaskRunnerHeartbeatOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
