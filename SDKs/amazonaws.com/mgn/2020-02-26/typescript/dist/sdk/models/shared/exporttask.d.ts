import { SpeakeasyBase } from "../../../internal/utils";
import { ExportStatusEnum } from "./exportstatusenum";
import { ExportTaskSummary } from "./exporttasksummary";
/**
 * Export task.
 */
export declare class ExportTask extends SpeakeasyBase {
    creationDateTime?: string;
    endDateTime?: string;
    exportID?: string;
    progressPercentage?: number;
    s3Bucket?: string;
    s3BucketOwner?: string;
    s3Key?: string;
    status?: ExportStatusEnum;
    summary?: ExportTaskSummary;
}
