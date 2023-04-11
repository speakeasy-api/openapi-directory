import { SpeakeasyBase } from "../../../internal/utils";
import { Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema } from "./onevehicles1percent7bvehicleidpercent7d1chargestategetresponses200contentapplication1jsonschema";
import { Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema } from "./onevehicles1percent7bvehicleidpercent7d1informationgetresponses200contentapplication1jsonschema";
import { Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema } from "./onevehicles1percent7bvehicleidpercent7d1locationgetresponses200contentapplication1jsonschema";
import { Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema } from "./onevehicles1percent7bvehicleidpercent7d1odometergetresponses200contentapplication1jsonschema";
import { Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema } from "./onevehicles1percent7bvehicleidpercent7d1smartchargingpolicyputrequestbodycontentapplication1jsonschema";
export declare class Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
    chargeState?: Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema;
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
    information?: Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema;
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
    location?: Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema;
    /**
     * Vehicle's odometer with timestamp
     */
    odometer?: Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema;
    smartChargingPolicy?: Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema;
}
