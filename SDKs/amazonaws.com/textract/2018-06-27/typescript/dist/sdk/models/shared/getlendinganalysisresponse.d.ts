import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentMetadata } from "./documentmetadata";
import { JobStatusEnum } from "./jobstatusenum";
import { LendingResult } from "./lendingresult";
import { Warning } from "./warning";
/**
 * Success
 */
export declare class GetLendingAnalysisResponse extends SpeakeasyBase {
    analyzeLendingModelVersion?: string;
    /**
     * Information about the input document.
     */
    documentMetadata?: DocumentMetadata;
    jobStatus?: JobStatusEnum;
    nextToken?: string;
    results?: LendingResult[];
    statusMessage?: string;
    warnings?: Warning[];
}
