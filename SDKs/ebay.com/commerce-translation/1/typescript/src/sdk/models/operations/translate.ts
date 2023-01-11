import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class Translate400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorT })
  errors?: shared.ErrorT[];
}


export class Translate500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorT })
  errors?: shared.ErrorT[];
}


export class TranslateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TranslateRequest;

  @SpeakeasyMetadata()
  security: TranslateSecurity;
}


export class TranslateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  translateResponse?: shared.TranslateResponse;

  @SpeakeasyMetadata()
  translate400ApplicationJSONObject?: Translate400ApplicationJson;

  @SpeakeasyMetadata()
  translate500ApplicationJSONObject?: Translate500ApplicationJson;
}
