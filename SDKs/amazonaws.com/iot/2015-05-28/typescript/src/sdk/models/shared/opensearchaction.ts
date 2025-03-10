/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Describes an action that writes data to an Amazon OpenSearch Service domain.
 */
export class OpenSearchAction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "endpoint" })
  endpoint: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index: string;

  @SpeakeasyMetadata()
  @Expose({ name: "roleArn" })
  roleArn: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}
