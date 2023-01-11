import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDatabaseBackupsPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class ListDatabaseBackups200ApplicationJsonBackups extends SpeakeasyBase {
    createdAt: Date;
    sizeGigabytes: number;
}
export declare class ListDatabaseBackups200ApplicationJson extends SpeakeasyBase {
    backups: ListDatabaseBackups200ApplicationJsonBackups[];
}
export declare class ListDatabaseBackups401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListDatabaseBackupsRequest extends SpeakeasyBase {
    pathParams: ListDatabaseBackupsPathParams;
}
export declare class ListDatabaseBackupsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listDatabaseBackups200ApplicationJSONObject?: ListDatabaseBackups200ApplicationJson;
    listDatabaseBackups401ApplicationJSONObject?: ListDatabaseBackups401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
