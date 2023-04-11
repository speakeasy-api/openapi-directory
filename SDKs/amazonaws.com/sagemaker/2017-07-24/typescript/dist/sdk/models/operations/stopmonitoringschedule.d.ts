import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopMonitoringScheduleXAmzTargetEnum {
    SageMakerStopMonitoringSchedule = "SageMaker.StopMonitoringSchedule"
}
export declare class StopMonitoringScheduleRequest extends SpeakeasyBase {
    stopMonitoringScheduleRequest: shared.StopMonitoringScheduleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopMonitoringScheduleXAmzTargetEnum;
}
export declare class StopMonitoringScheduleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
