import { SpeakeasyBase } from "../../../internal/utils";
import { Form } from "./form";
import { Share } from "./share";
/**
 * Response object for forms.
**/
export declare class FormResponse extends SpeakeasyBase {
    data?: Form;
    included?: Share[];
    responseStatus?: number;
}
