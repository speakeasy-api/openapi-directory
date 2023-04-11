import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPutMetricStreamActionEnum {
    PutMetricStream = "PutMetricStream"
}
export declare enum POSTPutMetricStreamVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTPutMetricStreamRequest extends SpeakeasyBase {
    action: POSTPutMetricStreamActionEnum;
    requestBody?: Uint8Array;
    version: POSTPutMetricStreamVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPutMetricStreamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
