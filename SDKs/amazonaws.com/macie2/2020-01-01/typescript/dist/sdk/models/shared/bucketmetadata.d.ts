import { SpeakeasyBase } from "../../../internal/utils";
import { AllowsUnencryptedObjectUploadsEnum } from "./allowsunencryptedobjectuploadsenum";
import { BucketMetadataErrorCodeEnum } from "./bucketmetadataerrorcodeenum";
import { BucketPublicAccess } from "./bucketpublicaccess";
import { BucketServerSideEncryption } from "./bucketserversideencryption";
import { JobDetails } from "./jobdetails";
import { KeyValuePair } from "./keyvaluepair";
import { ObjectCountByEncryptionType } from "./objectcountbyencryptiontype";
import { ObjectLevelStatistics } from "./objectlevelstatistics";
import { ReplicationDetails } from "./replicationdetails";
import { SharedAccessEnum } from "./sharedaccessenum";
/**
 * <p>Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes for your account. By default, object count and storage size values include data for object parts that are the result of incomplete multipart uploads. For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/monitoring-s3-how-it-works.html">How Macie monitors Amazon S3 data security</a> in the <i>Amazon Macie User Guide</i>.</p> <p>If an error occurs when Macie attempts to retrieve and process metadata from Amazon S3 for the bucket or the bucket's objects, the value for the versioning property is false and the value for most other properties is null. Key exceptions are accountId, bucketArn, bucketCreatedAt, bucketName, lastUpdated, and region. To identify the cause of the error, refer to the errorCode and errorMessage values.</p>
 */
export declare class BucketMetadata extends SpeakeasyBase {
    accountId?: string;
    allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploadsEnum;
    bucketArn?: string;
    bucketCreatedAt?: Date;
    bucketName?: string;
    classifiableObjectCount?: number;
    classifiableSizeInBytes?: number;
    errorCode?: BucketMetadataErrorCodeEnum;
    errorMessage?: string;
    jobDetails?: JobDetails;
    lastAutomatedDiscoveryTime?: Date;
    lastUpdated?: Date;
    objectCount?: number;
    objectCountByEncryptionType?: ObjectCountByEncryptionType;
    publicAccess?: BucketPublicAccess;
    region?: string;
    replicationDetails?: ReplicationDetails;
    sensitivityScore?: number;
    serverSideEncryption?: BucketServerSideEncryption;
    sharedAccess?: SharedAccessEnum;
    sizeInBytes?: number;
    sizeInBytesCompressed?: number;
    tags?: KeyValuePair[];
    unclassifiableObjectCount?: ObjectLevelStatistics;
    unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
    versioning?: boolean;
}
