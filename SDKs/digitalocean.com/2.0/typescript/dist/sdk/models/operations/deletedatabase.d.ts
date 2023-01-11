import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDatabasePathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
    databaseName: string;
}
export declare class DeleteDatabase401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteDatabaseRequest extends SpeakeasyBase {
    pathParams: DeleteDatabasePathParams;
}
export declare class DeleteDatabaseResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteDatabase401ApplicationJSONObject?: DeleteDatabase401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
