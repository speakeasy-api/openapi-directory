import { SpeakeasyBase } from "../../../internal/utils";
import { FormField } from "./formfield";
/**
 * Attributes of the form including it's included fields and css styles
**/
export declare class FormAttributes extends SpeakeasyBase {
    cssStyles?: string;
    elements?: FormField[];
    formDescription?: string;
    submitButtonText?: string;
    successMessage?: string;
}
