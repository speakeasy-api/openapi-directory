import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRecommendationsRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the campaign to use for getting recommendations.
     */
    campaignArn?: string;
    /**
     * The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type.
     */
    context?: Record<string, string>;
    /**
     * <p>The ARN of the filter to apply to the returned recommendations. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p> <p>When using this parameter, be sure the filter resource is <code>ACTIVE</code>.</p>
     */
    filterArn?: string;
    /**
     * <p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma. </p> <p>For filter expressions that use an <code>INCLUDE</code> element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you can omit the <code>filter-values</code>.In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.</p>
     */
    filterValues?: Record<string, string>;
    /**
     * <p>The item ID to provide recommendations for.</p> <p>Required for <code>RELATED_ITEMS</code> recipe type.</p>
     */
    itemId?: string;
    /**
     * The number of results to return. The default is 25. The maximum is 500.
     */
    numResults?: number;
    /**
     * The promotions to apply to the recommendation request. A promotion defines additional business rules that apply to a configurable subset of recommended items.
     */
    promotions?: shared.Promotion[];
    /**
     * The Amazon Resource Name (ARN) of the recommender to use to get recommendations. Provide a recommender ARN if you created a Domain dataset group with a recommender for a domain use case.
     */
    recommenderArn?: string;
    /**
     * <p>The user ID to provide recommendations for.</p> <p>Required for <code>USER_PERSONALIZATION</code> recipe type.</p>
     */
    userId?: string;
}
export declare class GetRecommendationsRequest extends SpeakeasyBase {
    requestBody: GetRecommendationsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRecommendationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getRecommendationsResponse?: shared.GetRecommendationsResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
