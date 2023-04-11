import { SpeakeasyBase } from "../../../internal/utils";
import { FormField } from "./formfield";
/**
 * Attributes of the form including it's included fields and css styles
 */
export declare class FormAttributes extends SpeakeasyBase {
    /**
     * CSS Styles of the form.
     */
    cssStyles?: string;
    /**
     * Array of form fields defined for the form
     */
    elements?: FormField[];
    /**
     * Text that appears at the top of a receive form
     */
    formDescription?: string;
    /**
     * Text that appears on the submit button for the form
     */
    submitButtonText?: string;
    /**
     * Message displayed to submitter after files are uploaded
     */
    successMessage?: string;
}
