import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Array of field objects
**/
export declare class SoapNoteCustomReportClinicalNoteField extends SpeakeasyBase {
    allowedValues?: string[];
    archived?: boolean;
    clinicalNoteTemplate?: number;
    dataType?: string;
    name?: string;
    required?: boolean;
}
/**
 * Order of templates
**/
export declare class SoapNoteCustomReportSoapNoteCustomReport extends SpeakeasyBase {
    onCompleteNote?: number;
    onIpad?: number;
}
export declare class SoapNoteCustomReport extends SpeakeasyBase {
    archived?: boolean;
    clinicalNoteFields?: SoapNoteCustomReportClinicalNoteField[];
    doctor?: string;
    id?: number;
    isOnpatient?: boolean;
    isPersistent?: boolean;
    name?: string;
    order?: SoapNoteCustomReportSoapNoteCustomReport;
    updatedAt?: string;
}
