/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
import { Expose, Type } from "class-transformer";

/**
 * Represents the output of a <a>DeleteObject</a> operation.
 */
export class BatchDeleteObject extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ObjectReference" })
  @Type(() => ObjectReference)
  objectReference: ObjectReference;
}
