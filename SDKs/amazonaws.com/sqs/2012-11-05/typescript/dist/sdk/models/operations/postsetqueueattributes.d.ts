import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSetQueueAttributesActionEnum {
    SetQueueAttributes = "SetQueueAttributes"
}
export declare enum POSTSetQueueAttributesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTSetQueueAttributesRequest extends SpeakeasyBase {
    action: POSTSetQueueAttributesActionEnum;
    requestBody?: Uint8Array;
    version: POSTSetQueueAttributesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSetQueueAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
