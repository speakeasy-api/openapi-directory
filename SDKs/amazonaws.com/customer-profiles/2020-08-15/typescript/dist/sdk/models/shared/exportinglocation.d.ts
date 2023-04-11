import { SpeakeasyBase } from "../../../internal/utils";
import { S3ExportingLocation } from "./s3exportinglocation";
/**
 * The S3 location where Identity Resolution Jobs write result files.
 */
export declare class ExportingLocation extends SpeakeasyBase {
    s3Exporting?: S3ExportingLocation;
}
