/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IdentityProviderConfig } from "./identityproviderconfig";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListIdentityProviderConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: IdentityProviderConfig })
  @Expose({ name: "identityProviderConfigs" })
  @Type(() => IdentityProviderConfig)
  identityProviderConfigs?: IdentityProviderConfig[];

  @SpeakeasyMetadata()
  @Expose({ name: "nextToken" })
  nextToken?: string;
}
