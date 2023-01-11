import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDockerCredentialsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expiry_seconds" })
  expirySeconds?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=read_write" })
  readWrite?: boolean;
}


export class GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth" })
  auth?: string;
}


export class GetDockerCredentials200ApplicationJsonAuths extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registry.digitalocean.com" })
  registryDigitaloceanCom?: GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom;
}


export class GetDockerCredentials200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auths" })
  auths?: GetDockerCredentials200ApplicationJsonAuths;
}


export class GetDockerCredentials401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDockerCredentialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDockerCredentialsQueryParams;
}


export class GetDockerCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDockerCredentials200ApplicationJSONObject?: GetDockerCredentials200ApplicationJson;

  @SpeakeasyMetadata()
  getDockerCredentials401ApplicationJSONObject?: GetDockerCredentials401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
