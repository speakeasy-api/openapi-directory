import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListDatabaseBackupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class ListDatabaseBackups200ApplicationJsonBackups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes: number;
}


export class ListDatabaseBackups200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backups", elemType: ListDatabaseBackups200ApplicationJsonBackups })
  backups: ListDatabaseBackups200ApplicationJsonBackups[];
}


export class ListDatabaseBackups401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDatabaseBackupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListDatabaseBackupsPathParams;
}


export class ListDatabaseBackupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listDatabaseBackups200ApplicationJSONObject?: ListDatabaseBackups200ApplicationJson;

  @SpeakeasyMetadata()
  listDatabaseBackups401ApplicationJSONObject?: ListDatabaseBackups401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
