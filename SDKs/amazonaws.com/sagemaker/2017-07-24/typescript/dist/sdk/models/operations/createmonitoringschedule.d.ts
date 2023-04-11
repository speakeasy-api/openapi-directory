import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateMonitoringScheduleXAmzTargetEnum {
    SageMakerCreateMonitoringSchedule = "SageMaker.CreateMonitoringSchedule"
}
export declare class CreateMonitoringScheduleRequest extends SpeakeasyBase {
    createMonitoringScheduleRequest: shared.CreateMonitoringScheduleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMonitoringScheduleXAmzTargetEnum;
}
export declare class CreateMonitoringScheduleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createMonitoringScheduleResponse?: shared.CreateMonitoringScheduleResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
