import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPersonalizedRankingRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the campaign to use for generating the personalized ranking.
     */
    campaignArn: string;
    /**
     * The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type.
     */
    context?: Record<string, string>;
    /**
     * The Amazon Resource Name (ARN) of a filter you created to include items or exclude items from recommendations for a given user. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.
     */
    filterArn?: string;
    /**
     * <p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma. </p> <p>For filter expressions that use an <code>INCLUDE</code> element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you can omit the <code>filter-values</code>.In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p>
     */
    filterValues?: Record<string, string>;
    /**
     * A list of items (by <code>itemId</code>) to rank. If an item was not included in the training dataset, the item is appended to the end of the reranked list. The maximum is 500.
     */
    inputList: string[];
    /**
     * The user for which you want the campaign to provide a personalized ranking.
     */
    userId: string;
}
export declare class GetPersonalizedRankingRequest extends SpeakeasyBase {
    requestBody: GetPersonalizedRankingRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPersonalizedRankingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getPersonalizedRankingResponse?: shared.GetPersonalizedRankingResponse;
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
