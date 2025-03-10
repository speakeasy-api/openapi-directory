/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Field } from "./field";
import { Expose, Type } from "class-transformer";

/**
 * The response elements represent the results of an update.
 */
export class UpdateResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Field })
  @Expose({ name: "generatedFields" })
  @Type(() => Field)
  generatedFields?: Field[];
}
