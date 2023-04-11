import { SpeakeasyBase } from "../../../internal/utils";
import { BucketCountByEffectivePermission } from "./bucketcountbyeffectivepermission";
import { BucketCountByEncryptionType } from "./bucketcountbyencryptiontype";
import { BucketCountBySharedAccessType } from "./bucketcountbysharedaccesstype";
import { BucketCountPolicyAllowsUnencryptedObjectUploads } from "./bucketcountpolicyallowsunencryptedobjectuploads";
import { BucketStatisticsBySensitivity } from "./bucketstatisticsbysensitivity";
import { ObjectLevelStatistics } from "./objectlevelstatistics";
/**
 * Success
 */
export declare class GetBucketStatisticsResponse extends SpeakeasyBase {
    bucketCount?: number;
    bucketCountByEffectivePermission?: BucketCountByEffectivePermission;
    bucketCountByEncryptionType?: BucketCountByEncryptionType;
    bucketCountByObjectEncryptionRequirement?: BucketCountPolicyAllowsUnencryptedObjectUploads;
    bucketCountBySharedAccessType?: BucketCountBySharedAccessType;
    bucketStatisticsBySensitivity?: BucketStatisticsBySensitivity;
    classifiableObjectCount?: number;
    classifiableSizeInBytes?: number;
    lastUpdated?: Date;
    objectCount?: number;
    sizeInBytes?: number;
    sizeInBytesCompressed?: number;
    unclassifiableObjectCount?: ObjectLevelStatistics;
    unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
}
