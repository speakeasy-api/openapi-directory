import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatabaseClusterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class GetDatabaseCluster200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database" })
  database: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems;
}


export class GetDatabaseCluster401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDatabaseClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatabaseClusterPathParams;
}


export class GetDatabaseClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDatabaseCluster200ApplicationJSONObject?: GetDatabaseCluster200ApplicationJson;

  @SpeakeasyMetadata()
  getDatabaseCluster401ApplicationJSONObject?: GetDatabaseCluster401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
