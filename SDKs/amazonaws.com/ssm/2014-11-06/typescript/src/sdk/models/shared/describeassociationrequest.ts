/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DescribeAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "AssociationId" })
  associationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "AssociationVersion" })
  associationVersion?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;
}
