import { SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";
import { ImportTaskSummary } from "./importtasksummary";
import { S3BucketSource } from "./s3bucketsource";
/**
 * Import task.
 */
export declare class ImportTask extends SpeakeasyBase {
    creationDateTime?: string;
    endDateTime?: string;
    importID?: string;
    progressPercentage?: number;
    s3BucketSource?: S3BucketSource;
    status?: ImportStatusEnum;
    summary?: ImportTaskSummary;
}
