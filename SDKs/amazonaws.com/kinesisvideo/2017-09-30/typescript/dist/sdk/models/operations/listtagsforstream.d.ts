import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListTagsForStreamRequestBody extends SpeakeasyBase {
    /**
     * If you specify this parameter and the result of a <code>ListTagsForStream</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.
     */
    nextToken?: string;
    /**
     * The Amazon Resource Name (ARN) of the stream that you want to list tags for.
     */
    streamARN?: string;
    /**
     * The name of the stream that you want to list tags for.
     */
    streamName?: string;
}
export declare class ListTagsForStreamRequest extends SpeakeasyBase {
    requestBody: ListTagsForStreamRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTagsForStreamResponse extends SpeakeasyBase {
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
     * InvalidResourceFormatException
     */
    invalidResourceFormatException?: any;
    /**
     * Success
     */
    listTagsForStreamOutput?: shared.ListTagsForStreamOutput;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
