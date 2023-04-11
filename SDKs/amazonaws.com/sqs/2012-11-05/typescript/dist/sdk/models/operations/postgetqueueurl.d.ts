import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetQueueUrlActionEnum {
    GetQueueUrl = "GetQueueUrl"
}
export declare enum POSTGetQueueUrlVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTGetQueueUrlRequest extends SpeakeasyBase {
    action: POSTGetQueueUrlActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetQueueUrlVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetQueueUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
