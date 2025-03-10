/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RaidArray } from "./raidarray";
import { Expose, Type } from "class-transformer";

/**
 * Contains the response to a <code>DescribeRaidArrays</code> request.
 */
export class DescribeRaidArraysResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: RaidArray })
  @Expose({ name: "RaidArrays" })
  @Type(() => RaidArray)
  raidArrays?: RaidArray[];
}
