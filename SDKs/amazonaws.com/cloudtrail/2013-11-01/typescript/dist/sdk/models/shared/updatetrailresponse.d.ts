import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
 */
export declare class UpdateTrailResponse extends SpeakeasyBase {
    cloudWatchLogsLogGroupArn?: string;
    cloudWatchLogsRoleArn?: string;
    includeGlobalServiceEvents?: boolean;
    isMultiRegionTrail?: boolean;
    isOrganizationTrail?: boolean;
    kmsKeyId?: string;
    logFileValidationEnabled?: boolean;
    name?: string;
    s3BucketName?: string;
    s3KeyPrefix?: string;
    snsTopicARN?: string;
    snsTopicName?: string;
    trailARN?: string;
}
