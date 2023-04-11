import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * How SearchResults are ordered. Valid values are Ascending or Descending. The default is Descending.
 */
export declare enum SearchAssociatedTranscriptsRequestBodySearchOrderEnum {
    Ascending = "Ascending",
    Descending = "Descending"
}
export declare class SearchAssociatedTranscriptsRequestBody extends SpeakeasyBase {
    /**
     * A list of filter objects.
     */
    filters: shared.AssociatedTranscriptFilter[];
    /**
     * The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
     */
    maxResults?: number;
    /**
     * If the response from the SearchAssociatedTranscriptsRequest operation contains more results than specified in the maxResults parameter, an index is returned in the response. Use that index in the nextIndex parameter to return the next page of results.
     */
    nextIndex?: number;
    /**
     * How SearchResults are ordered. Valid values are Ascending or Descending. The default is Descending.
     */
    searchOrder?: SearchAssociatedTranscriptsRequestBodySearchOrderEnum;
}
export declare class SearchAssociatedTranscriptsRequest extends SpeakeasyBase {
    requestBody: SearchAssociatedTranscriptsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the bot associated with the transcripts that you are searching.
     */
    botId: string;
    /**
     * The unique identifier of the bot recommendation associated with the transcripts to search.
     */
    botRecommendationId: string;
    /**
     * The version of the bot containing the transcripts that you are searching.
     */
    botVersion: string;
    /**
     * The identifier of the language and locale of the transcripts to search. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
     */
    localeId: string;
}
export declare class SearchAssociatedTranscriptsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    searchAssociatedTranscriptsResponse?: shared.SearchAssociatedTranscriptsResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
