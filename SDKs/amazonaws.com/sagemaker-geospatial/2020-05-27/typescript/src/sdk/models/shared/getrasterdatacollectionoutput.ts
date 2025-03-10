/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataCollectionTypeEnum } from "./datacollectiontypeenum";
import { Filter } from "./filter";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class GetRasterDataCollectionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Arn" })
  arn: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "DescriptionPageUrl" })
  descriptionPageUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ImageSourceBands" })
  imageSourceBands: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name: string;

  @SpeakeasyMetadata({ elemType: Filter })
  @Expose({ name: "SupportedFilters" })
  @Type(() => Filter)
  supportedFilters: Filter[];

  @SpeakeasyMetadata()
  @Expose({ name: "Tags" })
  tags?: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "Type" })
  type: DataCollectionTypeEnum;
}
