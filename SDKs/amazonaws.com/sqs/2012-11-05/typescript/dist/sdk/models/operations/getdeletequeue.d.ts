import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteQueueActionEnum {
    DeleteQueue = "DeleteQueue"
}
export declare enum GETDeleteQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GETDeleteQueueRequest extends SpeakeasyBase {
    /**
     * The AWS account number
     */
    accountNumber: number;
    action: GETDeleteQueueActionEnum;
    /**
     * The name of the queue
     */
    queueName: string;
    version: GETDeleteQueueVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
