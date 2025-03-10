/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CostAllocationTag } from "./costallocationtag";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListCostAllocationTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CostAllocationTag })
  @Expose({ name: "CostAllocationTags" })
  @Type(() => CostAllocationTag)
  costAllocationTags?: CostAllocationTag[];

  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;
}
