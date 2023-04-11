import { SpeakeasyBase } from "../../../internal/utils";
import { ExportSourceTypeEnum } from "./exportsourcetypeenum";
/**
 * <p>Contains the details of a snapshot or cluster export to Amazon S3.</p> <p>This data type is used as a response element in the <code>DescribeExportTasks</code> action.</p>
 */
export declare class ExportTasksList extends SpeakeasyBase {
    exportOnly?: string[];
    exportTaskIdentifier?: string;
    failureCause?: string;
    iamRoleArn?: string;
    kmsKeyId?: string;
    percentProgress?: number;
    s3Bucket?: string;
    s3Prefix?: string;
    snapshotTime?: Date;
    sourceArn?: string;
    sourceType?: ExportSourceTypeEnum;
    status?: string;
    taskEndTime?: Date;
    taskStartTime?: Date;
    totalExtractedDataInGB?: number;
    warningMessage?: string;
}
