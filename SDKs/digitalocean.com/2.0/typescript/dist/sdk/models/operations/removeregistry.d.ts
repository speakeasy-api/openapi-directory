import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveRegistry401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class RemoveRegistryRequest extends SpeakeasyBase {
    request?: shared.Onev21kubernetes1registryPostRequestBodyContentApplication1jsonSchema;
}
export declare class RemoveRegistryResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    removeRegistry401ApplicationJSONObject?: RemoveRegistry401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
