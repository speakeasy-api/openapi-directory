/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DescribeActivationsFilterKeysEnum } from "./describeactivationsfilterkeysenum";
import { Expose } from "class-transformer";

/**
 * Filter for the DescribeActivation API.
 */
export class DescribeActivationsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "FilterKey" })
  filterKey?: DescribeActivationsFilterKeysEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "FilterValues" })
  filterValues?: string[];
}
