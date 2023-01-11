import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListConnectionPoolsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class ListConnectionPools200ApplicationJsonPoolsConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=ssl" })
  ssl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}


export class ListConnectionPools200ApplicationJsonPoolsPrivateConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=ssl" })
  ssl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}


export class ListConnectionPools200ApplicationJsonPools extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection" })
  connection?: ListConnectionPools200ApplicationJsonPoolsConnection;

  @SpeakeasyMetadata({ data: "json, name=db" })
  db: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=private_connection" })
  privateConnection?: ListConnectionPools200ApplicationJsonPoolsPrivateConnection;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: string;
}


export class ListConnectionPools200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pools", elemType: ListConnectionPools200ApplicationJsonPools })
  pools?: ListConnectionPools200ApplicationJsonPools[];
}


export class ListConnectionPools401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListConnectionPoolsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListConnectionPoolsPathParams;
}


export class ListConnectionPoolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listConnectionPools200ApplicationJSONObject?: ListConnectionPools200ApplicationJson;

  @SpeakeasyMetadata()
  listConnectionPools401ApplicationJSONObject?: ListConnectionPools401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
