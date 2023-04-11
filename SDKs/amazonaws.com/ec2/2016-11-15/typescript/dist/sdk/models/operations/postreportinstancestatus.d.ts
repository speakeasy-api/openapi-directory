import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTReportInstanceStatusActionEnum {
    ReportInstanceStatus = "ReportInstanceStatus"
}
export declare enum POSTReportInstanceStatusVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTReportInstanceStatusRequest extends SpeakeasyBase {
    action: POSTReportInstanceStatusActionEnum;
    requestBody?: Uint8Array;
    version: POSTReportInstanceStatusVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTReportInstanceStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
