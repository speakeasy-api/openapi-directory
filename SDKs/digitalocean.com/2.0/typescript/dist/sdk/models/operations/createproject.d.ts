import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateProjectRequestBodyEnvironmentEnum {
    Development = "Development",
    Staging = "Staging",
    Production = "Production"
}
export declare class CreateProjectRequestBodyInput extends SpeakeasyBase {
    description?: string;
    environment?: CreateProjectRequestBodyEnvironmentEnum;
    name: string;
    purpose: string;
}
export declare class CreateProject401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    request: CreateProjectRequestBodyInput;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createProject201ApplicationJSONAny?: any;
    createProject401ApplicationJSONObject?: CreateProject401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
