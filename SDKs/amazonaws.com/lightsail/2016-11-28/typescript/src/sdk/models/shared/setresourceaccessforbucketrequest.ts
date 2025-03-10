/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ResourceBucketAccessEnum } from "./resourcebucketaccessenum";
import { Expose } from "class-transformer";

export class SetResourceAccessForBucketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "access" })
  access: ResourceBucketAccessEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "bucketName" })
  bucketName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "resourceName" })
  resourceName: string;
}
