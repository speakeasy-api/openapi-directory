import { SpeakeasyBase } from "../../../internal/utils";
import { StorageClassEnum } from "./storageclassenum";
/**
 * Retention settings for the destination Amazon S3 buckets in Amazon Security Lake.
 */
export declare class RetentionSetting extends SpeakeasyBase {
    retentionPeriod?: number;
    storageClass?: StorageClassEnum;
}
