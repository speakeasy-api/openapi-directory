import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BillingProfilesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class BillingProfilesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class BillingProfilesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class BillingProfilesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BillingProfilesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: BillingProfilesReadQueryParams;

  @SpeakeasyMetadata()
  security: BillingProfilesReadSecurity;
}


export class BillingProfilesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  billingProfile?: shared.BillingProfile;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
