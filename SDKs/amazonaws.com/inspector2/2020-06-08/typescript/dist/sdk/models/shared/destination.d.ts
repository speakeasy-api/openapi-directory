import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains details of the Amazon S3 bucket and KMS key used to export findings.
 */
export declare class Destination extends SpeakeasyBase {
    bucketName: string;
    keyPrefix?: string;
    kmsKeyArn: string;
}
