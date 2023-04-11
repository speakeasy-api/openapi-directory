import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualitySummary } from "./dataqualitysummary";
import { IngestedFilesSummary } from "./ingestedfilessummary";
import { IngestionInputConfiguration } from "./ingestioninputconfiguration";
import { IngestionJobStatusEnum } from "./ingestionjobstatusenum";
/**
 * Success
 */
export declare class DescribeDataIngestionJobResponse extends SpeakeasyBase {
    createdAt?: Date;
    dataEndTime?: Date;
    dataQualitySummary?: DataQualitySummary;
    dataStartTime?: Date;
    datasetArn?: string;
    failedReason?: string;
    ingestedDataSize?: number;
    /**
     * Gives statistics about how many files have been ingested, and which files have not been ingested, for a particular ingestion job.
     */
    ingestedFilesSummary?: IngestedFilesSummary;
    ingestionInputConfiguration?: IngestionInputConfiguration;
    jobId?: string;
    roleArn?: string;
    status?: IngestionJobStatusEnum;
    statusDetail?: string;
}
