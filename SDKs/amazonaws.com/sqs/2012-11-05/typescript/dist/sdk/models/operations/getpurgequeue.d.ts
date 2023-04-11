import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETPurgeQueueActionEnum {
    PurgeQueue = "PurgeQueue"
}
export declare enum GETPurgeQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GETPurgeQueueRequest extends SpeakeasyBase {
    /**
     * The AWS account number
     */
    accountNumber: number;
    action: GETPurgeQueueActionEnum;
    /**
     * The name of the queue
     */
    queueName: string;
    version: GETPurgeQueueVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETPurgeQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
