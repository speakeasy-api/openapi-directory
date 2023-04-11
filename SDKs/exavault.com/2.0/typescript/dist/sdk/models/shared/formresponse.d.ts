import { SpeakeasyBase } from "../../../internal/utils";
import { Form } from "./form";
import { Share } from "./share";
/**
 * Response object for forms.
 */
export declare class FormResponse extends SpeakeasyBase {
    /**
     * Regular form object.
     */
    data?: Form;
    included?: Share[];
    /**
     * Http status code of the response.
     */
    responseStatus?: number;
}
