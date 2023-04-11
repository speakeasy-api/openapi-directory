import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteMonitoringScheduleXAmzTargetEnum {
    SageMakerDeleteMonitoringSchedule = "SageMaker.DeleteMonitoringSchedule"
}
export declare class DeleteMonitoringScheduleRequest extends SpeakeasyBase {
    deleteMonitoringScheduleRequest: shared.DeleteMonitoringScheduleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMonitoringScheduleXAmzTargetEnum;
}
export declare class DeleteMonitoringScheduleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
