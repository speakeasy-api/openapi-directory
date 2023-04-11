import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateNegativeKeywordResponse } from "./updatenegativekeywordresponse";
/**
 * A type that defines the fields for the <b>BulkUpdateNegativeKeyword</b> response.
 */
export declare class BulkUpdateNegativeKeywordResponse extends SpeakeasyBase {
    /**
     * A list of negative keywords that have been processed from the bulk request.
     */
    responses?: UpdateNegativeKeywordResponse[];
}
