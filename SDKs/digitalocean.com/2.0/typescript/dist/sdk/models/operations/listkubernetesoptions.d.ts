import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListKubernetesOptions200ApplicationJson extends SpeakeasyBase {
    options?: any;
}
export declare class ListKubernetesOptions401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListKubernetesOptionsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listKubernetesOptions200ApplicationJSONObject?: ListKubernetesOptions200ApplicationJson;
    listKubernetesOptions401ApplicationJSONObject?: ListKubernetesOptions401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
