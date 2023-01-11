import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateOnlineMigrationPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class UpdateOnlineMigrationRequestBody extends SpeakeasyBase {
    disableSsl?: boolean;
}
export declare class UpdateOnlineMigration200ApplicationJson extends SpeakeasyBase {
    createdAt?: string;
    id?: string;
    status?: string;
}
export declare class UpdateOnlineMigration401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateOnlineMigrationRequest extends SpeakeasyBase {
    pathParams: UpdateOnlineMigrationPathParams;
    request: UpdateOnlineMigrationRequestBody;
}
export declare class UpdateOnlineMigrationResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateOnlineMigration200ApplicationJSONObject?: UpdateOnlineMigration200ApplicationJson;
    updateOnlineMigration401ApplicationJSONObject?: UpdateOnlineMigration401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
