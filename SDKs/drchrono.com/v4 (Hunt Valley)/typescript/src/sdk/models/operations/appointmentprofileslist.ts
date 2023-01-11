import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppointmentProfilesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class AppointmentProfilesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


// AppointmentProfilesList200ApplicationJson
/** 
 * Paginated Result
**/
export class AppointmentProfilesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.AppointmentProfile })
  data?: shared.AppointmentProfile[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}


export class AppointmentProfilesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AppointmentProfilesListQueryParams;

  @SpeakeasyMetadata()
  security: AppointmentProfilesListSecurity;
}


export class AppointmentProfilesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  appointmentProfilesList200ApplicationJSONObject?: AppointmentProfilesList200ApplicationJson;
}
