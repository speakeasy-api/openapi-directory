/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Information about a country.
 */
export class Country extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "CountryCode" })
  countryCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "CountryName" })
  countryName?: string;
}
