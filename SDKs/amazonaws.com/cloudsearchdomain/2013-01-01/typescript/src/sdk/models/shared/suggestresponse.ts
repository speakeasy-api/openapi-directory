/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SuggestModel } from "./suggestmodel";
import { SuggestStatus } from "./suggeststatus";
import { Expose, Type } from "class-transformer";

/**
 * Contains the response to a <code>Suggest</code> request.
 */
export class SuggestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  @Type(() => SuggestStatus)
  status?: SuggestStatus;

  @SpeakeasyMetadata()
  @Expose({ name: "suggest" })
  @Type(() => SuggestModel)
  suggest?: SuggestModel;
}
