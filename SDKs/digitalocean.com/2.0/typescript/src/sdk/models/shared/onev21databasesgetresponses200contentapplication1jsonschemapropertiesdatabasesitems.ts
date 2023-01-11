import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection extends SpeakeasyBase {
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

export enum Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum {
    Pg = "pg",
    Mysql = "mysql",
    Redis = "redis",
    Mongodb = "mongodb"
}


export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=day" })
  day: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string[];

  @SpeakeasyMetadata({ data: "json, name=hour" })
  hour: string;

  @SpeakeasyMetadata({ data: "json, name=pending" })
  pending?: boolean;
}


export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection extends SpeakeasyBase {
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

export enum Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum {
    Creating = "creating",
    Online = "online",
    Resizing = "resizing",
    Migrating = "migrating",
    Forking = "forking"
}

export enum Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum {
    MysqlNativePassword = "mysql_native_password",
    CachingSha2Password = "caching_sha2_password"
}


export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_plugin" })
  authPlugin: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum;
}

export enum Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum {
    Primary = "primary",
    Normal = "normal"
}


export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mysql_settings" })
  mysqlSettings?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum;
}


export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection" })
  connection?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=db_names" })
  dbNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=maintenance_window" })
  maintenanceWindow?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=num_nodes" })
  numNodes: number;

  @SpeakeasyMetadata({ data: "json, name=private_connection" })
  privateConnection?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection;

  @SpeakeasyMetadata({ data: "json, name=private_network_uuid" })
  privateNetworkUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=users", elemType: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers })
  users?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
