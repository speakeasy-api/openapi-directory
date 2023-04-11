import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListTagsForResourceRequestBody extends SpeakeasyBase {
    /**
     * If you specify this parameter and the result of a <code>ListTagsForResource</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.
     */
    nextToken?: string;
    /**
     * The Amazon Resource Name (ARN) of the signaling channel for which you want to list tags.
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
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * Success
     */
    listTagsForResourceOutput?: shared.ListTagsForResourceOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
