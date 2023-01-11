import { SpeakeasyBase } from "../../../internal/utils";
export declare class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection extends SpeakeasyBase {
    database?: string;
    host?: string;
    password?: string;
    port?: number;
    ssl?: boolean;
    uri?: string;
    user?: string;
}
export declare enum Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum {
    Pg = "pg",
    Mysql = "mysql",
    Redis = "redis",
    Mongodb = "mongodb"
}
export declare class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow extends SpeakeasyBase {
    day: string;
    description?: string[];
    hour: string;
    pending?: boolean;
}
export declare class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection extends SpeakeasyBase {
    database?: string;
    host?: string;
    password?: string;
    port?: number;
    ssl?: boolean;
    uri?: string;
    user?: string;
}
export declare enum Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum {
    Creating = "creating",
    Online = "online",
    Resizing = "resizing",
    Migrating = "migrating",
    Forking = "forking"
}
export declare enum Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum {
    MysqlNativePassword = "mysql_native_password",
    CachingSha2Password = "caching_sha2_password"
}
export declare class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings extends SpeakeasyBase {
    authPlugin: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum;
}
export declare enum Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum {
    Primary = "primary",
    Normal = "normal"
}
export declare class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers extends SpeakeasyBase {
    mysqlSettings?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings;
    name: string;
    password?: string;
    role?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum;
}
export declare class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems extends SpeakeasyBase {
    connection?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection;
    createdAt?: Date;
    dbNames?: string[];
    engine: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum;
    id?: string;
    maintenanceWindow?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow;
    name: string;
    numNodes: number;
    privateConnection?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection;
    privateNetworkUuid?: string;
    region: string;
    size: string;
    status?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum;
    tags?: string[];
    users?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers[];
    version?: string;
}
