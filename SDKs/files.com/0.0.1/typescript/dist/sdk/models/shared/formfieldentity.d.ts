import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of Field
 */
export declare enum FormFieldEntityFieldTypeEnum {
    Text = "text",
    TextArea = "text_area",
    Dropdown = "dropdown",
    Radio = "radio"
}
export declare class FormFieldEntity extends SpeakeasyBase {
    /**
     * Default option for radio and dropdown
     */
    defaultOption?: string;
    /**
     * Type of Field
     */
    fieldType?: FormFieldEntityFieldTypeEnum;
    /**
     * Form field set id
     */
    formFieldSetId?: number;
    /**
     * Help text to be displayed
     */
    helpText?: string;
    /**
     * Form field id
     */
    id?: number;
    /**
     * Label to be displayed
     */
    label?: string;
    /**
     * Options to display for radio and dropdown
     */
    optionsForSelect?: string[];
    /**
     * Is this a required field?
     */
    required?: boolean;
}
