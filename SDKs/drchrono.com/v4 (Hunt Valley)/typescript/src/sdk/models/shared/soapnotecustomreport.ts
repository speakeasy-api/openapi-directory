import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SoapNoteCustomReportClinicalNoteField
/** 
 * Array of field objects
**/
export class SoapNoteCustomReportClinicalNoteField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_values" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clinical_note_template" })
  clinicalNoteTemplate?: number;

  @SpeakeasyMetadata({ data: "json, name=data_type" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}


// SoapNoteCustomReportSoapNoteCustomReport
/** 
 * Order of templates
**/
export class SoapNoteCustomReportSoapNoteCustomReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=on_complete_note" })
  onCompleteNote?: number;

  @SpeakeasyMetadata({ data: "json, name=on_ipad" })
  onIpad?: number;
}


export class SoapNoteCustomReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clinical_note_fields", elemType: SoapNoteCustomReportClinicalNoteField })
  clinicalNoteFields?: SoapNoteCustomReportClinicalNoteField[];

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_onpatient" })
  isOnpatient?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_persistent" })
  isPersistent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: SoapNoteCustomReportSoapNoteCustomReport;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
