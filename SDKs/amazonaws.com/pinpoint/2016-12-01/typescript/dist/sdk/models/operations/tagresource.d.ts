import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
 */
export declare class TagResourceRequestBodyTagsModel extends SpeakeasyBase {
    tags?: Record<string, string>;
}
export declare class TagResourceRequestBody extends SpeakeasyBase {
    /**
     * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
     */
    tagsModel: TagResourceRequestBodyTagsModel;
}
export declare class TagResourceRequest extends SpeakeasyBase {
    requestBody: TagResourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: string;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
