/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Form } from "./form";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class UpdateFormResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "entity" })
  @Type(() => Form)
  entity?: Form;
}
