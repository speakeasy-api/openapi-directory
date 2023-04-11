import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteMessageActionEnum {
    DeleteMessage = "DeleteMessage"
}
export declare enum GETDeleteMessageVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GETDeleteMessageRequest extends SpeakeasyBase {
    /**
     * The AWS account number
     */
    accountNumber: number;
    action: GETDeleteMessageActionEnum;
    /**
     * The name of the queue
     */
    queueName: string;
    /**
     * The receipt handle associated with the message to delete.
     */
    receiptHandle: string;
    version: GETDeleteMessageVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
