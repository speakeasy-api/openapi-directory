import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingLevelEnum } from "./logginglevelenum";
/**
 * Enables the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) and defines the log level to send to CloudWatch Logs (e.g. <code>INFO</code>).
 */
export declare class ModuleLoggingConfigurationInput extends SpeakeasyBase {
    enabled: boolean;
    logLevel: LoggingLevelEnum;
}
