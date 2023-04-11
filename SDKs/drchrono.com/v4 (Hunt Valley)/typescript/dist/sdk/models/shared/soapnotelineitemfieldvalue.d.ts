import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Values entered by doctor when charting a particular appointment
 */
export declare class SoapNoteLineItemFieldValue extends SpeakeasyBase {
    /**
     * ID of appointment that the value applies to
     */
    appointment: number;
    /**
     * ID of `/api/clinical_note_field_types` object that indicates type of the value
     */
    clinicalNoteField: number;
    createdAt?: string;
    id?: number;
    updatedAt?: string;
    /**
     * Value of the field. Interpretation varies by field type.
     *
     * @remarks
     * `clinical_note_field.data_type` | Value | Description
     * ------------------------------- | ----- | -----------
     * `"Header"` | string |
     * `"SubHeader"` | string |
     * `"String"` | string | If field is single/multiple select field, make sure value presents in allowed values set.
     * `"TwoStrings"` | string | String is seperated by `"/"`
     * `"NullCheckbox"` | string | Can be `"0"`, `"1"`, `"2"`, `"0"`-`Not selected`, `"1"`-`No`, `"2"`-`Yes`
     * `"Checkbox"` | string | Can be `"True"`, `"False"`
     *
     */
    value: string;
}
