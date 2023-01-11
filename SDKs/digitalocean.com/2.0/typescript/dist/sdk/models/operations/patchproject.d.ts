import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchProjectPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class PatchProject401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class PatchProjectRequest extends SpeakeasyBase {
    pathParams: PatchProjectPathParams;
    request: shared.Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsInput;
}
export declare class PatchProjectResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    patchProject200ApplicationJSONAny?: any;
    patchProject401ApplicationJSONObject?: PatchProject401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
