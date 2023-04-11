import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListFlowsRequestBody extends SpeakeasyBase {
    /**
     *  Specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     *  The pagination token for next page of data.
     */
    nextToken?: string;
}
export declare class ListFlowsRequest extends SpeakeasyBase {
    requestBody: ListFlowsRequestBody;
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
export declare class ListFlowsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listFlowsResponse?: shared.ListFlowsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
