/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
import { Expose, Type } from "class-transformer";

/**
 * Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>.
 */
export class BatchListAttachedIndices extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "TargetReference" })
  @Type(() => ObjectReference)
  targetReference: ObjectReference;
}
