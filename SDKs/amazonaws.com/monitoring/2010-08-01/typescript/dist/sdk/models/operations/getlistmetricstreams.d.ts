import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListMetricStreamsActionEnum {
    ListMetricStreams = "ListMetricStreams"
}
export declare enum GETListMetricStreamsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GETListMetricStreamsRequest extends SpeakeasyBase {
    action: GETListMetricStreamsActionEnum;
    /**
     * The maximum number of results to return in one operation.
     */
    maxResults?: number;
    /**
     * Include this value, if it was returned by the previous call, to get the next set of metric streams.
     */
    nextToken?: string;
    version: GETListMetricStreamsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListMetricStreamsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
