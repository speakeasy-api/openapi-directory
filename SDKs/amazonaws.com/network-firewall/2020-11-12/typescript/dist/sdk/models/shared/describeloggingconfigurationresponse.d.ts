import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
/**
 * Success
 */
export declare class DescribeLoggingConfigurationResponse extends SpeakeasyBase {
    firewallArn?: string;
    /**
     * Defines how Network Firewall performs logging for a <a>Firewall</a>.
     */
    loggingConfiguration?: LoggingConfiguration;
}
