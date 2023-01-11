import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVehicleChargestatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vehicleId" })
  vehicleId: string;
}


export class GetVehicleChargestateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;
}

export enum GetVehicleChargestate200ApplicationJsonIsChargingReasonsEnum {
    Unknown = "",
    Default = "DEFAULT"
}


export class GetVehicleChargestate200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batteryCapacity" })
  batteryCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=batteryLevel" })
  batteryLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=chargeLimit" })
  chargeLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=chargeRate" })
  chargeRate?: number;

  @SpeakeasyMetadata({ data: "json, name=chargeTimeRemaining" })
  chargeTimeRemaining?: number;

  @SpeakeasyMetadata({ data: "json, name=isCharging" })
  isCharging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isChargingReasons" })
  isChargingReasons?: GetVehicleChargestate200ApplicationJsonIsChargingReasonsEnum[];

  @SpeakeasyMetadata({ data: "json, name=isPluggedIn" })
  isPluggedIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: number;
}


export class GetVehicleChargestateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVehicleChargestatePathParams;

  @SpeakeasyMetadata()
  security: GetVehicleChargestateSecurity;
}


export class GetVehicleChargestateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getVehicleChargestate200ApplicationJSONObject?: GetVehicleChargestate200ApplicationJson;
}
