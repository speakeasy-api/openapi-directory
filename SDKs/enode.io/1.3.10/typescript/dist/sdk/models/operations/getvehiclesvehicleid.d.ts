import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVehiclesVehicleidPathParams extends SpeakeasyBase {
    vehicleId: string;
}
export declare enum GetVehiclesVehicleidFieldEnum {
    SmartChargingPolicy = "smartChargingPolicy",
    ChargeState = "chargeState",
    Location = "location",
    Information = "information",
    Odometer = "odometer"
}
export declare class GetVehiclesVehicleidQueryParams extends SpeakeasyBase {
    field?: GetVehiclesVehicleidFieldEnum[];
}
export declare class GetVehiclesVehicleidSecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
    userAccessToken2?: shared.SchemeUserAccessToken;
    userAccessToken3?: shared.SchemeUserAccessToken;
    userAccessToken4?: shared.SchemeUserAccessToken;
    userAccessToken5?: shared.SchemeUserAccessToken;
}
export declare class GetVehiclesVehicleid200ApplicationJson extends SpeakeasyBase {
    chargeState?: shared.Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema;
    chargingLocationId: string;
    id: string;
    information?: shared.Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema;
    isReachable: boolean;
    lastSeen: Date;
    location?: shared.Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema;
    odometer?: shared.Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema;
    smartChargingPolicy?: shared.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema;
}
export declare class GetVehiclesVehicleidRequest extends SpeakeasyBase {
    pathParams: GetVehiclesVehicleidPathParams;
    queryParams: GetVehiclesVehicleidQueryParams;
    security: GetVehiclesVehicleidSecurity;
}
export declare class GetVehiclesVehicleidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getVehiclesVehicleid200ApplicationJSONObject?: GetVehiclesVehicleid200ApplicationJson;
}
