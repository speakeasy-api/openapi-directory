/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateDocumentFromProformaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export class CreateDocumentFromProformaResponse extends SpeakeasyBase {
  /**
   * The request is malformed.
   */
  @SpeakeasyMetadata()
  clientErrorResponse?: shared.ClientErrorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Document created successfully.
   */
  @SpeakeasyMetadata()
  document?: shared.Document;

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
