/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BeezUPCommonPaginationResult } from "./beezupcommonpaginationresult";
import { RuleExecutionReporting } from "./ruleexecutionreporting";
import { Expose, Type } from "class-transformer";

/**
 * Rules executions list
 */
export class RuleExecutionReportings extends SpeakeasyBase {
  /**
   * The rules executions history
   */
  @SpeakeasyMetadata({ elemType: RuleExecutionReporting })
  @Expose({ name: "executions" })
  @Type(() => RuleExecutionReporting)
  executions?: RuleExecutionReporting[];

  @SpeakeasyMetadata()
  @Expose({ name: "paginationResult" })
  @Type(() => BeezUPCommonPaginationResult)
  paginationResult?: BeezUPCommonPaginationResult;
}
