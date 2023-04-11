import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentMetadata } from "./documentmetadata";
import { JobStatusEnum } from "./jobstatusenum";
import { LendingSummary } from "./lendingsummary";
import { Warning } from "./warning";
/**
 * Success
 */
export declare class GetLendingAnalysisSummaryResponse extends SpeakeasyBase {
    analyzeLendingModelVersion?: string;
    /**
     * Information about the input document.
     */
    documentMetadata?: DocumentMetadata;
    jobStatus?: JobStatusEnum;
    statusMessage?: string;
    summary?: LendingSummary;
    warnings?: Warning[];
}
