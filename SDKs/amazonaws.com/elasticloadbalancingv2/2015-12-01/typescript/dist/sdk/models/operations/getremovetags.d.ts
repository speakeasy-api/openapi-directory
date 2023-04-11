import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRemoveTagsActionEnum {
    RemoveTags = "RemoveTags"
}
export declare enum GETRemoveTagsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GETRemoveTagsRequest extends SpeakeasyBase {
    action: GETRemoveTagsActionEnum;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArns: string[];
    /**
     * The tag keys for the tags to remove.
     */
    tagKeys: string[];
    version: GETRemoveTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRemoveTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
