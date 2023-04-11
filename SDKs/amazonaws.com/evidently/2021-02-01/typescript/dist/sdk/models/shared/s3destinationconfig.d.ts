import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If the project stores evaluation events in an Amazon S3 bucket, this structure stores the bucket name and bucket prefix.
 */
export declare class S3DestinationConfig extends SpeakeasyBase {
    bucket?: string;
    prefix?: string;
}
