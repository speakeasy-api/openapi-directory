import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteQueueActionEnum {
    DeleteQueue = "DeleteQueue"
}
export declare enum POSTDeleteQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTDeleteQueueRequest extends SpeakeasyBase {
    action: POSTDeleteQueueActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteQueueVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
