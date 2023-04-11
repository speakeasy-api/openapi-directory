import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetDashboardActionEnum {
    GetDashboard = "GetDashboard"
}
export declare enum POSTGetDashboardVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTGetDashboardRequest extends SpeakeasyBase {
    action: POSTGetDashboardActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetDashboardVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetDashboardResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
