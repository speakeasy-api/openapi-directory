import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchBalanceAccountsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchBalanceAccountsIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PatchBalanceAccountsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchBalanceAccountsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: PatchBalanceAccountsIdSecurity;
}


export class PatchBalanceAccountsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  balanceAccount?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  restServiceError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
