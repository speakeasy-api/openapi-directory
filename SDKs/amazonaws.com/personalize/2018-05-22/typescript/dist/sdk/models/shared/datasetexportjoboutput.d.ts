import { SpeakeasyBase } from "../../../internal/utils";
import { S3DataConfig } from "./s3dataconfig";
/**
 * The output configuration parameters of a dataset export job.
 */
export declare class DatasetExportJobOutput extends SpeakeasyBase {
    /**
     * The configuration details of an Amazon S3 input or output bucket.
     */
    s3DataDestination: S3DataConfig;
}
