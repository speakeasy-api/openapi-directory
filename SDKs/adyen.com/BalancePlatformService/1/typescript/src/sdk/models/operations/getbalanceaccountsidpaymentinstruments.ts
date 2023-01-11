import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBalanceAccountsIdPaymentInstrumentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBalanceAccountsIdPaymentInstrumentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetBalanceAccountsIdPaymentInstrumentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetBalanceAccountsIdPaymentInstrumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBalanceAccountsIdPaymentInstrumentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetBalanceAccountsIdPaymentInstrumentsQueryParams;

  @SpeakeasyMetadata()
  security: GetBalanceAccountsIdPaymentInstrumentsSecurity;
}


export class GetBalanceAccountsIdPaymentInstrumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedPaymentInstrumentsResponse?: any;

  @SpeakeasyMetadata()
  restServiceError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
