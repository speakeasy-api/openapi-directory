import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppointmentProfilesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AppointmentProfilesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class AppointmentProfilesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class AppointmentProfilesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppointmentProfilesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: AppointmentProfilesReadQueryParams;

  @SpeakeasyMetadata()
  security: AppointmentProfilesReadSecurity;
}


export class AppointmentProfilesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appointmentProfile?: shared.AppointmentProfile;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
