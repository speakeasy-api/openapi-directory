import { SpeakeasyBase } from "../../../internal/utils";
import { AllowsUnencryptedObjectUploadsEnum } from "./allowsunencryptedobjectuploadsenum";
import { BucketPublicAccess } from "./bucketpublicaccess";
import { KeyValuePair } from "./keyvaluepair";
import { S3BucketOwner } from "./s3bucketowner";
import { ServerSideEncryption } from "./serversideencryption";
/**
 * Provides information about the S3 bucket that a finding applies to.
 */
export declare class S3Bucket extends SpeakeasyBase {
    allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploadsEnum;
    arn?: string;
    createdAt?: Date;
    defaultServerSideEncryption?: ServerSideEncryption;
    name?: string;
    owner?: S3BucketOwner;
    publicAccess?: BucketPublicAccess;
    tags?: KeyValuePair[];
}
