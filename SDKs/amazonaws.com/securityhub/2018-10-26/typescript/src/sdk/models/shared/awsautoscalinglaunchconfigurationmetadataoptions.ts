/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The metadata options for the instances.
 */
export class AwsAutoScalingLaunchConfigurationMetadataOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "HttpEndpoint" })
  httpEndpoint?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "HttpPutResponseHopLimit" })
  httpPutResponseHopLimit?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "HttpTokens" })
  httpTokens?: string;
}
