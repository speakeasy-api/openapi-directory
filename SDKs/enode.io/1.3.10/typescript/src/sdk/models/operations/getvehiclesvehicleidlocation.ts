import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVehiclesVehicleidLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vehicleId" })
  vehicleId: string;
}


export class GetVehiclesVehicleidLocationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;
}


// GetVehiclesVehicleidLocation200ApplicationJson
/** 
 * Vehicle's GPS coordinates with timestamp
**/
export class GetVehiclesVehicleidLocation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;
}


export class GetVehiclesVehicleidLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVehiclesVehicleidLocationPathParams;

  @SpeakeasyMetadata()
  security: GetVehiclesVehicleidLocationSecurity;
}


export class GetVehiclesVehicleidLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getVehiclesVehicleidLocation200ApplicationJSONObject?: GetVehiclesVehicleidLocation200ApplicationJson;
}
