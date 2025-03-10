/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AwsWafRulePredicateListDetails } from "./awswafrulepredicatelistdetails";
import { Expose, Type } from "class-transformer";

/**
 * Provides information about a WAF rule. This rule specifies the web requests that you want to allow, block, or count.
 */
export class AwsWafRuleDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "MetricName" })
  metricName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;

  @SpeakeasyMetadata({ elemType: AwsWafRulePredicateListDetails })
  @Expose({ name: "PredicateList" })
  @Type(() => AwsWafRulePredicateListDetails)
  predicateList?: AwsWafRulePredicateListDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "RuleId" })
  ruleId?: string;
}
