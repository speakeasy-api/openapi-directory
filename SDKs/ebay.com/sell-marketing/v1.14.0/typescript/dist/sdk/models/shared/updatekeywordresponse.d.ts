import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * A type that contains the fields for the <b>UpdateKeyword</b> response.
 */
export declare class UpdateKeywordResponse extends SpeakeasyBase {
    /**
     * This container will be returned if there are one or more issues associated with modifying the corresponding keyword.
     */
    errors?: ErrorT[];
    /**
     * This field identifies the keyword that the seller updated, or attempted to update.
     */
    keywordId?: string;
    /**
     * An HTTP status code is returned for each keyword to indicate the success or failure of updating that keyword.
     */
    statusCode?: number;
}
