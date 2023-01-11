import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageLimitBreachActionEnum } from "./usagelimitbreachactionenum";
import { UsageLimitFeatureTypeEnum } from "./usagelimitfeaturetypeenum";
import { UsageLimitLimitTypeEnum } from "./usagelimitlimittypeenum";
import { UsageLimitPeriodEnum } from "./usagelimitperiodenum";
import { TagList } from "./taglist";



// UsageLimit
/** 
 * Describes a usage limit object for a cluster. 
**/
export class UsageLimit extends SpeakeasyBase {
  @SpeakeasyMetadata()
  amount?: number;

  @SpeakeasyMetadata()
  breachAction?: UsageLimitBreachActionEnum;

  @SpeakeasyMetadata()
  clusterIdentifier?: string;

  @SpeakeasyMetadata()
  featureType?: UsageLimitFeatureTypeEnum;

  @SpeakeasyMetadata()
  limitType?: UsageLimitLimitTypeEnum;

  @SpeakeasyMetadata()
  period?: UsageLimitPeriodEnum;

  @SpeakeasyMetadata({ elemType: TagList })
  tags?: TagList[];

  @SpeakeasyMetadata()
  usageLimitId?: string;
}
