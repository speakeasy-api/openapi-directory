import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDatabaseClusterPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class UpdateDatabaseClusterRequestBody extends SpeakeasyBase {
    region: string;
}
export declare class UpdateDatabaseCluster401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateDatabaseClusterRequest extends SpeakeasyBase {
    pathParams: UpdateDatabaseClusterPathParams;
    request: UpdateDatabaseClusterRequestBody;
}
export declare class UpdateDatabaseClusterResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateDatabaseCluster401ApplicationJSONObject?: UpdateDatabaseCluster401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
