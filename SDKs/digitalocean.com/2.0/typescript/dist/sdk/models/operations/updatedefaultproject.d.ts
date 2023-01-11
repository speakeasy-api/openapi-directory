import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDefaultProjectRequestBodyEnvironmentEnum {
    Development = "Development",
    Staging = "Staging",
    Production = "Production"
}
export declare class UpdateDefaultProjectRequestBodyInput extends SpeakeasyBase {
    description: string;
    environment: UpdateDefaultProjectRequestBodyEnvironmentEnum;
    isDefault: boolean;
    name: string;
    purpose: string;
}
export declare class UpdateDefaultProject401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateDefaultProjectRequest extends SpeakeasyBase {
    request: UpdateDefaultProjectRequestBodyInput;
}
export declare class UpdateDefaultProjectResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateDefaultProject200ApplicationJSONAny?: any;
    updateDefaultProject401ApplicationJSONObject?: UpdateDefaultProject401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
