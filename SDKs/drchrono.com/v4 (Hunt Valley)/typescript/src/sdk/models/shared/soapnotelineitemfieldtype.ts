import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SoapNoteLineItemFieldType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_values" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clinical_note_template" })
  clinicalNoteTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=data_type" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}
