/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

/**
 * Specifies how to trim common words from the beginning of a field to enable title sorting by that field.
 */
export class SourceDataTrimTitle extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultValue?: string;

  /**
   * An <a href="http://tools.ietf.org/html/rfc4646">IETF RFC 4646</a> language code. Only the primary language is considered. English (en) is currently the only supported language.
   */
  @SpeakeasyMetadata()
  language?: string;

  @SpeakeasyMetadata()
  separator?: string;

  @SpeakeasyMetadata()
  sourceName: string;
}
