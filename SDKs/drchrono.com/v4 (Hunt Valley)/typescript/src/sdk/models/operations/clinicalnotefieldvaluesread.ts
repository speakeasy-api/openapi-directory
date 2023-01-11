import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClinicalNoteFieldValuesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ClinicalNoteFieldValuesReadQueryParams extends SpeakeasyBase {
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


export class ClinicalNoteFieldValuesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ClinicalNoteFieldValuesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClinicalNoteFieldValuesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: ClinicalNoteFieldValuesReadQueryParams;

  @SpeakeasyMetadata()
  security: ClinicalNoteFieldValuesReadSecurity;
}


export class ClinicalNoteFieldValuesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  soapNoteLineItemFieldValue?: shared.SoapNoteLineItemFieldValue;

  @SpeakeasyMetadata()
  statusCode: number;
}
