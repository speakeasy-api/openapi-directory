/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class DisassociateEnclaveCertificateIamRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateArn: string;

  @SpeakeasyMetadata()
  dryRun?: boolean;

  @SpeakeasyMetadata()
  roleArn: string;
}
