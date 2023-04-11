import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateOrUpdateTagsActionEnum {
    CreateOrUpdateTags = "CreateOrUpdateTags"
}
export declare enum POSTCreateOrUpdateTagsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTCreateOrUpdateTagsRequest extends SpeakeasyBase {
    action: POSTCreateOrUpdateTagsActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateOrUpdateTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateOrUpdateTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
