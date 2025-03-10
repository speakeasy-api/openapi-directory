/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CompactCustomPolicyResponse } from "./compactcustompolicyresponse";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class CustomPolicyResponse extends SpeakeasyBase {
  /**
   * This array contains the custom policies that match the input criteria.
   */
  @SpeakeasyMetadata({ elemType: CompactCustomPolicyResponse })
  @Expose({ name: "customPolicies" })
  @Type(() => CompactCustomPolicyResponse)
  customPolicies?: CompactCustomPolicyResponse[];

  /**
   * <i>This field is for future use.</i>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;

  /**
   * <i>This field is for future use.</i>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit?: number;

  /**
   * <i>This field is for future use.</i>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  /**
   * <i>This field is for future use.</i>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "offset" })
  offset?: number;

  /**
   * <i>This field is for future use.</i>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "prev" })
  prev?: string;

  /**
   * <i>This field is for future use.</i>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;
}
