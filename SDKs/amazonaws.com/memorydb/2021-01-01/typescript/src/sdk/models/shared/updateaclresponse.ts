/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Acl } from "./acl";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class UpdateACLResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ACL" })
  @Type(() => Acl)
  acl?: Acl;
}
