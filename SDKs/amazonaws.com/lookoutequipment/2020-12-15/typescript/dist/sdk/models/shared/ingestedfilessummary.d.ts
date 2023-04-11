import { SpeakeasyBase } from "../../../internal/utils";
import { S3Object } from "./s3object";
/**
 * Gives statistics about how many files have been ingested, and which files have not been ingested, for a particular ingestion job.
 */
export declare class IngestedFilesSummary extends SpeakeasyBase {
    discardedFiles?: S3Object[];
    ingestedNumberOfFiles: number;
    totalNumberOfFiles: number;
}
