import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This update will replace the following values.
 */
export declare class UpdateRuleRequest extends SpeakeasyBase {
    /**
     * Not required. The end validity utc date of the rule
     */
    endUtcDate?: Date;
    /**
     * The name of the rule
     */
    ruleName: string;
    /**
     * Not required. The start validity utc date of the rule.
     */
    startUtcDate?: Date;
}
