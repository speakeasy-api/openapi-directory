/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 *  An array with one or more objects that includes a security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) and the Amazon Resource Name (ARN) of a standard. The security control ID or ARN is the same across standards.
 */
export class StandardsControlAssociationId extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "SecurityControlId" })
  securityControlId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "StandardsArn" })
  standardsArn: string;
}
