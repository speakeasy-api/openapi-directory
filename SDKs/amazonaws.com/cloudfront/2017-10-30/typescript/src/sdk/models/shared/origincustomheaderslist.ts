/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

/**
 * A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution.
 */
export class OriginCustomHeadersList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headerName: string;

  @SpeakeasyMetadata()
  headerValue: string;
}
