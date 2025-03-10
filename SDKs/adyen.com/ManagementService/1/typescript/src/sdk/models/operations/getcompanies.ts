/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetCompaniesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key",
  })
  apiKeyAuth?: string;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;
}

export class GetCompaniesRequest extends SpeakeasyBase {
  /**
   * The number of the page to fetch.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pageNumber",
  })
  pageNumber?: number;

  /**
   * The number of items to have on a page, maximum 100. The default is 10 items on a page.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pageSize",
  })
  pageSize?: number;
}

export class GetCompaniesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK - the request has succeeded.
   */
  @SpeakeasyMetadata()
  listCompanyResponse?: shared.ListCompanyResponse;

  /**
   * Bad Request - a problem reading or understanding the request.
   */
  @SpeakeasyMetadata()
  restServiceError?: shared.RestServiceError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
