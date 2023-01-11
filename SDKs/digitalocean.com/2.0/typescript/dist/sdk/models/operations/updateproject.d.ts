import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProjectPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare enum UpdateProjectRequestBodyEnvironmentEnum {
    Development = "Development",
    Staging = "Staging",
    Production = "Production"
}
export declare class UpdateProjectRequestBodyInput extends SpeakeasyBase {
    description: string;
    environment: UpdateProjectRequestBodyEnvironmentEnum;
    isDefault: boolean;
    name: string;
    purpose: string;
}
export declare class UpdateProject401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateProjectRequest extends SpeakeasyBase {
    pathParams: UpdateProjectPathParams;
    request: UpdateProjectRequestBodyInput;
}
export declare class UpdateProjectResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateProject200ApplicationJSONAny?: any;
    updateProject401ApplicationJSONObject?: UpdateProject401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
