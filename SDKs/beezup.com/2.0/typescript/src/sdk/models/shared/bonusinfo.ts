import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BonusTypeEnum } from "./bonustypeenum";



export class BonusInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=bonusType" })
  bonusType: BonusTypeEnum;
}
