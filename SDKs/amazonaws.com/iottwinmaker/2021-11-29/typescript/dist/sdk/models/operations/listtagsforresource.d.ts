import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListTagsForResourceRequestBody extends SpeakeasyBase {
    /**
     * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
     */
    maxResults?: number;
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: string;
    /**
     * The ARN of the resource.
     */
    resourceARN: string;
}
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    requestBody: ListTagsForResourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    listTagsForResourceResponse?: shared.ListTagsForResourceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
