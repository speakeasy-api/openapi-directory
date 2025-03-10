/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ListSchemaExtensionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Limit" })
  limit?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;
}
