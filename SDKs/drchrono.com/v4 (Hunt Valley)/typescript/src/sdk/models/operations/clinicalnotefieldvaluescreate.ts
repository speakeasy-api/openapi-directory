import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClinicalNoteFieldValuesCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clinical_note_field" })
  clinicalNoteField?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clinical_note_template" })
  clinicalNoteTemplate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class ClinicalNoteFieldValuesCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ClinicalNoteFieldValuesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ClinicalNoteFieldValuesCreateQueryParams;

  @SpeakeasyMetadata()
  security: ClinicalNoteFieldValuesCreateSecurity;
}


export class ClinicalNoteFieldValuesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  soapNoteLineItemFieldValue?: shared.SoapNoteLineItemFieldValue;

  @SpeakeasyMetadata()
  statusCode: number;
}
