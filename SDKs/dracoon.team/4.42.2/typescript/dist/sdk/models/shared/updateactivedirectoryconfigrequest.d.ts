import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating an Active Directory configuration
 */
export declare class UpdateActiveDirectoryConfigRequest extends SpeakeasyBase {
    /**
     * If `userImport` is set to `true`,
     *
     * @remarks
     *
     * the user must be member of this Active Directory group to receive a newly created DRACOON account.
     */
    adExportGroup?: string;
    /**
     * Unique name for an Active Directory configuration
     */
    alias?: string;
    /**
     * DEPRECATED, will be ignored
     *
     * @remarks
     *
     * Determines whether a room is created for each user that is created by automatic import (like a home folder).
     *
     * Room's name will equal the user's login name.
     */
    createHomeFolder?: boolean;
    /**
     * DEPRECATED, will be ignored
     *
     * @remarks
     *
     * ID of the room in which the individual rooms for users will be created.
     */
    homeFolderParent?: number;
    /**
     * Search scope of Active Directory; only users below this node can log on.
     */
    ldapUsersDomain?: string;
    /**
     * User group that is assigned to users who are created by automatic import.
     *
     * @remarks
     *
     * Reset with `0`
     */
    sdsImportGroup?: number;
    /**
     * Distinguished Name (DN) of Active Directory administrative account
     */
    serverAdminName?: string;
    /**
     * Password of Active Directory administrative account
     */
    serverAdminPassword?: string;
    /**
     * IPv4 or IPv6 address or host name
     */
    serverIp?: string;
    /**
     * Port
     */
    serverPort?: number;
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
    /**
     * Name of Active Directory attribute that is used as login name.
     */
    userFilter?: string;
    /**
     * Determines if a DRACOON account is automatically created for a new user
     *
     * @remarks
     *
     * who successfully logs on with his / her AD / IDP account.
     */
    userImport?: boolean;
}
