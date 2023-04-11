import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
/**
 * Success
 */
export declare class ListLoggingConfigurationsResponse extends SpeakeasyBase {
    loggingConfigurations?: LoggingConfiguration[];
    nextMarker?: string;
}
