import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClaimBillingNotesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ClaimBillingNotesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class ClaimBillingNotesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ClaimBillingNotesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClaimBillingNotesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: ClaimBillingNotesReadQueryParams;

  @SpeakeasyMetadata()
  security: ClaimBillingNotesReadSecurity;
}


export class ClaimBillingNotesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  claimBillingNotes?: shared.ClaimBillingNotes;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
