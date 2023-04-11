import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListRoleTagsActionEnum {
    ListRoleTags = "ListRoleTags"
}
export declare enum POSTListRoleTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListRoleTagsRequest extends SpeakeasyBase {
    action: POSTListRoleTagsActionEnum;
    requestBody?: Uint8Array;
    version: POSTListRoleTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListRoleTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
