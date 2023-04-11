import { SpeakeasyBase } from "../../../internal/utils";
import { OptimisationActionNameEnum } from "./optimisationactionnameenum";
import { RuleLastExecutionStatusEnum } from "./rulelastexecutionstatusenum";
import { RuleLinks } from "./rulelinks";
/**
 * Get Rule
 */
export declare class Rule extends SpeakeasyBase {
    /**
     * The optimisation action
     */
    actionName: OptimisationActionNameEnum;
    /**
     * Is the rule enabled
     */
    enabled: boolean;
    /**
     * The status of the last execution
     */
    lastExecutionStatus?: RuleLastExecutionStatusEnum;
    /**
     * The utc date of the last execution
     */
    lastExecutionUtcDate?: Date;
    /**
     * Links to retrieve/action on other entities
     */
    links: RuleLinks;
    /**
     * Rule execution position
     */
    position: number;
    /**
     * Report filter identifier linked to the rule
     */
    reportFilterId: string;
    /**
     * The identifier of the rule
     */
    ruleId: string;
    /**
     * The name of the rule
     */
    ruleName: string;
    /**
     * Rule validity end utc date
     */
    validityEndUtcDate?: Date;
    /**
     * Rule validity start utc date
     */
    validityStartUtcDate?: Date;
}
