import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUntagQueueActionEnum {
    UntagQueue = "UntagQueue"
}
export declare enum POSTUntagQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTUntagQueueRequest extends SpeakeasyBase {
    action: POSTUntagQueueActionEnum;
    requestBody?: Uint8Array;
    version: POSTUntagQueueVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUntagQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
