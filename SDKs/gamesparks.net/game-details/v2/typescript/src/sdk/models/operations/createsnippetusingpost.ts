/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateSnippetUsingPOSTRequest extends SpeakeasyBase {
  /**
   * snippet
   */
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  manageSnippet: shared.ManageSnippet;

  /**
   * apiKey
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=apiKey",
  })
  apiKey: string;
}

export class CreateSnippetUsingPOSTResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  manageSnippet?: shared.ManageSnippet;

  /**
   * json error
   */
  @SpeakeasyMetadata()
  messageModel?: shared.MessageModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
