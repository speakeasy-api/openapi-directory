import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentMetadata } from "./documentmetadata";
import { ExpenseDocument } from "./expensedocument";
import { JobStatusEnum } from "./jobstatusenum";
import { Warning } from "./warning";
/**
 * Success
 */
export declare class GetExpenseAnalysisResponse extends SpeakeasyBase {
    analyzeExpenseModelVersion?: string;
    documentMetadata?: DocumentMetadata;
    expenseDocuments?: ExpenseDocument[];
    jobStatus?: JobStatusEnum;
    nextToken?: string;
    statusMessage?: string;
    warnings?: Warning[];
}
