import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TagResource20200531OperationEnum {
    Tag = "Tag"
}
/**
 * A complex type that contains zero or more <code>Tag</code> elements.
 */
export declare class TagResource20200531RequestBodyTags extends SpeakeasyBase {
    items?: shared.TagList[];
}
export declare class TagResource20200531RequestBody extends SpeakeasyBase {
    /**
     * A complex type that contains zero or more <code>Tag</code> elements.
     */
    tags: TagResource20200531RequestBodyTags;
}
export declare class TagResource20200531Request extends SpeakeasyBase {
    operation: TagResource20200531OperationEnum;
    requestBody: Uint8Array;
    /**
     * An ARN of a CloudFront resource.
     */
    resource: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagResource20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
