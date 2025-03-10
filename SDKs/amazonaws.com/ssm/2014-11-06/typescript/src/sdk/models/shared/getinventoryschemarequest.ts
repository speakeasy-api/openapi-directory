/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class GetInventorySchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Aggregator" })
  aggregator?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "SubType" })
  subType?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "TypeName" })
  typeName?: string;
}
