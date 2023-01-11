import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSqlModePathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class GetSqlMode200ApplicationJson extends SpeakeasyBase {
    sqlMode: string;
}
export declare class GetSqlMode401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetSqlModeRequest extends SpeakeasyBase {
    pathParams: GetSqlModePathParams;
}
export declare class GetSqlModeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getSqlMode200ApplicationJSONObject?: GetSqlMode200ApplicationJson;
    getSqlMode401ApplicationJSONObject?: GetSqlMode401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
