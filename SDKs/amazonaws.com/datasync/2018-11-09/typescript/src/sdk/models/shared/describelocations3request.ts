/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * DescribeLocationS3Request
 */
export class DescribeLocationS3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "LocationArn" })
  locationArn: string;
}
