import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClaimBillingNotesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class ClaimBillingNotesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


// ClaimBillingNotesList200ApplicationJson
/** 
 * Paginated Result
**/
export class ClaimBillingNotesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ClaimBillingNotes })
  data?: shared.ClaimBillingNotes[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}


export class ClaimBillingNotesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ClaimBillingNotesListQueryParams;

  @SpeakeasyMetadata()
  security: ClaimBillingNotesListSecurity;
}


export class ClaimBillingNotesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  claimBillingNotesList200ApplicationJSONObject?: ClaimBillingNotesList200ApplicationJson;
}
