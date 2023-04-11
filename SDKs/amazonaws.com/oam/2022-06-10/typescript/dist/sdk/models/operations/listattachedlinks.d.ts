import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListAttachedLinksRequestBody extends SpeakeasyBase {
    /**
     * Limits the number of returned links to the specified number.
     */
    maxResults?: number;
    /**
     * The token for the next set of items to return. You received this token from a previous call.
     */
    nextToken?: string;
    /**
     * The ARN of the sink that you want to retrieve links for.
     */
    sinkIdentifier: string;
}
export declare class ListAttachedLinksRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListAttachedLinksRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAttachedLinksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceFault
     */
    internalServiceFault?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listAttachedLinksOutput?: shared.ListAttachedLinksOutput;
    /**
     * MissingRequiredParameterException
     */
    missingRequiredParameterException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
