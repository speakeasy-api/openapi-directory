import { SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails } from "./awss3bucketobjectlockconfigurationruledefaultretentiondetails";
/**
 *  Specifies the S3 Object Lock rule for the specified object. In Amazon S3, Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely.
 */
export declare class AwsS3BucketObjectLockConfigurationRuleDetails extends SpeakeasyBase {
    defaultRetention?: AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails;
}
