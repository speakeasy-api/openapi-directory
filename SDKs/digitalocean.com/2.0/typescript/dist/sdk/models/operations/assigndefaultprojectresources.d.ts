import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssignDefaultProjectResources200ApplicationJson extends SpeakeasyBase {
    resources?: shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems[];
}
export declare class AssignDefaultProjectResources401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class AssignDefaultProjectResourcesRequest extends SpeakeasyBase {
    request: shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema;
}
export declare class AssignDefaultProjectResourcesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    assignDefaultProjectResources200ApplicationJSONObject?: AssignDefaultProjectResources200ApplicationJson;
    assignDefaultProjectResources401ApplicationJSONObject?: AssignDefaultProjectResources401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
