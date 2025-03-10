/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class FetchOperationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=X-Api-Key",
  })
  apiKey?: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2AuthorizationCode?: string;
}

export class FetchOperationsRequest extends SpeakeasyBase {
  /**
   * Optional comma-separated list of resource owner unique identifiers by which to filter results.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=resourceOwnerId",
  })
  resourceOwnerId?: string;
}

export class FetchOperationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Bad Input
   */
  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  /**
   * Returns the requested operations.
   */
  @SpeakeasyMetadata()
  operations?: shared.Operations;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
