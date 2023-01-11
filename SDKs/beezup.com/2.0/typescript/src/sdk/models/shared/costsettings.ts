import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CostTypeEnum } from "./costtypeenum";



// CostSettings
/** 
 * If this property is not indicated please force the user to configure the cost settings.
 * Defines the cost type you have on this channel with the cost value.
 * 
**/
export class CostSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costType" })
  costType: CostTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=globalCostValue" })
  globalCostValue?: number;
}
