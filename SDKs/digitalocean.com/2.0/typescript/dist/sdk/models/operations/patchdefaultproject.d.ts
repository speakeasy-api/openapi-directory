import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchDefaultProject401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class PatchDefaultProjectRequest extends SpeakeasyBase {
    request: shared.Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsInput;
}
export declare class PatchDefaultProjectResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    patchDefaultProject200ApplicationJSONAny?: any;
    patchDefaultProject401ApplicationJSONObject?: PatchDefaultProject401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
