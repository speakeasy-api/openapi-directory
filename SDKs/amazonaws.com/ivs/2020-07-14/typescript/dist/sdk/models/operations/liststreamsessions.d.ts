import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListStreamSessionsRequestBody extends SpeakeasyBase {
    /**
     * Channel ARN used to filter the list.
     */
    channelArn: string;
    /**
     * Maximum number of streams to return. Default: 100.
     */
    maxResults?: number;
    /**
     * The first stream to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
     */
    nextToken?: string;
}
export declare class ListStreamSessionsRequest extends SpeakeasyBase {
    requestBody: ListStreamSessionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListStreamSessionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    listStreamSessionsResponse?: shared.ListStreamSessionsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
