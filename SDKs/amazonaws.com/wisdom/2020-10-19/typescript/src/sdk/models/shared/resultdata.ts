/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Document } from "./document";
import { Expose, Type } from "class-transformer";

/**
 * Information about the result.
 */
export class ResultData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "document" })
  @Type(() => Document)
  document: Document;

  @SpeakeasyMetadata()
  @Expose({ name: "relevanceScore" })
  relevanceScore?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "resultId" })
  resultId: string;
}
