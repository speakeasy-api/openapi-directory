import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SoapNoteLineItemFieldValue
/** 
 * Values entered by doctor when charting a particular appointment
**/
export class SoapNoteLineItemFieldValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appointment" })
  appointment: number;

  @SpeakeasyMetadata({ data: "json, name=clinical_note_field" })
  clinicalNoteField: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
