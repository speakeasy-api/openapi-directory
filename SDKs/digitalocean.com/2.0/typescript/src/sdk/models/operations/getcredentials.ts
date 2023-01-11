import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCredentialsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class GetCredentialsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expiry_seconds" })
  expirySeconds?: number;
}


export class GetCredentials200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate_authority_data" })
  certificateAuthorityData?: string;

  @SpeakeasyMetadata({ data: "json, name=client_certificate_data" })
  clientCertificateData?: string;

  @SpeakeasyMetadata({ data: "json, name=client_key_data" })
  clientKeyData?: string;

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}


export class GetCredentials401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetCredentialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCredentialsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCredentialsQueryParams;
}


export class GetCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCredentials200ApplicationJSONObject?: GetCredentials200ApplicationJson;

  @SpeakeasyMetadata()
  getCredentials401ApplicationJSONObject?: GetCredentials401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
