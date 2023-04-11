import { SpeakeasyBase } from "../../../internal/utils";
import { KeywordResponse } from "./keywordresponse";
/**
 * A type that contains the response fields for the bulk request to create keywords.
 */
export declare class BulkCreateKeywordResponse extends SpeakeasyBase {
    /**
     * A list of keywords that have been processed by the request.
     */
    responses?: KeywordResponse[];
}
