/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { QueryStatistics } from "./querystatistics";
import { QueryStatusEnum } from "./querystatusenum";
import { ResultField } from "./resultfield";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class GetQueryResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ResultField, elemDepth: 2 })
  @Expose({ name: "results" })
  @Type(() => ResultField)
  results?: ResultField[][];

  @SpeakeasyMetadata()
  @Expose({ name: "statistics" })
  @Type(() => QueryStatistics)
  statistics?: QueryStatistics;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: QueryStatusEnum;
}
