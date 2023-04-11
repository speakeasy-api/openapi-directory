import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the location of an application's code stored in an S3 bucket.
 */
export declare class S3ApplicationCodeLocationDescription extends SpeakeasyBase {
    bucketARN: string;
    fileKey: string;
    objectVersion?: string;
}
