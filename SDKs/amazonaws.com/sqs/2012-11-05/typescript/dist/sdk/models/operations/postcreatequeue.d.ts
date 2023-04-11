import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateQueueActionEnum {
    CreateQueue = "CreateQueue"
}
export declare enum POSTCreateQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTCreateQueueRequest extends SpeakeasyBase {
    action: POSTCreateQueueActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateQueueVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
