/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListDocumentBlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=per_page",
  })
  perPage?: number;
}

export class ListDocumentBlockResponse extends SpeakeasyBase {
  /**
   * The request is malformed.
   */
  @SpeakeasyMetadata()
  clientErrorResponse?: shared.ClientErrorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success response
   */
  @SpeakeasyMetadata()
  documentBlockList?: shared.DocumentBlockList;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  /**
   * Internal server error.
   */
  @SpeakeasyMetadata()
  serverErrorResponse?: shared.ServerErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Validation errors occured.
   */
  @SpeakeasyMetadata()
  validationErrorResponse?: shared.ValidationErrorResponse;
}
