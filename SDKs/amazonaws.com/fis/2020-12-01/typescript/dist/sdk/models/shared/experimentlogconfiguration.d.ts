import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentCloudWatchLogsLogConfiguration } from "./experimentcloudwatchlogslogconfiguration";
import { ExperimentS3LogConfiguration } from "./experiments3logconfiguration";
/**
 * Describes the configuration for experiment logging.
 */
export declare class ExperimentLogConfiguration extends SpeakeasyBase {
    cloudWatchLogsConfiguration?: ExperimentCloudWatchLogsLogConfiguration;
    logSchemaVersion?: number;
    s3Configuration?: ExperimentS3LogConfiguration;
}
