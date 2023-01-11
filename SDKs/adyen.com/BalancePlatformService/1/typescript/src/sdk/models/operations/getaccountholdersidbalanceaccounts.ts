import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountHoldersIdBalanceAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetAccountHoldersIdBalanceAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetAccountHoldersIdBalanceAccountsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetAccountHoldersIdBalanceAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountHoldersIdBalanceAccountsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAccountHoldersIdBalanceAccountsQueryParams;

  @SpeakeasyMetadata()
  security: GetAccountHoldersIdBalanceAccountsSecurity;
}


export class GetAccountHoldersIdBalanceAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedBalanceAccountsResponse?: any;

  @SpeakeasyMetadata()
  restServiceError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
