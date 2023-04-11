import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListPolicyTagsActionEnum {
    ListPolicyTags = "ListPolicyTags"
}
export declare enum POSTListPolicyTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListPolicyTagsRequest extends SpeakeasyBase {
    action: POSTListPolicyTagsActionEnum;
    requestBody?: Uint8Array;
    version: POSTListPolicyTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListPolicyTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
