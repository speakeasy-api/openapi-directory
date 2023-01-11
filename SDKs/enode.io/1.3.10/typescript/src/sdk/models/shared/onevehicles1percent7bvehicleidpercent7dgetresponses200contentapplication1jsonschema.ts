import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema } from "./onevehicles1percent7bvehicleidpercent7d1chargestategetresponses200contentapplication1jsonschema";
import { Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema } from "./onevehicles1percent7bvehicleidpercent7d1informationgetresponses200contentapplication1jsonschema";
import { Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema } from "./onevehicles1percent7bvehicleidpercent7d1locationgetresponses200contentapplication1jsonschema";
import { Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema } from "./onevehicles1percent7bvehicleidpercent7d1odometergetresponses200contentapplication1jsonschema";
import { Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema } from "./onevehicles1percent7bvehicleidpercent7d1smartchargingpolicyputrequestbodycontentapplication1jsonschema";



export class Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeState" })
  chargeState?: Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema;

  @SpeakeasyMetadata({ data: "json, name=chargingLocationId" })
  chargingLocationId: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=information" })
  information?: Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema;

  @SpeakeasyMetadata({ data: "json, name=isReachable" })
  isReachable: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastSeen" })
  lastSeen: Date;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema;

  @SpeakeasyMetadata({ data: "json, name=odometer" })
  odometer?: Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema;

  @SpeakeasyMetadata({ data: "json, name=smartChargingPolicy" })
  smartChargingPolicy?: Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema;
}
