import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBalanceAccountsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBalanceAccountsIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetBalanceAccountsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBalanceAccountsIdPathParams;

  @SpeakeasyMetadata()
  security: GetBalanceAccountsIdSecurity;
}


export class GetBalanceAccountsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  balanceAccount?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  restServiceError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
