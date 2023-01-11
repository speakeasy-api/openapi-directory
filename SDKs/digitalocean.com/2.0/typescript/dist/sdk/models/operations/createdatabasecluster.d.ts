import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDatabaseClusterRequestBodyBackupRestore extends SpeakeasyBase {
    backupCreatedAt?: Date;
    databaseName: string;
}
export declare enum CreateDatabaseClusterRequestBodyEngineEnum {
    Pg = "pg",
    Mysql = "mysql",
    Redis = "redis",
    Mongodb = "mongodb"
}
export declare class CreateDatabaseClusterRequestBodyMaintenanceWindowInput extends SpeakeasyBase {
    day: string;
    hour: string;
}
export declare class CreateDatabaseClusterRequestBodyInput extends SpeakeasyBase {
    backupRestore?: CreateDatabaseClusterRequestBodyBackupRestore;
    engine: CreateDatabaseClusterRequestBodyEngineEnum;
    maintenanceWindow?: CreateDatabaseClusterRequestBodyMaintenanceWindowInput;
    name: string;
    numNodes: number;
    privateNetworkUuid?: string;
    region: string;
    size: string;
    tags?: string[];
    version?: string;
}
export declare class CreateDatabaseCluster201ApplicationJson extends SpeakeasyBase {
    database: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems;
}
export declare class CreateDatabaseCluster401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateDatabaseClusterRequest extends SpeakeasyBase {
    request: CreateDatabaseClusterRequestBodyInput;
}
export declare class CreateDatabaseClusterResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createDatabaseCluster201ApplicationJSONObject?: CreateDatabaseCluster201ApplicationJson;
    createDatabaseCluster401ApplicationJSONObject?: CreateDatabaseCluster401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
