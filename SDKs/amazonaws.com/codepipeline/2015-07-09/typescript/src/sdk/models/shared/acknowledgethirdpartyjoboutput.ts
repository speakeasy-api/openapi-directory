/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
import { Expose } from "class-transformer";

/**
 * Represents the output of an AcknowledgeThirdPartyJob action.
 */
export class AcknowledgeThirdPartyJobOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: JobStatusEnum;
}
