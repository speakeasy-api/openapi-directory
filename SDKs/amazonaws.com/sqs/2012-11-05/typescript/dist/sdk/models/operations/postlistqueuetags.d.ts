import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListQueueTagsActionEnum {
    ListQueueTags = "ListQueueTags"
}
export declare enum POSTListQueueTagsVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTListQueueTagsRequest extends SpeakeasyBase {
    action: POSTListQueueTagsActionEnum;
    requestBody?: Uint8Array;
    version: POSTListQueueTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListQueueTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
