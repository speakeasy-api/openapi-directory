/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class DeleteVerifiedAccessGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  dryRun?: boolean;

  @SpeakeasyMetadata()
  verifiedAccessGroupId: string;
}
