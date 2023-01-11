import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDatabaseClusterSizePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class UpdateDatabaseClusterSizeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=num_nodes" })
  numNodes: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: string;
}


export class UpdateDatabaseClusterSize401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateDatabaseClusterSizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDatabaseClusterSizePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDatabaseClusterSizeRequestBody;
}


export class UpdateDatabaseClusterSizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDatabaseClusterSize401ApplicationJSONObject?: UpdateDatabaseClusterSize401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
