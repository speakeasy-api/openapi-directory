import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateTagsActionEnum {
    CreateTags = "CreateTags"
}
export declare enum POSTCreateTagsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTCreateTagsRequest extends SpeakeasyBase {
    action: POSTCreateTagsActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
