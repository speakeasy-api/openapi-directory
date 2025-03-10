/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Represents a single entry in the list of values for <code>SqlAliases</code>.
 */
export class SqlAlias extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Alias" })
  alias: string;

  @SpeakeasyMetadata()
  @Expose({ name: "From" })
  from: string;
}
