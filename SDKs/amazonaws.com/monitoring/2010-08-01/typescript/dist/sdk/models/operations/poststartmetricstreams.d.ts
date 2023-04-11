import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTStartMetricStreamsActionEnum {
    StartMetricStreams = "StartMetricStreams"
}
export declare enum POSTStartMetricStreamsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTStartMetricStreamsRequest extends SpeakeasyBase {
    action: POSTStartMetricStreamsActionEnum;
    requestBody?: Uint8Array;
    version: POSTStartMetricStreamsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTStartMetricStreamsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
