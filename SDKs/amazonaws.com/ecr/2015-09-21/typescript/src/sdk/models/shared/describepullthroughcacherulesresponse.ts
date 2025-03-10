/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PullThroughCacheRule } from "./pullthroughcacherule";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class DescribePullThroughCacheRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: PullThroughCacheRule })
  @Expose({ name: "pullThroughCacheRules" })
  @Type(() => PullThroughCacheRule)
  pullThroughCacheRules?: PullThroughCacheRule[];
}
