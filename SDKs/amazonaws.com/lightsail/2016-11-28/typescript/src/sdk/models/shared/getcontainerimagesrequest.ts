/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class GetContainerImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "serviceName" })
  serviceName: string;
}
