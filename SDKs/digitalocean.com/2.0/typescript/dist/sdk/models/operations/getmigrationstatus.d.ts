import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMigrationStatusPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class GetMigrationStatus200ApplicationJson extends SpeakeasyBase {
    createdAt?: string;
    id?: string;
    status?: string;
}
export declare class GetMigrationStatus401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetMigrationStatusRequest extends SpeakeasyBase {
    pathParams: GetMigrationStatusPathParams;
}
export declare class GetMigrationStatusResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getMigrationStatus200ApplicationJSONObject?: GetMigrationStatus200ApplicationJson;
    getMigrationStatus401ApplicationJSONObject?: GetMigrationStatus401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
