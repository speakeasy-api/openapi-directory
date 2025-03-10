/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 *  Result structure which contains link to download custom-generated SDK and tool packages used to integrate mobile web or app clients with backed AWS resources.
 */
export class ExportBundleResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "downloadUrl" })
  downloadUrl?: string;
}
