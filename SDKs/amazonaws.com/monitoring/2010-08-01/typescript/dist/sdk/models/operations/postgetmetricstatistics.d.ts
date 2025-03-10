import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetMetricStatisticsActionEnum {
    GetMetricStatistics = "GetMetricStatistics"
}
export declare enum POSTGetMetricStatisticsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTGetMetricStatisticsRequest extends SpeakeasyBase {
    action: POSTGetMetricStatisticsActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetMetricStatisticsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetMetricStatisticsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
