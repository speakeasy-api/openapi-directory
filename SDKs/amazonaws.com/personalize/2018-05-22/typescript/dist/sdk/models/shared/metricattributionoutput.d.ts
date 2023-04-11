import { SpeakeasyBase } from "../../../internal/utils";
import { S3DataConfig } from "./s3dataconfig";
/**
 * The output configuration details for a metric attribution.
 */
export declare class MetricAttributionOutput extends SpeakeasyBase {
    roleArn: string;
    /**
     * The configuration details of an Amazon S3 input or output bucket.
     */
    s3DataDestination?: S3DataConfig;
}
