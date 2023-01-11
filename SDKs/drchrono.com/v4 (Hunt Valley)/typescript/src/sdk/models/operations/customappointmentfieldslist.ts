import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomAppointmentFieldsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class CustomAppointmentFieldsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


// CustomAppointmentFieldsList200ApplicationJson
/** 
 * Paginated Result
**/
export class CustomAppointmentFieldsList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.CustomAppointmentFieldType })
  data?: shared.CustomAppointmentFieldType[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}


export class CustomAppointmentFieldsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CustomAppointmentFieldsListQueryParams;

  @SpeakeasyMetadata()
  security: CustomAppointmentFieldsListSecurity;
}


export class CustomAppointmentFieldsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  customAppointmentFieldsList200ApplicationJSONObject?: CustomAppointmentFieldsList200ApplicationJson;
}
