import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRemoveTagsFromResourceActionEnum {
    RemoveTagsFromResource = "RemoveTagsFromResource"
}
export declare enum GETRemoveTagsFromResourceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETRemoveTagsFromResourceRequest extends SpeakeasyBase {
    action: GETRemoveTagsFromResourceActionEnum;
    /**
     * The Amazon DocumentDB resource that the tags are removed from. This value is an Amazon Resource Name (ARN).
     */
    resourceName: string;
    /**
     * The tag key (name) of the tag to be removed.
     */
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
