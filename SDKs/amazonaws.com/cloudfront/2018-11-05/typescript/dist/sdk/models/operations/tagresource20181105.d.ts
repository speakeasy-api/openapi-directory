import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TagResource20181105OperationEnum {
    Tag = "Tag"
}
/**
 *  A complex type that contains zero or more <code>Tag</code> elements.
 */
export declare class TagResource20181105RequestBodyTags extends SpeakeasyBase {
    items?: shared.TagList[];
}
export declare class TagResource20181105RequestBody extends SpeakeasyBase {
    /**
     *  A complex type that contains zero or more <code>Tag</code> elements.
     */
    tags: TagResource20181105RequestBodyTags;
}
export declare class TagResource20181105Request extends SpeakeasyBase {
    operation: TagResource20181105OperationEnum;
    requestBody: Uint8Array;
    /**
     *  An ARN of a CloudFront resource.
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
export declare class TagResource20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
