import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRemoveTagsFromResourceActionEnum {
    RemoveTagsFromResource = "RemoveTagsFromResource"
}
export declare enum GETRemoveTagsFromResourceVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETRemoveTagsFromResourceRequest extends SpeakeasyBase {
    action: GETRemoveTagsFromResourceActionEnum;
    resourceName: string;
    tagKeys: string[];
    version: GETRemoveTagsFromResourceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRemoveTagsFromResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
