import { SpeakeasyBase } from "../../../internal/utils";
import { S3ClassificationScopeExclusion } from "./s3classificationscopeexclusion";
/**
 * Specifies the S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account.
 */
export declare class S3ClassificationScope extends SpeakeasyBase {
    excludes: S3ClassificationScopeExclusion;
}
