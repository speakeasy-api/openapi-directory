import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for Amazon S3 as a logging destination.
 */
export declare class VerifiedAccessLogS3DestinationOptions extends SpeakeasyBase {
    bucketName?: string;
    bucketOwner?: string;
    enabled: boolean;
    prefix?: string;
}
