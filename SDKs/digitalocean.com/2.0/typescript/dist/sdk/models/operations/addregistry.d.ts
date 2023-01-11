import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddRegistryRequestBody extends SpeakeasyBase {
    clusterUuids?: string[];
}
export declare class AddRegistry401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class AddRegistryRequest extends SpeakeasyBase {
    request?: AddRegistryRequestBody;
}
export declare class AddRegistryResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    addRegistry401ApplicationJSONObject?: AddRegistry401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
