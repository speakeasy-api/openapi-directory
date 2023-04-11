import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListRecommendationsRequestBody extends SpeakeasyBase {
    /**
     * An object that contains mapping between <code>ListRecommendationsFilterKey</code> and <code>ListRecommendationFilterValue</code> to filter by.
     */
    filter?: Record<string, string>;
    /**
     * A token returned from a previous call to <code>ListRecommendations</code> to indicate the position in the list of recommendations.
     */
    nextToken?: string;
    /**
     * <p>The number of results to show in a single call to <code>ListRecommendations</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 1, and can be no more than 100.</p>
     */
    pageSize?: number;
}
export declare class ListRecommendationsRequest extends SpeakeasyBase {
    /**
     * Pagination token
     */
    nextToken?: string;
    /**
     * Pagination limit
     */
    pageSize?: string;
    requestBody: ListRecommendationsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRecommendationsResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    listRecommendationsResponse?: shared.ListRecommendationsResponse;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
