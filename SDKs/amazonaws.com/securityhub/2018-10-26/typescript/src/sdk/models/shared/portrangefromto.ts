/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A range of ports.
 */
export class PortRangeFromTo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "From" })
  from?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "To" })
  to?: number;
}
