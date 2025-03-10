/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FilterList } from "./filterlist";

export class DescribeNatGatewaysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dryRun?: boolean;

  @SpeakeasyMetadata({ elemType: FilterList })
  filter?: FilterList[];

  @SpeakeasyMetadata()
  maxResults?: number;

  @SpeakeasyMetadata()
  natGatewayIds?: string[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
