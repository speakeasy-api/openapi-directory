/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export enum VaultTypeEnum {
  UserCreated = "USER_CREATED",
  Personal = "PERSONAL",
  Everyone = "EVERYONE",
  Transfer = "TRANSFER",
}

/**
 * OK
 */
export class Vault extends SpeakeasyBase {
  /**
   * The vault version
   */
  @SpeakeasyMetadata()
  @Expose({ name: "attributeVersion" })
  attributeVersion?: number;

  /**
   * The version of the vault contents
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contentVersion" })
  contentVersion?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Number of active items in the vault
   */
  @SpeakeasyMetadata()
  @Expose({ name: "items" })
  items?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: VaultTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;
}
