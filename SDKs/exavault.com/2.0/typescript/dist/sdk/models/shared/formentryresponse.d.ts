import { SpeakeasyBase } from "../../../internal/utils";
import { FormEntry } from "./formentry";
/**
 * Response object of the form data.
**/
export declare class FormEntryResponse extends SpeakeasyBase {
    data?: FormEntry[];
    responseStatus?: number;
    returnedResults?: number;
    totalResults?: number;
}
