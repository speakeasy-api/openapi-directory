import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClinicalNoteFieldValuesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clinical_note_field" })
  clinicalNoteField?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clinical_note_template" })
  clinicalNoteTemplate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class ClinicalNoteFieldValuesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


// ClinicalNoteFieldValuesList200ApplicationJson
/** 
 * Paginated Result
**/
export class ClinicalNoteFieldValuesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.SoapNoteLineItemFieldValue })
  data?: shared.SoapNoteLineItemFieldValue[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}


export class ClinicalNoteFieldValuesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ClinicalNoteFieldValuesListQueryParams;

  @SpeakeasyMetadata()
  security: ClinicalNoteFieldValuesListSecurity;
}


export class ClinicalNoteFieldValuesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  clinicalNoteFieldValuesList200ApplicationJSONObject?: ClinicalNoteFieldValuesList200ApplicationJson;
}
