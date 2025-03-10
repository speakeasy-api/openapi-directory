/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ResourceManagedStatusEnum } from "./resourcemanagedstatusenum";
import { ResourceManagedTypeEnum } from "./resourcemanagedtypeenum";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";
import { Expose } from "class-transformer";

export class ListRuleGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ManagedType" })
  managedType?: ResourceManagedTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Scope" })
  scope?: ResourceManagedStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "Type" })
  type?: RuleGroupTypeEnum;
}
