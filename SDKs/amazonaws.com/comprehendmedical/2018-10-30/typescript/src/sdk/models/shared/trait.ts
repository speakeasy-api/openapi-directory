/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttributeNameEnum } from "./attributenameenum";
import { Expose } from "class-transformer";

/**
 *  Provides contextual information about the extracted entity.
 */
export class Trait extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: AttributeNameEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "Score" })
  score?: number;
}
