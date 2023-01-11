import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppointmentProfilesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AppointmentProfilesDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class AppointmentProfilesDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class AppointmentProfilesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppointmentProfilesDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: AppointmentProfilesDeleteQueryParams;

  @SpeakeasyMetadata()
  security: AppointmentProfilesDeleteSecurity;
}


export class AppointmentProfilesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
