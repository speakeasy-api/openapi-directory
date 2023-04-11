import { SpeakeasyBase } from "../../../internal/utils";
import { ModuleLoggingConfiguration } from "./moduleloggingconfiguration";
/**
 * Describes the Apache Airflow log types that are published to CloudWatch Logs.
 */
export declare class LoggingConfiguration extends SpeakeasyBase {
    dagProcessingLogs?: ModuleLoggingConfiguration;
    schedulerLogs?: ModuleLoggingConfiguration;
    taskLogs?: ModuleLoggingConfiguration;
    webserverLogs?: ModuleLoggingConfiguration;
    workerLogs?: ModuleLoggingConfiguration;
}
