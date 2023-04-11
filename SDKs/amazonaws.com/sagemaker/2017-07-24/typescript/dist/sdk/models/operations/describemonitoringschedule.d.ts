import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMonitoringScheduleXAmzTargetEnum {
    SageMakerDescribeMonitoringSchedule = "SageMaker.DescribeMonitoringSchedule"
}
export declare class DescribeMonitoringScheduleRequest extends SpeakeasyBase {
    describeMonitoringScheduleRequest: shared.DescribeMonitoringScheduleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMonitoringScheduleXAmzTargetEnum;
}
export declare class DescribeMonitoringScheduleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMonitoringScheduleResponse?: shared.DescribeMonitoringScheduleResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
