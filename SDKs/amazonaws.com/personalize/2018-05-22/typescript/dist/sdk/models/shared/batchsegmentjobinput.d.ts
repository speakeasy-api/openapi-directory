import { SpeakeasyBase } from "../../../internal/utils";
import { S3DataConfig } from "./s3dataconfig";
/**
 * The input configuration of a batch segment job.
 */
export declare class BatchSegmentJobInput extends SpeakeasyBase {
    /**
     * The configuration details of an Amazon S3 input or output bucket.
     */
    s3DataSource: S3DataConfig;
}
