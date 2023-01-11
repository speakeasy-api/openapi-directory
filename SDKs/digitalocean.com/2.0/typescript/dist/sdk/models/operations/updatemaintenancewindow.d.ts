import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateMaintenanceWindowPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class UpdateMaintenanceWindow401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateMaintenanceWindowRequest extends SpeakeasyBase {
    pathParams: UpdateMaintenanceWindowPathParams;
    request: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesMaintenanceWindowAllOf0Input;
}
export declare class UpdateMaintenanceWindowResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateMaintenanceWindow401ApplicationJSONObject?: UpdateMaintenanceWindow401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
