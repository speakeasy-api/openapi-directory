/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SearchedArtifact } from "./searchedartifact";
import { Expose, Type } from "class-transformer";

/**
 * Describes the response received when searching for artifacts.
 */
export class ArtifactSearchResults extends SpeakeasyBase {
  /**
   * The artifacts that matched the search criteria.
   */
  @SpeakeasyMetadata({ elemType: SearchedArtifact })
  @Expose({ name: "artifacts" })
  @Type(() => SearchedArtifact)
  artifacts: SearchedArtifact[];

  /**
   * The total number of artifacts that matched the search criteria.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count: number;
}
