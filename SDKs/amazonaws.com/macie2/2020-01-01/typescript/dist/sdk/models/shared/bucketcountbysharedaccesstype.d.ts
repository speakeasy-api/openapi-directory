import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the number of S3 buckets that are or aren't shared with other Amazon Web Services accounts, Amazon CloudFront origin access identities (OAIs), or CloudFront origin access controls (OACs). In this data, an <i>Amazon Macie organization</i> is defined as a set of Macie accounts that are centrally managed as a group of related accounts through Organizations or by Macie invitation.
 */
export declare class BucketCountBySharedAccessType extends SpeakeasyBase {
    external?: number;
    internal?: number;
    notShared?: number;
    unknown?: number;
}
