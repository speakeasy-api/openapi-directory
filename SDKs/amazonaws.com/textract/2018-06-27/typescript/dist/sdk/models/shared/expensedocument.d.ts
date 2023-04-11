import { SpeakeasyBase } from "../../../internal/utils";
import { Block } from "./block";
import { ExpenseField } from "./expensefield";
import { LineItemGroup } from "./lineitemgroup";
/**
 * The structure holding all the information returned by AnalyzeExpense
 */
export declare class ExpenseDocument extends SpeakeasyBase {
    blocks?: Block[];
    expenseIndex?: number;
    lineItemGroups?: LineItemGroup[];
    summaryFields?: ExpenseField[];
}
