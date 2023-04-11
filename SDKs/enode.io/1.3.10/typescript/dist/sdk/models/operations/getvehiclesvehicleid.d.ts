import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVehiclesVehicleidSecurity extends SpeakeasyBase {
    userAccessToken?: string;
    userAccessToken1?: string;
    userAccessToken2?: string;
    userAccessToken3?: string;
    userAccessToken4?: string;
    userAccessToken5?: string;
}
export declare enum GetVehiclesVehicleidFieldEnum {
    SmartChargingPolicy = "smartChargingPolicy",
    ChargeState = "chargeState",
    Location = "location",
    Information = "information",
    Odometer = "odometer"
}
export declare class GetVehiclesVehicleidRequest extends SpeakeasyBase {
    /**
     * An optional array of Vehicle fields that should be included in the response, for example: `?field[]=information&field[]=location`
     *
     * @remarks
     *
     * By default, no fields are included and only the Vehicle ID will be returned. Response time may be impacted by which fields you request.
     */
    field?: GetVehiclesVehicleidFieldEnum[];
    /**
     * ID of the Vehicle
     */
    vehicleId: string;
}
/**
 * Successful
 */
export declare class GetVehiclesVehicleid200ApplicationJSON extends SpeakeasyBase {
    chargeState?: shared.Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema;
    /**
     * Id of the charging location the vehicle is currently positioned at (if any)
     */
    chargingLocationId: string;
    /**
     * Vehicle ID
     */
    id: string;
    /**
     * Descriptive information about the Vehicle
     */
    information?: shared.Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema;
    /**
     * Is the vehicle currently reachable?
     */
    isReachable: boolean;
    /**
     * The last time vehicle was successfully communicated with
     */
    lastSeen: Date;
    /**
     * Vehicle's GPS coordinates with timestamp
     */
    location?: shared.Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema;
    /**
     * Vehicle's odometer with timestamp
     */
    odometer?: shared.Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema;
    smartChargingPolicy?: shared.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema;
}
export declare class GetVehiclesVehicleidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful
     */
    getVehiclesVehicleid200ApplicationJSONObject?: GetVehiclesVehicleid200ApplicationJSON;
}
