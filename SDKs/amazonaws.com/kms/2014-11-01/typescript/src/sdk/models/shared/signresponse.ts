/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";
import { Expose } from "class-transformer";

/**
 * Success
 */
export class SignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "KeyId" })
  keyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Signature" })
  signature?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "SigningAlgorithm" })
  signingAlgorithm?: SigningAlgorithmSpecEnum;
}
