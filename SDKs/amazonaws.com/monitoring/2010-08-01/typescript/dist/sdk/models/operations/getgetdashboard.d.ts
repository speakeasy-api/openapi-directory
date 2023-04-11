import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETDashboardActionEnum {
    GetDashboard = "GetDashboard"
}
export declare enum GETGETDashboardVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GETGETDashboardRequest extends SpeakeasyBase {
    action: GETGETDashboardActionEnum;
    /**
     * The name of the dashboard to be described.
     */
    dashboardName: string;
    version: GETGETDashboardVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETDashboardResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
