/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DetectedCsvFormatDescriptor } from "./detectedcsvformatdescriptor";
import { DetectedJsonFormatDescriptor } from "./detectedjsonformatdescriptor";
import { Expose, Type } from "class-transformer";

/**
 * Properties of an inferred data format.
 */
export class DetectedFileFormatDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "CsvFormatDescriptor" })
  @Type(() => DetectedCsvFormatDescriptor)
  csvFormatDescriptor?: DetectedCsvFormatDescriptor;

  @SpeakeasyMetadata()
  @Expose({ name: "JsonFormatDescriptor" })
  @Type(() => DetectedJsonFormatDescriptor)
  jsonFormatDescriptor?: DetectedJsonFormatDescriptor;
}
