import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfigurationStatusCodeEnum } from "./loggingconfigurationstatuscodeenum";
/**
 * Represents the status of a logging configuration.
 */
export declare class LoggingConfigurationStatus extends SpeakeasyBase {
    statusCode: LoggingConfigurationStatusCodeEnum;
    statusReason?: string;
}
