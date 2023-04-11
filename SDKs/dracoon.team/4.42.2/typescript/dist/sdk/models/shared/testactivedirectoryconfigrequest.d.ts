import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for testing connection for Active Directory configuration
 */
export declare class TestActiveDirectoryConfigRequest extends SpeakeasyBase {
    /**
     * Search scope of Active Directory; only users below this node can log on.
     */
    ldapUsersDomain: string;
    /**
     * Distinguished Name (DN) of Active Directory administrative account
     */
    serverAdminName: string;
    /**
     * Password of Active Directory administrative account
     */
    serverAdminPassword: string;
    /**
     * IPv4 or IPv6 address or host name
     */
    serverIp: string;
    /**
     * Port
     */
    serverPort: number;
    /**
     * SSL finger print of Active Directory server.
     *
     * @remarks
     *
     * Mandatory for LDAPS connections.
     *
     * Format: `Algorithm/Fingerprint`
     */
    sslFingerPrint?: string;
    /**
     * Determines whether LDAPS should be used instead of plain LDAP.
     */
    useLdaps?: boolean;
}
