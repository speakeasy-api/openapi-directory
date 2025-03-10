/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

/**
 * Indicates whether there are findings.
 */
export enum StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysisFindingsFoundEnum {
  True = "true",
  False = "false",
  Unknown = "unknown",
}

/**
 * The status.
 */
export enum StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysisStatusEnum {
  Running = "running",
  Succeeded = "succeeded",
  Failed = "failed",
}

/**
 * Describes a tag.
 */
export class StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysisTags extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  value?: string;
}

/**
 * The Network Access Scope analysis.
 */
export class StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysis extends SpeakeasyBase {
  @SpeakeasyMetadata()
  analyzedEniCount?: number;

  @SpeakeasyMetadata()
  endDate?: Date;

  @SpeakeasyMetadata()
  findingsFound?: StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysisFindingsFoundEnum;

  @SpeakeasyMetadata()
  networkInsightsAccessScopeAnalysisArn?: string;

  @SpeakeasyMetadata()
  networkInsightsAccessScopeAnalysisId?: string;

  @SpeakeasyMetadata()
  networkInsightsAccessScopeId?: string;

  @SpeakeasyMetadata()
  startDate?: Date;

  @SpeakeasyMetadata()
  status?: StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysisStatusEnum;

  @SpeakeasyMetadata()
  statusMessage?: string;

  @SpeakeasyMetadata({
    elemType:
      StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysisTags,
  })
  tags?: StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysisTags[];

  @SpeakeasyMetadata()
  warningMessage?: string;
}

/**
 * Success
 */
export class StartNetworkInsightsAccessScopeAnalysisResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  networkInsightsAccessScopeAnalysis?: StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysis;
}
