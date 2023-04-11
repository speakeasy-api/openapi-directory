import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListDashboardsActionEnum {
    ListDashboards = "ListDashboards"
}
export declare enum GETListDashboardsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GETListDashboardsRequest extends SpeakeasyBase {
    action: GETListDashboardsActionEnum;
    /**
     * If you specify this parameter, only the dashboards with names starting with the specified string are listed. The maximum length is 255, and valid characters are A-Z, a-z, 0-9, ".", "-", and "_".
     */
    dashboardNamePrefix?: string;
    /**
     * The token returned by a previous call to indicate that there is more data available.
     */
    nextToken?: string;
    version: GETListDashboardsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListDashboardsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
