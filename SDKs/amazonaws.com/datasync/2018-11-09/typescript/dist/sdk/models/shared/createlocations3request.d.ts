import { SpeakeasyBase } from "../../../internal/utils";
import { S3Config } from "./s3config";
import { S3StorageClassEnum } from "./s3storageclassenum";
import { TagListEntry } from "./taglistentry";
/**
 * CreateLocationS3Request
 */
export declare class CreateLocationS3Request extends SpeakeasyBase {
    agentArns?: string[];
    s3BucketArn: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>DataSync User Guide</i>.</p>
     */
    s3Config: S3Config;
    s3StorageClass?: S3StorageClassEnum;
    subdirectory?: string;
    tags?: TagListEntry[];
}
