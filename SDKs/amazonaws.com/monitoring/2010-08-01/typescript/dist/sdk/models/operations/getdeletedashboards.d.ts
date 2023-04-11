import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteDashboardsActionEnum {
    DeleteDashboards = "DeleteDashboards"
}
export declare enum GETDeleteDashboardsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GETDeleteDashboardsRequest extends SpeakeasyBase {
    action: GETDeleteDashboardsActionEnum;
    /**
     * The dashboards to be deleted. This parameter is required.
     */
    dashboardNames: string[];
    version: GETDeleteDashboardsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteDashboardsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
