/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AddCommunicationToCaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentSetId" })
  attachmentSetId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "caseId" })
  caseId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ccEmailAddresses" })
  ccEmailAddresses?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "communicationBody" })
  communicationBody: string;
}
