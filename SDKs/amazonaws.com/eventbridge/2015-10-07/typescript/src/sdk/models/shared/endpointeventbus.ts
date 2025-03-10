/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The event buses the endpoint is associated with.
 */
export class EndpointEventBus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "EventBusArn" })
  eventBusArn: string;
}
