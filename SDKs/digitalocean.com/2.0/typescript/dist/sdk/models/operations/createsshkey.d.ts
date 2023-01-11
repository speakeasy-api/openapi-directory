import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSshKey401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateSshKeyRequest extends SpeakeasyBase {
    request: shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSshKeysItemsInput;
}
export declare class CreateSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createSshKey201ApplicationJSONAny?: any;
    createSshKey401ApplicationJSONObject?: CreateSshKey401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
