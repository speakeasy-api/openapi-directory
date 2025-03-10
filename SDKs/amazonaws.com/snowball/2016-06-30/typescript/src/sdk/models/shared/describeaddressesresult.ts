/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Address } from "./address";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class DescribeAddressesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Address })
  @Expose({ name: "Addresses" })
  @Type(() => Address)
  addresses?: Address[];

  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;
}
