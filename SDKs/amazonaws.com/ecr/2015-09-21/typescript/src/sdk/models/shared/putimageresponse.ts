/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Image } from "./image";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class PutImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "image" })
  @Type(() => Image)
  image?: Image;
}
