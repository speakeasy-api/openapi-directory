/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FilterList } from "./filterlist";

export class DescribeDBParametersMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbParameterGroupName: string;

  @SpeakeasyMetadata({ elemType: FilterList })
  filters?: FilterList[];

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata()
  maxRecords?: number;

  @SpeakeasyMetadata()
  source?: string;
}
