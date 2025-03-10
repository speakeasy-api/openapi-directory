/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OverrideStatusEnum } from "./overridestatusenum";
import { Expose } from "class-transformer";

/**
 * Returns information about an override event for approval rules for a pull request.
 */
export class ApprovalRuleOverriddenEventMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "overrideStatus" })
  overrideStatus?: OverrideStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "revisionId" })
  revisionId?: string;
}
