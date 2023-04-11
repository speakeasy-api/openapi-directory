import { SpeakeasyBase } from "../../../internal/utils";
import { ExpenseCurrency } from "./expensecurrency";
import { ExpenseDetection } from "./expensedetection";
import { ExpenseGroupProperty } from "./expensegroupproperty";
import { ExpenseType } from "./expensetype";
/**
 * Breakdown of detected information, seperated into the catagories Type, LabelDetection, and ValueDetection
 */
export declare class ExpenseField extends SpeakeasyBase {
    currency?: ExpenseCurrency;
    groupProperties?: ExpenseGroupProperty[];
    labelDetection?: ExpenseDetection;
    pageNumber?: number;
    type?: ExpenseType;
    valueDetection?: ExpenseDetection;
}
