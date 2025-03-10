/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DocumentReaderConfig } from "./documentreaderconfig";
import { InputFormatEnum } from "./inputformatenum";
import { Expose, Type } from "class-transformer";

/**
 * The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis.
 */
export class InputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "DocumentReaderConfig" })
  @Type(() => DocumentReaderConfig)
  documentReaderConfig?: DocumentReaderConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "InputFormat" })
  inputFormat?: InputFormatEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "S3Uri" })
  s3Uri: string;
}
