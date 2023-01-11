import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteOnlineMigrationPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
    migrationId: string;
}
export declare class DeleteOnlineMigration401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteOnlineMigrationRequest extends SpeakeasyBase {
    pathParams: DeleteOnlineMigrationPathParams;
}
export declare class DeleteOnlineMigrationResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteOnlineMigration401ApplicationJSONObject?: DeleteOnlineMigration401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
