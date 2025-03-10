/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
import { InputFileLocation } from "./inputfilelocation";
import { OverwriteExistingEnum } from "./overwriteexistingenum";
import { Expose, Type } from "class-transformer";

/**
 * Each step type has its own <code>StepDetails</code> structure.
 */
export class DecryptStepDetails extends SpeakeasyBase {
  /**
   * Specifies the location for the file that's being processed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "DestinationFileLocation" })
  @Type(() => InputFileLocation)
  destinationFileLocation: InputFileLocation;

  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "OverwriteExisting" })
  overwriteExisting?: OverwriteExistingEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "SourceFileLocation" })
  sourceFileLocation?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Type" })
  type: EncryptionTypeEnum;
}
