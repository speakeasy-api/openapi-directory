import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionTypeEnum } from "./executiontypeenum";
export declare class ExecuteBudgetActionRequest extends SpeakeasyBase {
    /**
     * The account ID of the user. It's a 12-digit number.
     */
    accountId: string;
    actionId: string;
    /**
     *  A string that represents the budget name. The ":" and "\" characters aren't allowed.
     */
    budgetName: string;
    executionType: ExecutionTypeEnum;
}
