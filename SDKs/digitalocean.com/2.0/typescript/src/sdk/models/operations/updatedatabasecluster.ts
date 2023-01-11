import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDatabaseClusterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class UpdateDatabaseClusterRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;
}


export class UpdateDatabaseCluster401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateDatabaseClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDatabaseClusterPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDatabaseClusterRequestBody;
}


export class UpdateDatabaseClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDatabaseCluster401ApplicationJSONObject?: UpdateDatabaseCluster401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
