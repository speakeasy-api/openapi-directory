import { SpeakeasyBase } from "../../../internal/utils";
import { LinuxIpTypeEnum } from "./linuxiptypeenum";
import { LinuxSite } from "./linuxsite";
/**
 * Success
 */
export declare class LinuxHostingDetail extends SpeakeasyBase {
    /**
     * Used webspace size in MB
     */
    actualSize?: number;
    /**
     * Domain name for the Linux hosting account.
     */
    domainName?: string;
    /**
     * Indicates whether ftp is enabled for the hosting account.
     */
    ftpEnabled?: boolean;
    /**
     * Ftp username
     */
    ftpUsername?: string;
    /**
     * Linux hosting IP address
     */
    ip?: string;
    /**
     * Type of the hosting IP address (dedicated or shared)
     */
    ipType?: LinuxIpTypeEnum;
    /**
     * Maximum webspace size in MB
     */
    maxSize?: number;
    /**
     * Maximum webspace size in MB<br />
     *
     * @remarks
     * Use max_size instead.
     */
    maxWebspaceSize?: number;
    /**
     * A list of mysql databases linked to the hosting account.<br />
     *
     * @remarks
     * Details of the database can be read using the mysql database detail.
     */
    mysqlDatabaseNames?: string[];
    /**
     * The active php version for the hosting account.
     */
    phpVersion?: string;
    /**
     * Id of Linux hosting service package.
     */
    servicepackId?: number;
    /**
     * A list of websites on the hosting account.
     */
    sites?: LinuxSite[];
    /**
     * Ssh host of the linux hosting account
     */
    sshHost?: string;
    /**
     * Ssh username
     */
    sshUsername?: string;
    /**
     * Used webspace size in MB<br />
     *
     * @remarks
     * Use actual_size instead.
     */
    webspaceUsage?: number;
}
