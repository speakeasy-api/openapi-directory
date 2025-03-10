/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AwsWafv2RulesActionDetails } from "./awswafv2rulesactiondetails";
import { AwsWafv2VisibilityConfigDetails } from "./awswafv2visibilityconfigdetails";
import { Expose, Type } from "class-transformer";

/**
 *  Provides details about rules in a rule group. A rule identifies web requests that you want to allow, block, or count. Each rule includes one top-level Statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.
 */
export class AwsWafv2RulesDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Action" })
  @Type(() => AwsWafv2RulesActionDetails)
  action?: AwsWafv2RulesActionDetails;

  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "OverrideAction" })
  overrideAction?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Priority" })
  priority?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "VisibilityConfig" })
  @Type(() => AwsWafv2VisibilityConfigDetails)
  visibilityConfig?: AwsWafv2VisibilityConfigDetails;
}
