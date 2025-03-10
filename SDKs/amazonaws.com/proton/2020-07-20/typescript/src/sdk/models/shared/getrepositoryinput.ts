/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RepositoryProviderEnum } from "./repositoryproviderenum";
import { Expose } from "class-transformer";

export class GetRepositoryInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider: RepositoryProviderEnum;
}
