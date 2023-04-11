import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetedAndActualAmounts } from "./budgetedandactualamounts";
import { BudgetTypeEnum } from "./budgettypeenum";
import { CostTypes } from "./costtypes";
import { TimeUnitEnum } from "./timeunitenum";
/**
 * A history of the state of a budget at the end of the budget's specified time period.
 */
export declare class BudgetPerformanceHistory extends SpeakeasyBase {
    /**
     *  A string that represents the budget name. The ":" and "\" characters aren't allowed.
     */
    budgetName?: string;
    /**
     * <p> The type of a budget. It must be one of the following types: </p> <p> <code>COST</code>, <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, or <code>SAVINGS_PLANS_COVERAGE</code>.</p>
     */
    budgetType?: BudgetTypeEnum;
    budgetedAndActualAmountsList?: BudgetedAndActualAmounts[];
    costFilters?: Record<string, string[]>;
    costTypes?: CostTypes;
    /**
     *  The time unit of the budget, such as MONTHLY or QUARTERLY.
     */
    timeUnit?: TimeUnitEnum;
}
