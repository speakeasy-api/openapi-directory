/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Describes a user's SSH information.
 */
export class UserProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "AllowSelfManagement" })
  allowSelfManagement?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "IamUserArn" })
  iamUserArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "SshPublicKey" })
  sshPublicKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "SshUsername" })
  sshUsername?: string;
}
