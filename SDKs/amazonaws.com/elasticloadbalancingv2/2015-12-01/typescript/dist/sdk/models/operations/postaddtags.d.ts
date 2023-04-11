import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAddTagsActionEnum {
    AddTags = "AddTags"
}
export declare enum POSTAddTagsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTAddTagsRequest extends SpeakeasyBase {
    action: POSTAddTagsActionEnum;
    requestBody?: Uint8Array;
    version: POSTAddTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAddTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
