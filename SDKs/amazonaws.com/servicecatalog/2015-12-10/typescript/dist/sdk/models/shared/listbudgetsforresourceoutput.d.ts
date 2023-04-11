import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetDetail } from "./budgetdetail";
/**
 * Success
 */
export declare class ListBudgetsForResourceOutput extends SpeakeasyBase {
    budgets?: BudgetDetail[];
    nextPageToken?: string;
}
