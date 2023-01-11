import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConnectionPoolPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
    poolName: string;
}
export declare class GetConnectionPool200ApplicationJson extends SpeakeasyBase {
    pool: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems1;
}
export declare class GetConnectionPool401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetConnectionPoolRequest extends SpeakeasyBase {
    pathParams: GetConnectionPoolPathParams;
}
export declare class GetConnectionPoolResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getConnectionPool200ApplicationJSONObject?: GetConnectionPool200ApplicationJson;
    getConnectionPool401ApplicationJSONObject?: GetConnectionPool401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
