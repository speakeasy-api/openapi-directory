/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ComponentVersionListItem } from "./componentversionlistitem";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListComponentVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ComponentVersionListItem })
  @Expose({ name: "componentVersions" })
  @Type(() => ComponentVersionListItem)
  componentVersions?: ComponentVersionListItem[];

  @SpeakeasyMetadata()
  @Expose({ name: "nextToken" })
  nextToken?: string;
}
