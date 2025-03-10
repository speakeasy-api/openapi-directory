import { SpeakeasyBase } from "../../../internal/utils";
import { S3AclOptionEnum } from "./s3acloptionenum";
/**
 * Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. When Athena stores query results in Amazon S3, the canned ACL is set with the <code>x-amz-acl</code> request header. For more information about S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html#object-ownership-overview">Object Ownership settings</a> in the <i>Amazon S3 User Guide</i>.
 */
export declare class AclConfiguration extends SpeakeasyBase {
    s3AclOption: S3AclOptionEnum;
}
