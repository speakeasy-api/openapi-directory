/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Success
 */
export class ListApprovalRuleTemplatesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "approvalRuleTemplateNames" })
  approvalRuleTemplateNames?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "nextToken" })
  nextToken?: string;
}
