/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CurrentInstance } from "./currentinstance";
import { FindingReasonCodeEnum } from "./findingreasoncodeenum";
import { ModifyRecommendationDetail } from "./modifyrecommendationdetail";
import { RightsizingTypeEnum } from "./rightsizingtypeenum";
import { TerminateRecommendationDetail } from "./terminaterecommendationdetail";
import { Expose, Type } from "class-transformer";

/**
 * Recommendations to rightsize resources.
 */
export class RightsizingRecommendation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "AccountId" })
  accountId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "CurrentInstance" })
  @Type(() => CurrentInstance)
  currentInstance?: CurrentInstance;

  @SpeakeasyMetadata()
  @Expose({ name: "FindingReasonCodes" })
  findingReasonCodes?: FindingReasonCodeEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "ModifyRecommendationDetail" })
  @Type(() => ModifyRecommendationDetail)
  modifyRecommendationDetail?: ModifyRecommendationDetail;

  @SpeakeasyMetadata()
  @Expose({ name: "RightsizingType" })
  rightsizingType?: RightsizingTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "TerminateRecommendationDetail" })
  @Type(() => TerminateRecommendationDetail)
  terminateRecommendationDetail?: TerminateRecommendationDetail;
}
