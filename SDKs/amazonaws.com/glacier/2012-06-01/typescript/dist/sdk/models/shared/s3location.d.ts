import { SpeakeasyBase } from "../../../internal/utils";
import { CannedACLEnum } from "./cannedaclenum";
import { Encryption } from "./encryption";
import { Grant } from "./grant";
import { StorageClassEnum } from "./storageclassenum";
/**
 * Contains information about the location in Amazon S3 where the select job results are stored.
 */
export declare class S3Location extends SpeakeasyBase {
    accessControlList?: Grant[];
    bucketName?: string;
    cannedACL?: CannedACLEnum;
    encryption?: Encryption;
    prefix?: string;
    storageClass?: StorageClassEnum;
    tagging?: Record<string, string>;
    userMetadata?: Record<string, string>;
}
