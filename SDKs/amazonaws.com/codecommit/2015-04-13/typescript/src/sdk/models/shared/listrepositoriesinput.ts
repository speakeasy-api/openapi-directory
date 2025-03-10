/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OrderEnumEnum } from "./orderenumenum";
import { SortByEnumEnum } from "./sortbyenumenum";
import { Expose } from "class-transformer";

/**
 * Represents the input of a list repositories operation.
 */
export class ListRepositoriesInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order?: OrderEnumEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "sortBy" })
  sortBy?: SortByEnumEnum;
}
