import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTStopMetricStreamsActionEnum {
    StopMetricStreams = "StopMetricStreams"
}
export declare enum POSTStopMetricStreamsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTStopMetricStreamsRequest extends SpeakeasyBase {
    action: POSTStopMetricStreamsActionEnum;
    requestBody?: Uint8Array;
    version: POSTStopMetricStreamsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTStopMetricStreamsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
