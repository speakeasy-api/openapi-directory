import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FormFieldTypeEnum {
    Text = "text",
    Checkbox = "checkbox",
    Tel = "tel",
    Email = "email",
    Url = "url",
    Textarea = "textarea",
    Select = "select",
    FilteredSelect = "filtered-select",
    MultiSelect = "multi-select",
    Datetime = "datetime",
    Date = "date",
    Time = "time",
    Number = "number"
}
export declare class FormField extends SpeakeasyBase {
    /**
     * Only applicable to select fields. Allow the user to add a custom value though the option select if the desired value is not in the option select list.
     */
    allowCustomValues?: boolean;
    customField?: boolean;
    /**
     * The description of the form field
     */
    description?: string;
    /**
     * Indicates if the form field is displayed in a “read-only” mode.
     */
    disabled?: boolean;
    /**
     * Indicates if the form field is not displayed but the value that is being stored on the connection.
     */
    hidden?: boolean;
    /**
     * The unique identifier of the form field.
     */
    id?: string;
    /**
     * The label of the field
     */
    label?: string;
    options?: any[];
    /**
     * The placeholder for the form field
     */
    placeholder?: string;
    /**
     * Indicates if the form field is required, which means it must be filled in before the form can be submitted
     */
    required?: boolean;
    /**
     * Indicates if the form field contains sensitive data, which will display the value as a masked input.
     */
    sensitive?: boolean;
    type?: FormFieldTypeEnum;
}
