import { SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";
import { InputFormatEnum } from "./inputformatenum";
import { S3BucketSource } from "./s3bucketsource";
/**
 *  Summary information about the source file for the import.
 */
export declare class ImportSummary extends SpeakeasyBase {
    cloudWatchLogGroupArn?: string;
    endTime?: Date;
    importArn?: string;
    importStatus?: ImportStatusEnum;
    inputFormat?: InputFormatEnum;
    s3BucketSource?: S3BucketSource;
    startTime?: Date;
    tableArn?: string;
}
