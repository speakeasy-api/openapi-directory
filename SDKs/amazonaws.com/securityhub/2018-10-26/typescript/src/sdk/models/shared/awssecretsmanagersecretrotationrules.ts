/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Defines the rotation schedule for the secret.
 */
export class AwsSecretsManagerSecretRotationRules extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "AutomaticallyAfterDays" })
  automaticallyAfterDays?: number;
}
