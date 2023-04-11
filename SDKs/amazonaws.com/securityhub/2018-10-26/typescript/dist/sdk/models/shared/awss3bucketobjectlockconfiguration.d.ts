import { SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketObjectLockConfigurationRuleDetails } from "./awss3bucketobjectlockconfigurationruledetails";
/**
 *  The container element for S3 Object Lock configuration parameters. In Amazon S3, Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely.
 */
export declare class AwsS3BucketObjectLockConfiguration extends SpeakeasyBase {
    objectLockEnabled?: string;
    rule?: AwsS3BucketObjectLockConfigurationRuleDetails;
}
