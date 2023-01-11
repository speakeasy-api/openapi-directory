import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum {
    Unknown = "",
    Default = "DEFAULT"
}


export class Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
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
  isChargingReasons?: Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum[];

  @SpeakeasyMetadata({ data: "json, name=isPluggedIn" })
  isPluggedIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: number;
}
