/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ServiceInsightHealth } from "./serviceinsighthealth";
import { ServiceNameEnum } from "./servicenameenum";
import { Expose, Type } from "class-transformer";

/**
 * Represents the health of an Amazon Web Services service.
 */
export class ServiceHealth extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "AnalyzedResourceCount" })
  analyzedResourceCount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "Insight" })
  @Type(() => ServiceInsightHealth)
  insight?: ServiceInsightHealth;

  @SpeakeasyMetadata()
  @Expose({ name: "ServiceName" })
  serviceName?: ServiceNameEnum;
}
