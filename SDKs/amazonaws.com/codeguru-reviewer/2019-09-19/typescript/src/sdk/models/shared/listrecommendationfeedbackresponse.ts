/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RecommendationFeedbackSummary } from "./recommendationfeedbacksummary";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListRecommendationFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: RecommendationFeedbackSummary })
  @Expose({ name: "RecommendationFeedbackSummaries" })
  @Type(() => RecommendationFeedbackSummary)
  recommendationFeedbackSummaries?: RecommendationFeedbackSummary[];
}
