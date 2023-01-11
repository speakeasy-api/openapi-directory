import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostVehiclesVehicleidWatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vehicleId" })
  vehicleId: string;
}

export enum PostVehiclesVehicleidWatchRequestBodyPropertiesEnum {
    BatteryLevel = "BATTERY_LEVEL",
    Range = "RANGE",
    IsPluggedIn = "IS_PLUGGED_IN",
    IsCharging = "IS_CHARGING",
    IsChargingReasons = "IS_CHARGING_REASONS",
    Location = "LOCATION"
}


export class PostVehiclesVehicleidWatchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: PostVehiclesVehicleidWatchRequestBodyPropertiesEnum;
}


export class PostVehiclesVehicleidWatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken2?: shared.SchemeUserAccessToken;
}


export class PostVehiclesVehicleidWatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostVehiclesVehicleidWatchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostVehiclesVehicleidWatchRequestBody;

  @SpeakeasyMetadata()
  security: PostVehiclesVehicleidWatchSecurity;
}


export class PostVehiclesVehicleidWatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchema?: shared.Onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchema;
}
