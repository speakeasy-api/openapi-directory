import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum Onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchemaPropertiesEnum {
    BatteryLevel = "BATTERY_LEVEL",
    Range = "RANGE",
    IsPluggedIn = "IS_PLUGGED_IN",
    IsCharging = "IS_CHARGING",
    IsChargingReasons = "IS_CHARGING_REASONS",
    Location = "LOCATION"
}


export class Onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchemaPropertiesEnum;
}
