import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateOnlineMigrationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class UpdateOnlineMigrationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disable_ssl" })
  disableSsl?: boolean;
}


export class UpdateOnlineMigration200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class UpdateOnlineMigration401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateOnlineMigrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOnlineMigrationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateOnlineMigrationRequestBody;
}


export class UpdateOnlineMigrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOnlineMigration200ApplicationJSONObject?: UpdateOnlineMigration200ApplicationJson;

  @SpeakeasyMetadata()
  updateOnlineMigration401ApplicationJSONObject?: UpdateOnlineMigration401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
