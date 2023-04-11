import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Advanced field settings
 */
export declare class FormFieldSettings extends SpeakeasyBase {
    /**
     * Secondary description of field.
     */
    description?: string;
    /**
     * Whether this field must be completed before form can be submitted
     */
    isRequired?: boolean;
    senderEmail?: boolean;
    /**
     * Whether to place submitted files into a subfolder named the contents of this field. Only takes effect when the `fileDropCreateFolders` parameter on the receive folder is `true`. `isRequired` must be set to `true` if this setting is `true`.
     */
    useAsFolderName?: boolean;
    /**
     * How much of the available width the field should occupy
     */
    width?: number;
}
/**
 * Field type
 */
export declare enum FormFieldTypeEnum {
    Email = "email",
    Textarea = "textarea",
    Name = "name",
    Text = "text"
}
export declare class FormField extends SpeakeasyBase {
    /**
     * ID of the form field.
     */
    id?: number;
    /**
     * Label of the field.
     */
    name?: string;
    /**
     * Order that field appears on the form, starting from 0
     */
    order?: number;
    /**
     * Advanced field settings
     */
    settings?: FormFieldSettings;
    /**
     * Field type
     */
    type?: FormFieldTypeEnum;
}
