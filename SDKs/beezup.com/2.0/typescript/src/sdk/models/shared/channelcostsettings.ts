import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CostTypeEnum } from "./costtypeenum";



// ChannelCostSettings
/** 
 * Indicate the default configuration of the cost on this channel.
**/
export class ChannelCostSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costType" })
  costType: CostTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=globalCostValue" })
  globalCostValue?: number;
}
