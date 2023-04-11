import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Array of field objects
 */
export declare class SoapNoteCustomReportClinicalNoteField extends SpeakeasyBase {
    allowedValues?: string[];
    /**
     * Indicates that the field has been soft-deleted by the doctor
     */
    archived?: boolean;
    clinicalNoteTemplate?: number;
    /**
     * One of `""`, `"Checkbox"`, `"NullCheckbox"`, `"String"`, `"TwoStrings"`, `"FreeDraw"`, `"Photo"`, `"Header"`, `"Subheader"`
     */
    dataType?: string;
    name?: string;
    /**
     * Indicates that a note should not be locked unless a value is provided for this field
     */
    required?: boolean;
}
/**
 * Order of templates
 */
export declare class SoapNoteCustomReportSoapNoteCustomReport extends SpeakeasyBase {
    /**
     * Order of the template on complete notes
     */
    onCompleteNote?: number;
    /**
     * Order of the template on iPad
     */
    onIpad?: number;
}
/**
 * OK
 */
export declare class SoapNoteCustomReport extends SpeakeasyBase {
    /**
     * Indicates that the doctor has soft-deleted this template, and will not use it for future appointments
     */
    archived?: boolean;
    /**
     * clinical note fields
     */
    clinicalNoteFields?: SoapNoteCustomReportClinicalNoteField[];
    doctor?: string;
    id?: number;
    isOnpatient?: boolean;
    /**
     * If this is true, this report will be the same across all notes
     */
    isPersistent?: boolean;
    name?: string;
    /**
     * Order of templates
     */
    order?: SoapNoteCustomReportSoapNoteCustomReport;
    updatedAt?: string;
}
