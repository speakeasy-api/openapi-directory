/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Request model for creating an Active Directory configuration
 */
export class CreateActiveDirectoryConfigRequest extends SpeakeasyBase {
  /**
   * If `userImport` is set to `true`,
   *
   * @remarks
   *
   * the user must be member of this Active Directory group to receive a newly created DRACOON account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "adExportGroup" })
  adExportGroup?: string;

  /**
   * Unique name for an Active Directory configuration
   */
  @SpeakeasyMetadata()
  @Expose({ name: "alias" })
  alias: string;

  /**
   * DEPRECATED, will be ignored
   *
   * @remarks
   *
   * Determines whether a room is created for each user that is created by automatic import (like a home folder).
   *
   * Room's name will equal the user's login name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createHomeFolder" })
  createHomeFolder?: boolean;

  /**
   * DEPRECATED, will be ignored
   *
   * @remarks
   *
   * ID of the room in which the individual rooms for users will be created.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "homeFolderParent" })
  homeFolderParent?: number;

  /**
   * Search scope of Active Directory; only users below this node can log on.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ldapUsersDomain" })
  ldapUsersDomain: string;

  /**
   * User group that is assigned to users who are created by automatic import.
   *
   * @remarks
   *
   * Reset with `0`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sdsImportGroup" })
  sdsImportGroup?: number;

  /**
   * Distinguished Name (DN) of Active Directory administrative account
   */
  @SpeakeasyMetadata()
  @Expose({ name: "serverAdminName" })
  serverAdminName: string;

  /**
   * Password of Active Directory administrative account
   */
  @SpeakeasyMetadata()
  @Expose({ name: "serverAdminPassword" })
  serverAdminPassword: string;

  /**
   * IPv4 or IPv6 address or host name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "serverIp" })
  serverIp: string;

  /**
   * Port
   */
  @SpeakeasyMetadata()
  @Expose({ name: "serverPort" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "sslFingerPrint" })
  sslFingerPrint?: string;

  /**
   * Determines whether LDAPS should be used instead of plain LDAP.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "useLdaps" })
  useLdaps?: boolean;

  /**
   * Name of Active Directory attribute that is used as login name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "userFilter" })
  userFilter: string;

  /**
   * Determines if a DRACOON account is automatically created for a new user
   *
   * @remarks
   *
   * who successfully logs on with his / her AD / IDP account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "userImport" })
  userImport?: boolean;
}
