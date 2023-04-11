import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationPool } from "./applicationpool";
import { WindowsIpTypeEnum } from "./windowsiptypeenum";
import { WindowsSite } from "./windowssite";
/**
 * Success
 */
export declare class WindowsHostingDetail extends SpeakeasyBase {
    /**
     * Used webspace size in MB
     */
    actualSize?: number;
    /**
     * The application pool for the hosting account.
     */
    applicationPool?: ApplicationPool;
    /**
     * Domain name for the Windows hosting account.
     */
    domainName?: string;
    /**
     * Ftp username
     */
    ftpUsername?: string;
    /**
     * Windows hosting IP address
     */
    ip?: string;
    /**
     * Type of the hosting IP address (dedicated or shared)
     */
    ipType?: WindowsIpTypeEnum;
    /**
     * Maximum webspace size in MB
     */
    maxSize?: number;
    /**
     * A list of mssql databases linked to the hosting account.<br />
     */
    mssqlDatabaseNames?: string[];
    /**
     * Id of Windows hosting service package.
     */
    servicepackId?: number;
    /**
     * A list of websites on the hosting account.
     */
    sites?: WindowsSite[];
}
