/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ModelStatusEnum } from "./modelstatusenum";
import { Expose, Transform } from "class-transformer";

/**
 * Provides information about the specified ML model, including dataset and model names and ARNs, as well as status.
 */
export class ModelSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "CreatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "DatasetArn" })
  datasetArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "DatasetName" })
  datasetName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ModelArn" })
  modelArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ModelName" })
  modelName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Status" })
  status?: ModelStatusEnum;
}
