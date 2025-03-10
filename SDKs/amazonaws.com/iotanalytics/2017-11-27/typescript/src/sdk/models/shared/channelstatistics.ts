/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EstimatedResourceSize } from "./estimatedresourcesize";
import { Expose, Type } from "class-transformer";

/**
 * Statistics information about the channel.
 */
export class ChannelStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "size" })
  @Type(() => EstimatedResourceSize)
  size?: EstimatedResourceSize;
}
