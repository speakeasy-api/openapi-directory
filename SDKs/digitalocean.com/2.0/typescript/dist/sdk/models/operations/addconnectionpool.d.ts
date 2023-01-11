import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddConnectionPoolPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class AddConnectionPool201ApplicationJson extends SpeakeasyBase {
    pool: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems1;
}
export declare class AddConnectionPool401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class AddConnectionPoolRequest extends SpeakeasyBase {
    pathParams: AddConnectionPoolPathParams;
    request: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems;
}
export declare class AddConnectionPoolResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    addConnectionPool201ApplicationJSONObject?: AddConnectionPool201ApplicationJson;
    addConnectionPool401ApplicationJSONObject?: AddConnectionPool401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
