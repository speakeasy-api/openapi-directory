import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDatabaseFirewallsPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class ListDatabaseFirewalls401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListDatabaseFirewallsRequest extends SpeakeasyBase {
    pathParams: ListDatabaseFirewallsPathParams;
}
export declare class ListDatabaseFirewallsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listDatabaseFirewalls200ApplicationJSONAny?: any;
    listDatabaseFirewalls401ApplicationJSONObject?: ListDatabaseFirewalls401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
