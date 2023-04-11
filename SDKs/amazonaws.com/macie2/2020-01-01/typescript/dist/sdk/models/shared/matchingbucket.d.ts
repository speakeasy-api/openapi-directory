import { SpeakeasyBase } from "../../../internal/utils";
import { BucketMetadataErrorCodeEnum } from "./bucketmetadataerrorcodeenum";
import { JobDetails } from "./jobdetails";
import { ObjectCountByEncryptionType } from "./objectcountbyencryptiontype";
import { ObjectLevelStatistics } from "./objectlevelstatistics";
/**
 * <p>Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes for your account. By default, object count and storage size values include data for object parts that are the result of incomplete multipart uploads. For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/monitoring-s3-how-it-works.html">How Macie monitors Amazon S3 data security</a> in the <i>Amazon Macie User Guide</i>.</p> <p>If an error occurs when Macie attempts to retrieve and process information about the bucket or the bucket's objects, the value for most of these properties is null. Key exceptions are accountId and bucketName. To identify the cause of the error, refer to the errorCode and errorMessage values.</p>
 */
export declare class MatchingBucket extends SpeakeasyBase {
    accountId?: string;
    bucketName?: string;
    classifiableObjectCount?: number;
    classifiableSizeInBytes?: number;
    errorCode?: BucketMetadataErrorCodeEnum;
    errorMessage?: string;
    jobDetails?: JobDetails;
    lastAutomatedDiscoveryTime?: Date;
    objectCount?: number;
    objectCountByEncryptionType?: ObjectCountByEncryptionType;
    sensitivityScore?: number;
    sizeInBytes?: number;
    sizeInBytesCompressed?: number;
    unclassifiableObjectCount?: ObjectLevelStatistics;
    unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
}
