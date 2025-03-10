/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { User } from "./user";
import { Expose, Type } from "class-transformer";

/**
 * Response object for users.
 */
export class UserResponse extends SpeakeasyBase {
  /**
   * Object contains user properties.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => User)
  data?: User;

  @SpeakeasyMetadata()
  @Expose({ name: "included" })
  included?: any[];

  /**
   * Http code for the response.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "responseStatus" })
  responseStatus?: number;
}
