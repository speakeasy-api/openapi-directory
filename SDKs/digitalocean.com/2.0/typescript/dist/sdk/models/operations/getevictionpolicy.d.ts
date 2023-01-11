import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEvictionPolicyPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare enum GetEvictionPolicy200ApplicationJsonEvictionPolicyEnum {
    Noeviction = "noeviction",
    AllkeysLru = "allkeys_lru",
    AllkeysRandom = "allkeys_random",
    VolatileLru = "volatile_lru",
    VolatileRandom = "volatile_random",
    VolatileTtl = "volatile_ttl"
}
export declare class GetEvictionPolicy200ApplicationJson extends SpeakeasyBase {
    evictionPolicy: GetEvictionPolicy200ApplicationJsonEvictionPolicyEnum;
}
export declare class GetEvictionPolicy401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetEvictionPolicyRequest extends SpeakeasyBase {
    pathParams: GetEvictionPolicyPathParams;
}
export declare class GetEvictionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getEvictionPolicy200ApplicationJSONObject?: GetEvictionPolicy200ApplicationJson;
    getEvictionPolicy401ApplicationJSONObject?: GetEvictionPolicy401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
