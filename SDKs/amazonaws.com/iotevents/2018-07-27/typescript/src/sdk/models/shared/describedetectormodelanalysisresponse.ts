/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AnalysisStatusEnum } from "./analysisstatusenum";
import { Expose } from "class-transformer";

/**
 * Success
 */
export class DescribeDetectorModelAnalysisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: AnalysisStatusEnum;
}
