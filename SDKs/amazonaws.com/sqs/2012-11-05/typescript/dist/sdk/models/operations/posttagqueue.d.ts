import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTTagQueueActionEnum {
    TagQueue = "TagQueue"
}
export declare enum POSTTagQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTTagQueueRequest extends SpeakeasyBase {
    action: POSTTagQueueActionEnum;
    requestBody?: Uint8Array;
    version: POSTTagQueueVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTTagQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
