import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BonusInfo } from "./bonusinfo";



// ContractBonusInfo
/** 
 * Describe the bonus information related to your current contract.
**/
export class ContractBonusInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bonuses", elemType: BonusInfo })
  bonuses: BonusInfo[];
}
