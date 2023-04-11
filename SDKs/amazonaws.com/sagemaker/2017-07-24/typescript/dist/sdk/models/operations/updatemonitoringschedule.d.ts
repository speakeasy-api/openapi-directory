import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateMonitoringScheduleXAmzTargetEnum {
    SageMakerUpdateMonitoringSchedule = "SageMaker.UpdateMonitoringSchedule"
}
export declare class UpdateMonitoringScheduleRequest extends SpeakeasyBase {
    updateMonitoringScheduleRequest: shared.UpdateMonitoringScheduleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMonitoringScheduleXAmzTargetEnum;
}
export declare class UpdateMonitoringScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    /**
     * Success
     */
    updateMonitoringScheduleResponse?: shared.UpdateMonitoringScheduleResponse;
}
