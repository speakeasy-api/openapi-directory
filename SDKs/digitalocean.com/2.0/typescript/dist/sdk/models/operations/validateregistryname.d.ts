import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValidateRegistryNameRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class ValidateRegistryName401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ValidateRegistryNameRequest extends SpeakeasyBase {
    request: ValidateRegistryNameRequestBody;
}
export declare class ValidateRegistryNameResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    validateRegistryName401ApplicationJSONObject?: ValidateRegistryName401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
