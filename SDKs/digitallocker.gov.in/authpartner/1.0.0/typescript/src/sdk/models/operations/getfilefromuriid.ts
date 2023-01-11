import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFileFromUriIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uri" })
  uri: string;
}


export class GetFileFromUriIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetFileFromUriId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetFileFromUriId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetFileFromUriId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetFileFromUriIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFileFromUriIdPathParams;

  @SpeakeasyMetadata()
  security: GetFileFromUriIdSecurity;
}


export class GetFileFromUriIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getFileFromURIId200ApplicationPdfString?: string;

  @SpeakeasyMetadata()
  getFileFromURIId200ImageJpegString?: string;

  @SpeakeasyMetadata()
  getFileFromURIId200ImageJpgString?: string;

  @SpeakeasyMetadata()
  getFileFromURIId200ImagePngString?: string;

  @SpeakeasyMetadata()
  getFileFromURIId400ApplicationJSONObject?: GetFileFromUriId400ApplicationJson;

  @SpeakeasyMetadata()
  getFileFromURIId401ApplicationJSONObject?: GetFileFromUriId401ApplicationJson;

  @SpeakeasyMetadata()
  getFileFromURIId404ApplicationJSONObject?: GetFileFromUriId404ApplicationJson;

  @SpeakeasyMetadata()
  getFileFromURIId500ApplicationJSONOneOf?: any;

  @SpeakeasyMetadata()
  getFileFromURIId503ApplicationJSONOneOf?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
