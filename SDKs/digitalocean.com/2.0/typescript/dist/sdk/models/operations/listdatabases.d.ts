import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDatabasesPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class ListDatabases401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListDatabasesRequest extends SpeakeasyBase {
    pathParams: ListDatabasesPathParams;
}
export declare class ListDatabasesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listDatabases200ApplicationJSONAny?: any;
    listDatabases401ApplicationJSONObject?: ListDatabases401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
