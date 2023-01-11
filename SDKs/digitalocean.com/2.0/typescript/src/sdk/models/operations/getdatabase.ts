import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatabasePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database_name" })
  databaseName: string;
}


export class GetDatabase200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=db" })
  db: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems;
}


export class GetDatabase401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatabasePathParams;
}


export class GetDatabaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDatabase200ApplicationJSONObject?: GetDatabase200ApplicationJson;

  @SpeakeasyMetadata()
  getDatabase401ApplicationJSONObject?: GetDatabase401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
