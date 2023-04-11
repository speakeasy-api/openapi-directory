import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPutDashboardActionEnum {
    PutDashboard = "PutDashboard"
}
export declare enum POSTPutDashboardVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTPutDashboardRequest extends SpeakeasyBase {
    action: POSTPutDashboardActionEnum;
    requestBody?: Uint8Array;
    version: POSTPutDashboardVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPutDashboardResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
