import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentMetadata } from "./documentmetadata";
import { ExpenseDocument } from "./expensedocument";
/**
 * Success
 */
export declare class AnalyzeExpenseResponse extends SpeakeasyBase {
    /**
     * Information about the input document.
     */
    documentMetadata?: DocumentMetadata;
    expenseDocuments?: ExpenseDocument[];
}
