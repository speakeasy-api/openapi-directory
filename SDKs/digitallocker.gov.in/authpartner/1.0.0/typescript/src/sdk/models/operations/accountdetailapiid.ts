import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountDetailApiIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class AccountDetailApiId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class AccountDetailApiId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class AccountDetailApiIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: AccountDetailApiIdSecurity;
}


export class AccountDetailApiIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountDetailAPIId401ApplicationJSONObject?: AccountDetailApiId401ApplicationJson;

  @SpeakeasyMetadata()
  accountDetailAPIId500ApplicationJSONObject?: AccountDetailApiId500ApplicationJson;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sample?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
