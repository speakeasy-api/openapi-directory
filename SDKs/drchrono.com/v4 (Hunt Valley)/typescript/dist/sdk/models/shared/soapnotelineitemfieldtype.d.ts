import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class SoapNoteLineItemFieldType extends SpeakeasyBase {
    /**
     * Value options the field type relies on if applicable, otherwise it will be an empty array
     */
    allowedValues?: string[];
    /**
     * Indicates that the field has been soft-deleted by the doctor and will not be used in future notes
     */
    archived?: boolean;
    /**
     * ID of the `/api/clinical_note_templates` object that the field belongs to
     */
    clinicalNoteTemplate?: string;
    /**
     * Comment
     */
    comment?: string;
    /**
     * One of `""`, `"Checkbox"`, `"NullCheckbox"`, `"String"`, `"TwoStrings"`, `"FreeDraw"`, `"Photo"`, `"Header"`, `"Subheader"`
     */
    dataType?: string;
    id?: number;
    name?: string;
    /**
     * Indicates that a note should not be locked unless a value is provided for this field
     */
    required?: boolean;
}
