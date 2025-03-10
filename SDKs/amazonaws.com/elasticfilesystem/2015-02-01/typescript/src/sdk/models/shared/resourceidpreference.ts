/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ResourceEnum } from "./resourceenum";
import { ResourceIdTypeEnum } from "./resourceidtypeenum";
import { Expose } from "class-transformer";

/**
 * Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.
 */
export class ResourceIdPreference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ResourceIdType" })
  resourceIdType?: ResourceIdTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "Resources" })
  resources?: ResourceEnum[];
}
