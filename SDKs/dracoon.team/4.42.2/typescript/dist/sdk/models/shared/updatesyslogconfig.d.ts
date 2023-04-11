import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Protocol to connect to syslog server
 */
export declare enum UpdateSyslogConfigProtocolEnum {
    Tcp = "TCP",
    Udp = "UDP"
}
/**
 * Request model for updating syslog settings
 */
export declare class UpdateSyslogConfig extends SpeakeasyBase {
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
    protocol?: UpdateSyslogConfigProtocolEnum;
}
