/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ApiCoreDtoDatapointsUrlByLanguageItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}
