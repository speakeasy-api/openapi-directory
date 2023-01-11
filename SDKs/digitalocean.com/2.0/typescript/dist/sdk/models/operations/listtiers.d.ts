import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTiers200ApplicationJsonTiers extends SpeakeasyBase {
    buildSeconds?: string;
    egressBandwidthBytes?: string;
    name?: string;
    slug?: string;
    storageBytes?: string;
}
export declare class ListTiers200ApplicationJson extends SpeakeasyBase {
    tiers?: ListTiers200ApplicationJsonTiers[];
}
export declare class ListTiers401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListTiersResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listTiers200ApplicationJSONObject?: ListTiers200ApplicationJson;
    listTiers401ApplicationJSONObject?: ListTiers401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
