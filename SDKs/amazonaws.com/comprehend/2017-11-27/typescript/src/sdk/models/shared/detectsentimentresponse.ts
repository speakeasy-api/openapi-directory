/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SentimentScore } from "./sentimentscore";
import { SentimentTypeEnum } from "./sentimenttypeenum";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class DetectSentimentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Sentiment" })
  sentiment?: SentimentTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "SentimentScore" })
  @Type(() => SentimentScore)
  sentimentScore?: SentimentScore;
}
