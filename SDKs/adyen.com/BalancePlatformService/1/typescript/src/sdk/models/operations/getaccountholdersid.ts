import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountHoldersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetAccountHoldersIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetAccountHoldersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountHoldersIdPathParams;

  @SpeakeasyMetadata()
  security: GetAccountHoldersIdSecurity;
}


export class GetAccountHoldersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountHolder?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  restServiceError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
