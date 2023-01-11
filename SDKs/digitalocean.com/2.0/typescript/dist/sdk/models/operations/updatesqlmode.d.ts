import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSqlModePathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class UpdateSqlMode401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateSqlModeRequest extends SpeakeasyBase {
    pathParams: UpdateSqlModePathParams;
    request: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1sqlModeGetResponses200ContentApplication1jsonSchema;
}
export declare class UpdateSqlModeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateSqlMode401ApplicationJSONObject?: UpdateSqlMode401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
