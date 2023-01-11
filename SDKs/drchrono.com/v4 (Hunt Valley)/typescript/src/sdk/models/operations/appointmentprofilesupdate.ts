import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppointmentProfilesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AppointmentProfilesUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class AppointmentProfilesUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class AppointmentProfilesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppointmentProfilesUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: AppointmentProfilesUpdateQueryParams;

  @SpeakeasyMetadata()
  security: AppointmentProfilesUpdateSecurity;
}


export class AppointmentProfilesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
