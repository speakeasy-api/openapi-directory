/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ChromeFromUrlGETSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=query;name=apikey",
  })
  queryApiKey: string;
}

export class ChromeFromUrlGETRequest extends SpeakeasyBase {
  /**
   * Specify output=json to receive a JSON output. Defaults to PDF file.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=output",
  })
  output?: string;

  /**
   * Url of the page to convert to PDF. Must start with http:// or https://.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}

export class ChromeFromUrlGETResponse extends SpeakeasyBase {
  /**
   * Failed to generate PDF
   */
  @SpeakeasyMetadata()
  apiResponseFailure?: shared.ApiResponseFailure;

  /**
   * A PDF file or a JSON object depending on the `output` query parameter
   */
  @SpeakeasyMetadata()
  apiResponseSuccess?: shared.ApiResponseSuccess;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * A PDF file or a JSON object depending on the `output` query parameter
   */
  @SpeakeasyMetadata()
  chromeFromUrlGET200ApplicationPdfBinaryString?: Uint8Array;
}
