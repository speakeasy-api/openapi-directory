import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClinicalNoteFieldTypesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clinical_note_template" })
  clinicalNoteTemplate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class ClinicalNoteFieldTypesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


// ClinicalNoteFieldTypesList200ApplicationJson
/** 
 * Paginated Result
**/
export class ClinicalNoteFieldTypesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.SoapNoteLineItemFieldType })
  data?: shared.SoapNoteLineItemFieldType[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}


export class ClinicalNoteFieldTypesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ClinicalNoteFieldTypesListQueryParams;

  @SpeakeasyMetadata()
  security: ClinicalNoteFieldTypesListSecurity;
}


export class ClinicalNoteFieldTypesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  clinicalNoteFieldTypesList200ApplicationJSONObject?: ClinicalNoteFieldTypesList200ApplicationJson;
}
