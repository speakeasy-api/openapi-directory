/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DimensionValueOperatorEnum } from "./dimensionvalueoperatorenum";
import { Expose } from "class-transformer";

/**
 * The dimension of a metric.
 */
export class MetricDimension extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dimensionName" })
  dimensionName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "operator" })
  operator?: DimensionValueOperatorEnum;
}
