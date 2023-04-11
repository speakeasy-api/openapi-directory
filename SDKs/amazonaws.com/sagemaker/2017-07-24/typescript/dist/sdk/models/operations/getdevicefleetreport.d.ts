import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDeviceFleetReportXAmzTargetEnum {
    SageMakerGetDeviceFleetReport = "SageMaker.GetDeviceFleetReport"
}
export declare class GetDeviceFleetReportRequest extends SpeakeasyBase {
    getDeviceFleetReportRequest: shared.GetDeviceFleetReportRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeviceFleetReportXAmzTargetEnum;
}
export declare class GetDeviceFleetReportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDeviceFleetReportResponse?: shared.GetDeviceFleetReportResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
