import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDatabaseClustersQueryParams extends SpeakeasyBase {
    tagName?: string;
}
export declare class ListDatabaseClusters401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListDatabaseClustersRequest extends SpeakeasyBase {
    queryParams: ListDatabaseClustersQueryParams;
}
export declare class ListDatabaseClustersResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listDatabaseClusters200ApplicationJSONAny?: any;
    listDatabaseClusters401ApplicationJSONObject?: ListDatabaseClusters401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
