import { SpeakeasyBase } from "../../../internal/utils";
import { PITPolicyRuleUnitsEnum } from "./pitpolicyruleunitsenum";
/**
 * A rule in the Point in Time (PIT) policy representing when to take snapshots and how long to retain them for.
 */
export declare class PITPolicyRule extends SpeakeasyBase {
    enabled?: boolean;
    interval: number;
    retentionDuration: number;
    ruleID?: number;
    units: PITPolicyRuleUnitsEnum;
}
