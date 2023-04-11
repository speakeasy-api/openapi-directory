import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
import { UsageLimitBreachActionEnum } from "./usagelimitbreachactionenum";
import { UsageLimitFeatureTypeEnum } from "./usagelimitfeaturetypeenum";
import { UsageLimitLimitTypeEnum } from "./usagelimitlimittypeenum";
import { UsageLimitPeriodEnum } from "./usagelimitperiodenum";
/**
 * Describes a usage limit object for a cluster.
 */
export declare class UsageLimit extends SpeakeasyBase {
    amount?: number;
    breachAction?: UsageLimitBreachActionEnum;
    clusterIdentifier?: string;
    featureType?: UsageLimitFeatureTypeEnum;
    limitType?: UsageLimitLimitTypeEnum;
    period?: UsageLimitPeriodEnum;
    tags?: TagList[];
    usageLimitId?: string;
}
