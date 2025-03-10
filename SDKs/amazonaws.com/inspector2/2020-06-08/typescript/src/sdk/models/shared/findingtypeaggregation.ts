/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AggregationFindingTypeEnum } from "./aggregationfindingtypeenum";
import { AggregationResourceTypeEnum } from "./aggregationresourcetypeenum";
import { FindingTypeSortByEnum } from "./findingtypesortbyenum";
import { SortOrderEnum } from "./sortorderenum";
import { Expose } from "class-transformer";

/**
 * The details that define an aggregation based on finding type.
 */
export class FindingTypeAggregation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "findingType" })
  findingType?: AggregationFindingTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "resourceType" })
  resourceType?: AggregationResourceTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "sortBy" })
  sortBy?: FindingTypeSortByEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "sortOrder" })
  sortOrder?: SortOrderEnum;
}
