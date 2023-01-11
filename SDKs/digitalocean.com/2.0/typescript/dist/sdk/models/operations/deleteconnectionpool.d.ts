import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteConnectionPoolPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
    poolName: string;
}
export declare class DeleteConnectionPool401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteConnectionPoolRequest extends SpeakeasyBase {
    pathParams: DeleteConnectionPoolPathParams;
}
export declare class DeleteConnectionPoolResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteConnectionPool401ApplicationJSONObject?: DeleteConnectionPool401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
