import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVehiclesVehicleidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vehicleId" })
  vehicleId: string;
}

export enum GetVehiclesVehicleidFieldEnum {
    SmartChargingPolicy = "smartChargingPolicy",
    ChargeState = "chargeState",
    Location = "location",
    Information = "information",
    Odometer = "odometer"
}


export class GetVehiclesVehicleidQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=field[]" })
  field?: GetVehiclesVehicleidFieldEnum[];
}


export class GetVehiclesVehicleidSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken2?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken3?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken4?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken5?: shared.SchemeUserAccessToken;
}


export class GetVehiclesVehicleid200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeState" })
  chargeState?: shared.Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema;

  @SpeakeasyMetadata({ data: "json, name=chargingLocationId" })
  chargingLocationId: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=information" })
  information?: shared.Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema;

  @SpeakeasyMetadata({ data: "json, name=isReachable" })
  isReachable: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastSeen" })
  lastSeen: Date;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: shared.Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema;

  @SpeakeasyMetadata({ data: "json, name=odometer" })
  odometer?: shared.Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema;

  @SpeakeasyMetadata({ data: "json, name=smartChargingPolicy" })
  smartChargingPolicy?: shared.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema;
}


export class GetVehiclesVehicleidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVehiclesVehicleidPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVehiclesVehicleidQueryParams;

  @SpeakeasyMetadata()
  security: GetVehiclesVehicleidSecurity;
}


export class GetVehiclesVehicleidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getVehiclesVehicleid200ApplicationJSONObject?: GetVehiclesVehicleid200ApplicationJson;
}
