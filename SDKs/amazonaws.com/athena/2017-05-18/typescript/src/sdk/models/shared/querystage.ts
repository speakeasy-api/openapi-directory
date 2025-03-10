/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { QueryStagePlanNode } from "./querystageplannode";
import { Expose, Type } from "class-transformer";

/**
 * Stage statistics such as input and output rows and bytes, execution time and stage state. This information also includes substages and the query stage plan.
 */
export class QueryStage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ExecutionTime" })
  executionTime?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "InputBytes" })
  inputBytes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "InputRows" })
  inputRows?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "OutputBytes" })
  outputBytes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "OutputRows" })
  outputRows?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "QueryStagePlan" })
  @Type(() => QueryStagePlanNode)
  queryStagePlan?: QueryStagePlanNode;

  @SpeakeasyMetadata()
  @Expose({ name: "StageId" })
  stageId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "State" })
  state?: string;

  @SpeakeasyMetadata({ elemType: QueryStage })
  @Expose({ name: "SubStages" })
  @Type(() => QueryStage)
  subStages?: QueryStage[];
}
