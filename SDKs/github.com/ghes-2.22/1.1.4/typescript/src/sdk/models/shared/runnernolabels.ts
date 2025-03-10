/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Response
 */
export class RunnerNoLabels extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "busy" })
  busy?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "os" })
  os?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}
