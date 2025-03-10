/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The public key used for setting user Codespaces' Secrets.
 */
export class CodespacesUserPublicKey extends SpeakeasyBase {
  /**
   * The Base64 encoded public key.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key: string;

  /**
   * The identifier for the key.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "key_id" })
  keyId: string;
}
