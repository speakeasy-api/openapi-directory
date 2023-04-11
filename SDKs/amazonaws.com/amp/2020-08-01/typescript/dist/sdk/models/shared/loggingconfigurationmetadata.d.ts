import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfigurationStatus } from "./loggingconfigurationstatus";
/**
 * Represents the properties of a logging configuration metadata.
 */
export declare class LoggingConfigurationMetadata extends SpeakeasyBase {
    createdAt: Date;
    logGroupArn: string;
    modifiedAt: Date;
    status: LoggingConfigurationStatus;
    workspace: string;
}
