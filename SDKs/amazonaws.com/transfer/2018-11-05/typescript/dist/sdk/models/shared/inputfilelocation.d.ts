import { SpeakeasyBase } from "../../../internal/utils";
import { EfsFileLocation } from "./efsfilelocation";
import { S3InputFileLocation } from "./s3inputfilelocation";
/**
 * Specifies the location for the file that's being processed.
 */
export declare class InputFileLocation extends SpeakeasyBase {
    efsFileLocation?: EfsFileLocation;
    s3FileLocation?: S3InputFileLocation;
}
