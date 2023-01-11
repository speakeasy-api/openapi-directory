import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClinicalNoteFieldValuesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ClinicalNoteFieldValuesUpdateQueryParams extends SpeakeasyBase {
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


export class ClinicalNoteFieldValuesUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ClinicalNoteFieldValuesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClinicalNoteFieldValuesUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: ClinicalNoteFieldValuesUpdateQueryParams;

  @SpeakeasyMetadata()
  security: ClinicalNoteFieldValuesUpdateSecurity;
}


export class ClinicalNoteFieldValuesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
