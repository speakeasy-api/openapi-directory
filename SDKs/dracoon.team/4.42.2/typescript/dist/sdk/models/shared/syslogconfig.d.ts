import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Protocol to connect to syslog server
 */
export declare enum SyslogConfigProtocolEnum {
    Tcp = "TCP",
    Udp = "UDP"
}
/**
 * Syslog settings
 */
export declare class SyslogConfig extends SpeakeasyBase {
    /**
     * Is syslog enabled?
     */
    enabled?: boolean;
    /**
     * Syslog server (IP or FQDN)
     */
    host?: string;
    /**
     * Determines whether user’s IP address is logged.
     */
    logIpEnabled?: boolean;
    /**
     * Syslog server port
     */
    port?: number;
    /**
     * Protocol to connect to syslog server
     */
    protocol?: SyslogConfigProtocolEnum;
}
