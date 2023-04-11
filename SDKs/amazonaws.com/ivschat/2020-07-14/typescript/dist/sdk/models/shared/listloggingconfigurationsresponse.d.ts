import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfigurationSummary } from "./loggingconfigurationsummary";
/**
 * Success
 */
export declare class ListLoggingConfigurationsResponse extends SpeakeasyBase {
    loggingConfigurations: LoggingConfigurationSummary[];
    nextToken?: string;
}
