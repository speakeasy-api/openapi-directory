import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateKeywordResponse } from "./updatekeywordresponse";
/**
 * A type that defines the fields for the <b>BulkUpdateKeyword</b> response.
 */
export declare class BulkUpdateKeywordResponse extends SpeakeasyBase {
    /**
     * A list of keywords that have been processed from the bulk request.
     */
    responses?: UpdateKeywordResponse[];
}
