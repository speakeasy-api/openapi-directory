/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class ModifyDBSubnetGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSubnetGroupDescription?: string;

  @SpeakeasyMetadata()
  dbSubnetGroupName: string;

  @SpeakeasyMetadata()
  subnetIds: string[];
}
