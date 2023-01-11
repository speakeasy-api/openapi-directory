import { SpeakeasyBase } from "../../../internal/utils";
export declare enum Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum {
    Unknown = "",
    Default = "DEFAULT"
}
export declare class Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
    batteryCapacity?: number;
    batteryLevel?: number;
    chargeLimit?: number;
    chargeRate?: number;
    chargeTimeRemaining?: number;
    isCharging?: boolean;
    isChargingReasons?: Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum[];
    isPluggedIn?: boolean;
    range?: number;
}
