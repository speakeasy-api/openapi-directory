import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddDatabasePathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class AddDatabase201ApplicationJson extends SpeakeasyBase {
    db: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems;
}
export declare class AddDatabase401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class AddDatabaseRequest extends SpeakeasyBase {
    pathParams: AddDatabasePathParams;
    request: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems;
}
export declare class AddDatabaseResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    addDatabase201ApplicationJSONObject?: AddDatabase201ApplicationJson;
    addDatabase401ApplicationJSONObject?: AddDatabase401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
