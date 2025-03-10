/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientDeviceTypeEnum } from "./clientdevicetypeenum";
import { Expose } from "class-transformer";

export class DeleteClientBrandingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Platforms" })
  platforms: ClientDeviceTypeEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "ResourceId" })
  resourceId: string;
}
