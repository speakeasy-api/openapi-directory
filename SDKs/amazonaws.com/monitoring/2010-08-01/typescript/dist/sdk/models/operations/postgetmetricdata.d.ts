import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetMetricDataActionEnum {
    GetMetricData = "GetMetricData"
}
export declare enum POSTGetMetricDataVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTGetMetricDataRequest extends SpeakeasyBase {
    action: POSTGetMetricDataActionEnum;
    /**
     * Pagination limit
     */
    maxDatapoints?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTGetMetricDataVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetMetricDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
