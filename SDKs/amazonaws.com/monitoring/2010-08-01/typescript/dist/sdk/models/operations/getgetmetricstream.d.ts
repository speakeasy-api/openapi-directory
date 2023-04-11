import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETMetricStreamActionEnum {
    GetMetricStream = "GetMetricStream"
}
export declare enum GETGETMetricStreamVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GETGETMetricStreamRequest extends SpeakeasyBase {
    action: GETGETMetricStreamActionEnum;
    /**
     * The name of the metric stream to retrieve information about.
     */
    name: string;
    version: GETGETMetricStreamVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETMetricStreamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
