import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartMonitoringScheduleXAmzTargetEnum {
    SageMakerStartMonitoringSchedule = "SageMaker.StartMonitoringSchedule"
}
export declare class StartMonitoringScheduleRequest extends SpeakeasyBase {
    startMonitoringScheduleRequest: shared.StartMonitoringScheduleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartMonitoringScheduleXAmzTargetEnum;
}
export declare class StartMonitoringScheduleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
