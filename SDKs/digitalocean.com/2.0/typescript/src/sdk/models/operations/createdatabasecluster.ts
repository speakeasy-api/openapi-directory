import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDatabaseClusterRequestBodyBackupRestore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup_created_at" })
  backupCreatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=database_name" })
  databaseName: string;
}

export enum CreateDatabaseClusterRequestBodyEngineEnum {
    Pg = "pg",
    Mysql = "mysql",
    Redis = "redis",
    Mongodb = "mongodb"
}


export class CreateDatabaseClusterRequestBodyMaintenanceWindowInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=day" })
  day: string;

  @SpeakeasyMetadata({ data: "json, name=hour" })
  hour: string;
}


export class CreateDatabaseClusterRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup_restore" })
  backupRestore?: CreateDatabaseClusterRequestBodyBackupRestore;

  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine: CreateDatabaseClusterRequestBodyEngineEnum;

  @SpeakeasyMetadata({ data: "json, name=maintenance_window" })
  maintenanceWindow?: CreateDatabaseClusterRequestBodyMaintenanceWindowInput;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=num_nodes" })
  numNodes: number;

  @SpeakeasyMetadata({ data: "json, name=private_network_uuid" })
  privateNetworkUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class CreateDatabaseCluster201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database" })
  database: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems;
}


export class CreateDatabaseCluster401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateDatabaseClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDatabaseClusterRequestBodyInput;
}


export class CreateDatabaseClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createDatabaseCluster201ApplicationJSONObject?: CreateDatabaseCluster201ApplicationJson;

  @SpeakeasyMetadata()
  createDatabaseCluster401ApplicationJSONObject?: CreateDatabaseCluster401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
