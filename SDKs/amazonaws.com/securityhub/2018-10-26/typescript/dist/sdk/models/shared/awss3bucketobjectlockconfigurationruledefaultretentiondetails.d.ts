import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The default S3 Object Lock retention mode and period that you want to apply to new objects placed in the specified Amazon S3 bucket.
 */
export declare class AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails extends SpeakeasyBase {
    days?: number;
    mode?: string;
    years?: number;
}
