import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETQueueUrlActionEnum {
    GetQueueUrl = "GetQueueUrl"
}
export declare enum GETGETQueueUrlVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GETGETQueueUrlRequest extends SpeakeasyBase {
    action: GETGETQueueUrlActionEnum;
    /**
     * <p>The name of the queue whose URL must be fetched. Maximum 80 characters. Valid values: alphanumeric characters, hyphens (<code>-</code>), and underscores (<code>_</code>).</p> <p>Queue URLs and names are case-sensitive.</p>
     */
    queueName: string;
    /**
     * The Amazon Web Services account ID of the account that created the queue.
     */
    queueOwnerAWSAccountId?: string;
    version: GETGETQueueUrlVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETQueueUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
