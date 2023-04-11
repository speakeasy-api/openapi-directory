import { SpeakeasyBase } from "../../../internal/utils";
import { S3Configuration } from "./s3configuration";
/**
 * The location to write error reports for records rejected, asynchronously, during magnetic store writes.
 */
export declare class MagneticStoreRejectedDataLocation extends SpeakeasyBase {
    s3Configuration?: S3Configuration;
}
