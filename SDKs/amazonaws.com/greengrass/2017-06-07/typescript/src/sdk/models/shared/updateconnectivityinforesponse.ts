/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Success
 */
export class UpdateConnectivityInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Version" })
  version?: string;
}
