import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVehiclesVehicleidOdometerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vehicleId" })
  vehicleId: string;
}


export class GetVehiclesVehicleidOdometerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;
}


// GetVehiclesVehicleidOdometer200ApplicationJson
/** 
 * Vehicle's odometer with timestamp
**/
export class GetVehiclesVehicleidOdometer200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;
}


export class GetVehiclesVehicleidOdometerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVehiclesVehicleidOdometerPathParams;

  @SpeakeasyMetadata()
  security: GetVehiclesVehicleidOdometerSecurity;
}


export class GetVehiclesVehicleidOdometerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getVehiclesVehicleidOdometer200ApplicationJSONObject?: GetVehiclesVehicleidOdometer200ApplicationJson;
}
