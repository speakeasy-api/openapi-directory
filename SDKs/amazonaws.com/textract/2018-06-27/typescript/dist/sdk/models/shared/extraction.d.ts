import { SpeakeasyBase } from "../../../internal/utils";
import { ExpenseDocument } from "./expensedocument";
import { IdentityDocument } from "./identitydocument";
import { LendingDocument } from "./lendingdocument";
/**
 * Contains information extracted by an analysis operation after using StartLendingAnalysis.
 */
export declare class Extraction extends SpeakeasyBase {
    /**
     * The structure holding all the information returned by AnalyzeExpense
     */
    expenseDocument?: ExpenseDocument;
    /**
     * The structure that lists each document processed in an AnalyzeID operation.
     */
    identityDocument?: IdentityDocument;
    lendingDocument?: LendingDocument;
}
