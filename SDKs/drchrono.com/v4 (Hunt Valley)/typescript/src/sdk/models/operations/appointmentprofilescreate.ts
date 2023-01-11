import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppointmentProfilesCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class AppointmentProfilesCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class AppointmentProfilesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AppointmentProfilesCreateQueryParams;

  @SpeakeasyMetadata()
  security: AppointmentProfilesCreateSecurity;
}


export class AppointmentProfilesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appointmentProfile?: shared.AppointmentProfile;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
