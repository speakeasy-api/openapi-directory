import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateMonitoringAlertXAmzTargetEnum {
    SageMakerUpdateMonitoringAlert = "SageMaker.UpdateMonitoringAlert"
}
export declare class UpdateMonitoringAlertRequest extends SpeakeasyBase {
    updateMonitoringAlertRequest: shared.UpdateMonitoringAlertRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMonitoringAlertXAmzTargetEnum;
}
export declare class UpdateMonitoringAlertResponse extends SpeakeasyBase {
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
    updateMonitoringAlertResponse?: shared.UpdateMonitoringAlertResponse;
}
