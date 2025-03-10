/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FindingsFilterListItem } from "./findingsfilterlistitem";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListFindingsFiltersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FindingsFilterListItem })
  @Expose({ name: "findingsFilterListItems" })
  @Type(() => FindingsFilterListItem)
  findingsFilterListItems?: FindingsFilterListItem[];

  @SpeakeasyMetadata()
  @Expose({ name: "nextToken" })
  nextToken?: string;
}
