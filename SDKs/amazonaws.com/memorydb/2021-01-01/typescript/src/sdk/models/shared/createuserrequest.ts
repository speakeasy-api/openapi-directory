/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AuthenticationMode } from "./authenticationmode";
import { Tag } from "./tag";
import { Expose, Type } from "class-transformer";

export class CreateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "AccessString" })
  accessString: string;

  @SpeakeasyMetadata()
  @Expose({ name: "AuthenticationMode" })
  @Type(() => AuthenticationMode)
  authenticationMode: AuthenticationMode;

  @SpeakeasyMetadata({ elemType: Tag })
  @Expose({ name: "Tags" })
  @Type(() => Tag)
  tags?: Tag[];

  @SpeakeasyMetadata()
  @Expose({ name: "UserName" })
  userName: string;
}
