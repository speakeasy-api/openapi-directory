import { SpeakeasyBase } from "../../../internal/utils";
export declare enum Onev21databases1Percent7BdatabaseClusterUuidPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchemaEvictionPolicyEnum {
    Noeviction = "noeviction",
    AllkeysLru = "allkeys_lru",
    AllkeysRandom = "allkeys_random",
    VolatileLru = "volatile_lru",
    VolatileRandom = "volatile_random",
    VolatileTtl = "volatile_ttl"
}
export declare class Onev21databases1Percent7BdatabaseClusterUuidPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
    evictionPolicy: Onev21databases1Percent7BdatabaseClusterUuidPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchemaEvictionPolicyEnum;
}
