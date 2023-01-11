import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClaimBillingNotesCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class ClaimBillingNotesCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ClaimBillingNotesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ClaimBillingNotesCreateQueryParams;

  @SpeakeasyMetadata()
  security: ClaimBillingNotesCreateSecurity;
}


export class ClaimBillingNotesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  claimBillingNotes?: shared.ClaimBillingNotes;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
