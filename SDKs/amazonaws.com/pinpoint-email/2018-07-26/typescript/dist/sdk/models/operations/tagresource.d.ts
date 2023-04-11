import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TagResourceRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to add one or more tags to.
     */
    resourceArn: string;
    /**
     * A list of the tags that you want to add to the resource. A tag consists of a required tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
     */
    tags: shared.Tag[];
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
}
export declare class TagResourceResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    tagResourceResponse?: Record<string, any>;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
