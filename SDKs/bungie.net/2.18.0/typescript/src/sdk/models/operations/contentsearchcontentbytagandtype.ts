/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ContentSearchContentByTagAndTypeRequest extends SpeakeasyBase {
  /**
   * Page number for the search results starting with page 1.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=currentpage",
  })
  currentpage?: number;

  /**
   * Not used.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=head" })
  head?: boolean;

  /**
   * Not used.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=itemsperpage",
  })
  itemsperpage?: number;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=locale",
  })
  locale: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag" })
  tag: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=type",
  })
  type: string;
}

/**
 * Look at the Response property for more information about the nature of this response
 */
export class ContentSearchContentByTagAndType200Wildcard extends SpeakeasyBase {
  @SpeakeasyMetadata()
  detailedErrorTrace?: string;

  @SpeakeasyMetadata()
  errorCode?: number;

  @SpeakeasyMetadata()
  errorStatus?: string;

  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  messageData?: Record<string, string>;

  @SpeakeasyMetadata()
  response?: shared.SearchResultOfContentItemPublicContract;

  @SpeakeasyMetadata()
  throttleSeconds?: number;
}

export class ContentSearchContentByTagAndTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
