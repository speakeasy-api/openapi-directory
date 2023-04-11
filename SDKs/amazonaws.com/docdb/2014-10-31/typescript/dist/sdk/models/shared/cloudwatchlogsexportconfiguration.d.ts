import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs are exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the engine that is being used.</p>
 */
export declare class CloudwatchLogsExportConfiguration extends SpeakeasyBase {
    disableLogTypes?: string[];
    enableLogTypes?: string[];
}
