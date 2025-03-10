/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DescribeFHIRImportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "DatastoreId" })
  datastoreId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "JobId" })
  jobId: string;
}
