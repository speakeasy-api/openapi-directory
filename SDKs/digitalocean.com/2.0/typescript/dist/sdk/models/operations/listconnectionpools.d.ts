import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListConnectionPoolsPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class ListConnectionPools200ApplicationJsonPoolsConnection extends SpeakeasyBase {
    database?: string;
    host?: string;
    password?: string;
    port?: number;
    ssl?: boolean;
    uri?: string;
    user?: string;
}
export declare class ListConnectionPools200ApplicationJsonPoolsPrivateConnection extends SpeakeasyBase {
    database?: string;
    host?: string;
    password?: string;
    port?: number;
    ssl?: boolean;
    uri?: string;
    user?: string;
}
export declare class ListConnectionPools200ApplicationJsonPools extends SpeakeasyBase {
    connection?: ListConnectionPools200ApplicationJsonPoolsConnection;
    db: string;
    mode: string;
    name: string;
    privateConnection?: ListConnectionPools200ApplicationJsonPoolsPrivateConnection;
    size: number;
    user: string;
}
export declare class ListConnectionPools200ApplicationJson extends SpeakeasyBase {
    pools?: ListConnectionPools200ApplicationJsonPools[];
}
export declare class ListConnectionPools401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListConnectionPoolsRequest extends SpeakeasyBase {
    pathParams: ListConnectionPoolsPathParams;
}
export declare class ListConnectionPoolsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listConnectionPools200ApplicationJSONObject?: ListConnectionPools200ApplicationJson;
    listConnectionPools401ApplicationJSONObject?: ListConnectionPools401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
