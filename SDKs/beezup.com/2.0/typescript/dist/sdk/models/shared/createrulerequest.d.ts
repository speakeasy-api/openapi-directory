import { SpeakeasyBase } from "../../../internal/utils";
import { OptimisationActionNameEnum } from "./optimisationactionnameenum";
export declare class CreateRuleRequest extends SpeakeasyBase {
    /**
     * The end validity utc date of the rule
     */
    endUtcDate?: Date;
    /**
     * The optimisation action
     */
    optimisationActionName: OptimisationActionNameEnum;
    /**
     * The report filter to use for the rule
     */
    reportFilterId: string;
    /**
     * The name of the rule
     */
    ruleName: string;
    /**
     * The start validity utc date of the rule
     */
    startUtcDate?: Date;
}
