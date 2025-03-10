/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Provides details about the configuration for node-to-node encryption.
 */
export class AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Enabled" })
  enabled?: boolean;
}
