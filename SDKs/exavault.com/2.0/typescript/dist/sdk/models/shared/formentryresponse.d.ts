import { SpeakeasyBase } from "../../../internal/utils";
import { FormEntry } from "./formentry";
/**
 * Response object of the form data.
 */
export declare class FormEntryResponse extends SpeakeasyBase {
    /**
     * Object submissions data for form.
     */
    data?: FormEntry[];
    /**
     * Http status code of the response.
     */
    responseStatus?: number;
    /**
     * Number of returned results.
     */
    returnedResults?: number;
    /**
     * Total results found.
     */
    totalResults?: number;
}
