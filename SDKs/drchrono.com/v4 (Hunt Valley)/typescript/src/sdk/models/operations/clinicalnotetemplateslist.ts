import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClinicalNoteTemplatesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class ClinicalNoteTemplatesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


// ClinicalNoteTemplatesList200ApplicationJson
/** 
 * Paginated Result
**/
export class ClinicalNoteTemplatesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.SoapNoteCustomReport })
  data?: shared.SoapNoteCustomReport[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}


export class ClinicalNoteTemplatesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ClinicalNoteTemplatesListQueryParams;

  @SpeakeasyMetadata()
  security: ClinicalNoteTemplatesListSecurity;
}


export class ClinicalNoteTemplatesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  clinicalNoteTemplatesList200ApplicationJSONObject?: ClinicalNoteTemplatesList200ApplicationJson;
}
