import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConnectionPoolPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pool_name" })
  poolName: string;
}


export class GetConnectionPool200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pool" })
  pool: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems1;
}


export class GetConnectionPool401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetConnectionPoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConnectionPoolPathParams;
}


export class GetConnectionPoolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getConnectionPool200ApplicationJSONObject?: GetConnectionPool200ApplicationJson;

  @SpeakeasyMetadata()
  getConnectionPool401ApplicationJSONObject?: GetConnectionPool401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
