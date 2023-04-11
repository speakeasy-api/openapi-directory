import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteMetricStreamActionEnum {
    DeleteMetricStream = "DeleteMetricStream"
}
export declare enum GETDeleteMetricStreamVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GETDeleteMetricStreamRequest extends SpeakeasyBase {
    action: GETDeleteMetricStreamActionEnum;
    /**
     * The name of the metric stream to delete.
     */
    name: string;
    version: GETDeleteMetricStreamVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteMetricStreamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
