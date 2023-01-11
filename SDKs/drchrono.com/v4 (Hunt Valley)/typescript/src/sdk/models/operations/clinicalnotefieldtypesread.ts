import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClinicalNoteFieldTypesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ClinicalNoteFieldTypesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clinical_note_template" })
  clinicalNoteTemplate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class ClinicalNoteFieldTypesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ClinicalNoteFieldTypesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClinicalNoteFieldTypesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: ClinicalNoteFieldTypesReadQueryParams;

  @SpeakeasyMetadata()
  security: ClinicalNoteFieldTypesReadSecurity;
}


export class ClinicalNoteFieldTypesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  soapNoteLineItemFieldType?: shared.SoapNoteLineItemFieldType;

  @SpeakeasyMetadata()
  statusCode: number;
}
