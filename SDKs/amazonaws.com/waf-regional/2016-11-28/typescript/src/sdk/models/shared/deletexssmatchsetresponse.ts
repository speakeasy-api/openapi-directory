/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The response to a request to delete an <a>XssMatchSet</a> from AWS WAF.
 */
export class DeleteXssMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ChangeToken" })
  changeToken?: string;
}
