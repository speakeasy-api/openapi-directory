import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List all possible public IP addresses
 */
export declare class PublicIpAddressEntity extends SpeakeasyBase {
    ftpEnabled?: boolean;
    /**
     * The public IP address.
     */
    ipAddress?: string;
    /**
     * The name of the frontend server.
     */
    serverName?: string;
    sftpEnabled?: boolean;
}
