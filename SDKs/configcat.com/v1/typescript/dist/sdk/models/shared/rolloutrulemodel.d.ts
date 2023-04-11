import { SpeakeasyBase } from "../../../internal/utils";
import { RolloutRuleComparatorEnum } from "./rolloutrulecomparatorenum";
import { SegmentComparatorEnum } from "./segmentcomparatorenum";
export declare class RolloutRuleModel extends SpeakeasyBase {
    comparator?: RolloutRuleComparatorEnum;
    /**
     * The user attribute to compare.
     */
    comparisonAttribute?: string;
    /**
     * The value to compare against.
     */
    comparisonValue?: string;
    segmentComparator?: SegmentComparatorEnum;
    /**
     * The segment to compare against.
     */
    segmentId?: string;
    /**
     * The value to serve when the comparison matches. It must respect the setting type.
     */
    value?: any;
}
