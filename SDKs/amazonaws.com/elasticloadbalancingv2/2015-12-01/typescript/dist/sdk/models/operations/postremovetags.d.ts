import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRemoveTagsActionEnum {
    RemoveTags = "RemoveTags"
}
export declare enum POSTRemoveTagsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTRemoveTagsRequest extends SpeakeasyBase {
    action: POSTRemoveTagsActionEnum;
    requestBody?: Uint8Array;
    version: POSTRemoveTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRemoveTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
