import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatabaseClusterPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class GetDatabaseCluster200ApplicationJson extends SpeakeasyBase {
    database: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems;
}
export declare class GetDatabaseCluster401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDatabaseClusterRequest extends SpeakeasyBase {
    pathParams: GetDatabaseClusterPathParams;
}
export declare class GetDatabaseClusterResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDatabaseCluster200ApplicationJSONObject?: GetDatabaseCluster200ApplicationJson;
    getDatabaseCluster401ApplicationJSONObject?: GetDatabaseCluster401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
