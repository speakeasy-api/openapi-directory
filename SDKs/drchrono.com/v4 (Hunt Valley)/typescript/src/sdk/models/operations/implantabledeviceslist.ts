import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImplantableDevicesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mu_date" })
  muDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mu_date_range" })
  muDateRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class ImplantableDevicesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


// ImplantableDevicesList200ApplicationJson
/** 
 * Paginated Result
**/
export class ImplantableDevicesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ImplantableDevice })
  data?: shared.ImplantableDevice[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}


export class ImplantableDevicesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ImplantableDevicesListQueryParams;

  @SpeakeasyMetadata()
  security: ImplantableDevicesListSecurity;
}


export class ImplantableDevicesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  implantableDevicesList200ApplicationJSONObject?: ImplantableDevicesList200ApplicationJson;
}
