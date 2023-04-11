import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPurgeQueueActionEnum {
    PurgeQueue = "PurgeQueue"
}
export declare enum POSTPurgeQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTPurgeQueueRequest extends SpeakeasyBase {
    action: POSTPurgeQueueActionEnum;
    requestBody?: Uint8Array;
    version: POSTPurgeQueueVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPurgeQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
