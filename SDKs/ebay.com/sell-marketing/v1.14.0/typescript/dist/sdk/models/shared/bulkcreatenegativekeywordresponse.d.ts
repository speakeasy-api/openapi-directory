import { SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeywordResponse } from "./negativekeywordresponse";
/**
 * A type that contains the response fields for the bulk request to create negative keywords.
 */
export declare class BulkCreateNegativeKeywordResponse extends SpeakeasyBase {
    /**
     * A list of negative keywords that have been processed by the request.
     */
    responses?: NegativeKeywordResponse[];
}
