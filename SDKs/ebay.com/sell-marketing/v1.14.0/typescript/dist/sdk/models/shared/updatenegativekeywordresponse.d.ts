import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * A type that contains the fields for the <b>UpdateNegativeKeyword</b> response.
 */
export declare class UpdateNegativeKeywordResponse extends SpeakeasyBase {
    /**
     * A container that will be returned if there are one or more issues associated with modifying the corresponding negative keyword.
     */
    errors?: ErrorT[];
    /**
     * A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword.
     */
    negativeKeywordId?: string;
    /**
     * An HTTP status code that indicates the success or failure of updating that negative keyword.
     */
    statusCode?: number;
}
