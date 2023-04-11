import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListInstanceProfileTagsActionEnum {
    ListInstanceProfileTags = "ListInstanceProfileTags"
}
export declare enum POSTListInstanceProfileTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListInstanceProfileTagsRequest extends SpeakeasyBase {
    action: POSTListInstanceProfileTagsActionEnum;
    requestBody?: Uint8Array;
    version: POSTListInstanceProfileTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListInstanceProfileTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
