import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingLevelEnum } from "./logginglevelenum";
/**
 * Describes the Apache Airflow log details for the log type (e.g. <code>DagProcessingLogs</code>).
 */
export declare class ModuleLoggingConfiguration extends SpeakeasyBase {
    cloudWatchLogGroupArn?: string;
    enabled?: boolean;
    logLevel?: LoggingLevelEnum;
}
