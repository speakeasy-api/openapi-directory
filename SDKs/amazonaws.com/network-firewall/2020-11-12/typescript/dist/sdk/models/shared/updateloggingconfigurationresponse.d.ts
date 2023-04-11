import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
/**
 * Success
 */
export declare class UpdateLoggingConfigurationResponse extends SpeakeasyBase {
    firewallArn?: string;
    firewallName?: string;
    /**
     * Defines how Network Firewall performs logging for a <a>Firewall</a>.
     */
    loggingConfiguration?: LoggingConfiguration;
}
