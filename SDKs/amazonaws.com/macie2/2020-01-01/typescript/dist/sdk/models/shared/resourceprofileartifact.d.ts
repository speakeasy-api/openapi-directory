import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about an S3 object that Amazon Macie selected for analysis while performing automated sensitive data discovery for an S3 bucket, and the status and results of the analysis. This information is available only if automated sensitive data discovery is currently enabled for your account.
 */
export declare class ResourceProfileArtifact extends SpeakeasyBase {
    arn: string;
    classificationResultStatus: string;
    sensitive?: boolean;
}
