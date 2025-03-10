/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Input to the <code>GetIdentityPoolRoles</code> action.
 */
export class GetIdentityPoolRolesInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "IdentityPoolId" })
  identityPoolId: string;
}
