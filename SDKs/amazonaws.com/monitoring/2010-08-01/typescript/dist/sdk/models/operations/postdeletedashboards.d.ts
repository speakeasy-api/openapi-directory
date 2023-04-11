import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteDashboardsActionEnum {
    DeleteDashboards = "DeleteDashboards"
}
export declare enum POSTDeleteDashboardsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTDeleteDashboardsRequest extends SpeakeasyBase {
    action: POSTDeleteDashboardsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteDashboardsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteDashboardsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
