import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SignUpIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class SignUpId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class SignUpId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: any;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class SignUpIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: any;

  @SpeakeasyMetadata()
  security: SignUpIdSecurity;
}


export class SignUpIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  demoAuthResponse?: any;

  @SpeakeasyMetadata()
  signUPId400ApplicationJSONOneOf?: any;

  @SpeakeasyMetadata()
  signUPId401ApplicationJSONObject?: SignUpId401ApplicationJson;

  @SpeakeasyMetadata()
  signUPId500ApplicationJSONObject?: SignUpId500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
