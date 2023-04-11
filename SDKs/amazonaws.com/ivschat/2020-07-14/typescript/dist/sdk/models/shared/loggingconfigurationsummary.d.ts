import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationConfiguration } from "./destinationconfiguration";
import { LoggingConfigurationStateEnum } from "./loggingconfigurationstateenum";
/**
 * Summary information about a logging configuration.
 */
export declare class LoggingConfigurationSummary extends SpeakeasyBase {
    arn?: string;
    createTime?: Date;
    destinationConfiguration?: DestinationConfiguration;
    id?: string;
    name?: string;
    state?: LoggingConfigurationStateEnum;
    tags?: Record<string, string>;
    updateTime?: Date;
}
