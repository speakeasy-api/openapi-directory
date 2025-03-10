/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SearchedVersion } from "./searchedversion";
import { Expose, Type } from "class-transformer";

/**
 * Describes the response received when searching for artifacts.
 */
export class VersionSearchResults extends SpeakeasyBase {
  /**
   * The total number of artifacts that matched the search criteria.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count: number;

  @SpeakeasyMetadata({ elemType: SearchedVersion })
  @Expose({ name: "versions" })
  @Type(() => SearchedVersion)
  versions: SearchedVersion[];
}
