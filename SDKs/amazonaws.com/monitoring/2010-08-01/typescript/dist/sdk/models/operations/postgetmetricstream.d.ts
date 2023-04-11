import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetMetricStreamActionEnum {
    GetMetricStream = "GetMetricStream"
}
export declare enum POSTGetMetricStreamVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTGetMetricStreamRequest extends SpeakeasyBase {
    action: POSTGetMetricStreamActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetMetricStreamVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetMetricStreamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
