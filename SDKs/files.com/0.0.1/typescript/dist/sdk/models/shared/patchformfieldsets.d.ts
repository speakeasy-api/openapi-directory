import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatchFormFieldSetsFormFields extends SpeakeasyBase {
    /**
     * Default option to be preselected in the dropdown or radio.
     */
    defaultOption?: string;
    /**
     * Type of field: text, text_area, dropdown, or radio
     */
    fieldType?: string;
    /**
     * Help text of field
     */
    helpText?: string;
    /**
     * Id of existing Form Field
     */
    id?: number;
    /**
     * Label of Field
     */
    label?: string;
    /**
     * List of options for dropdown or radio
     */
    optionsForSelect?: string;
    /**
     * Is this a required field? (default true)
     */
    required?: boolean;
}
/**
 * Update Form Field Set
 */
export declare class PatchFormFieldSets extends SpeakeasyBase {
    formFields?: PatchFormFieldSetsFormFields[];
    /**
     * Skip validating company
     */
    skipCompany?: boolean;
    /**
     * Skip validating form email
     */
    skipEmail?: boolean;
    /**
     * Skip validating form name
     */
    skipName?: boolean;
    /**
     * Title to be displayed
     */
    title?: string;
}
