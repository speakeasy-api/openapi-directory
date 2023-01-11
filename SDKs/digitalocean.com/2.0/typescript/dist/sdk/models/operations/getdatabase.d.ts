import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatabasePathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
    databaseName: string;
}
export declare class GetDatabase200ApplicationJson extends SpeakeasyBase {
    db: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems;
}
export declare class GetDatabase401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDatabaseRequest extends SpeakeasyBase {
    pathParams: GetDatabasePathParams;
}
export declare class GetDatabaseResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDatabase200ApplicationJSONObject?: GetDatabase200ApplicationJson;
    getDatabase401ApplicationJSONObject?: GetDatabase401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
