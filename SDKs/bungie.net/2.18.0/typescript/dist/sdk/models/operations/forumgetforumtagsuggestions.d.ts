import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ForumGetForumTagSuggestionsRequest extends SpeakeasyBase {
    /**
     * The partial tag input to generate suggestions from.
     */
    partialtag?: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class ForumGetForumTagSuggestions200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.TagsModelsContractsTagResponse[];
    throttleSeconds?: number;
}
export declare class ForumGetForumTagSuggestionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
