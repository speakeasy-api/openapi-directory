import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDatabaseClusterSizePathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class UpdateDatabaseClusterSizeRequestBody extends SpeakeasyBase {
    numNodes: number;
    size: string;
}
export declare class UpdateDatabaseClusterSize401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateDatabaseClusterSizeRequest extends SpeakeasyBase {
    pathParams: UpdateDatabaseClusterSizePathParams;
    request: UpdateDatabaseClusterSizeRequestBody;
}
export declare class UpdateDatabaseClusterSizeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateDatabaseClusterSize401ApplicationJSONObject?: UpdateDatabaseClusterSize401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
