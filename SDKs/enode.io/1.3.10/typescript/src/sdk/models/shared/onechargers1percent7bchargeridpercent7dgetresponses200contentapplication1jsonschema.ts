import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeRate" })
  chargeRate?: number;

  @SpeakeasyMetadata({ data: "json, name=isCharging" })
  isCharging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPluggedIn" })
  isPluggedIn?: boolean;
}


// Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation
/** 
 * Descriptive information about the Charger
**/
export class Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}


export class Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeState" })
  chargeState?: Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=information" })
  information?: Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation;

  @SpeakeasyMetadata({ data: "json, name=isReachable" })
  isReachable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastSeen" })
  lastSeen?: Date;
}
