import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the configuration for experiment logging to Amazon S3.
 */
export declare class ExperimentS3LogConfiguration extends SpeakeasyBase {
    bucketName?: string;
    prefix?: string;
}
