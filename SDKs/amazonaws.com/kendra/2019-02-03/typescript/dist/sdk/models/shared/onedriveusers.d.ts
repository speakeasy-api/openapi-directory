import { SpeakeasyBase } from "../../../internal/utils";
import { S3Path } from "./s3path";
/**
 * User accounts whose documents should be indexed.
 */
export declare class OneDriveUsers extends SpeakeasyBase {
    oneDriveUserList?: string[];
    oneDriveUserS3Path?: S3Path;
}
