/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Serializer } from "./serializer";
import { Expose, Type } from "class-transformer";

/**
 * Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true.
 */
export class OutputFormatConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Serializer" })
  @Type(() => Serializer)
  serializer?: Serializer;
}
