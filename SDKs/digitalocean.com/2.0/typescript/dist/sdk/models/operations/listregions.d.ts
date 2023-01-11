import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRegions200ApplicationJson extends SpeakeasyBase {
    regions?: shared.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsPropertiesRegion[];
}
export declare class ListRegions401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListRegionsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listRegions200ApplicationJSONObject?: ListRegions200ApplicationJson;
    listRegions401ApplicationJSONObject?: ListRegions401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
