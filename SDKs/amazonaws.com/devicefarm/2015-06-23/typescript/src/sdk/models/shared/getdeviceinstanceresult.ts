/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DeviceInstance } from "./deviceinstance";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class GetDeviceInstanceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "deviceInstance" })
  @Type(() => DeviceInstance)
  deviceInstance?: DeviceInstance;
}
