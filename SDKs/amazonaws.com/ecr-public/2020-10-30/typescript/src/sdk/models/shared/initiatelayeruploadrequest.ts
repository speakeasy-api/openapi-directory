/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class InitiateLayerUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "registryId" })
  registryId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "repositoryName" })
  repositoryName: string;
}
