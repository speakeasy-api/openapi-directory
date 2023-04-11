import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTemplateCloudWatchLogsLogConfiguration } from "./experimenttemplatecloudwatchlogslogconfiguration";
import { ExperimentTemplateS3LogConfiguration } from "./experimenttemplates3logconfiguration";
/**
 * Describes the configuration for experiment logging.
 */
export declare class ExperimentTemplateLogConfiguration extends SpeakeasyBase {
    cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfiguration;
    logSchemaVersion?: number;
    s3Configuration?: ExperimentTemplateS3LogConfiguration;
}
