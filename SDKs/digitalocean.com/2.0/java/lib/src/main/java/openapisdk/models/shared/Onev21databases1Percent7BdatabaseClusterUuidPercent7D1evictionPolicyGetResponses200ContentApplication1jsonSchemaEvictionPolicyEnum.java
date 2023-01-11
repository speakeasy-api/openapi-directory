package openapisdk.models.shared;


public enum Onev21databases1Percent7BdatabaseClusterUuidPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchemaEvictionPolicyEnum {
    NOEVICTION("noeviction"),
    ALLKEYS_LRU("allkeys_lru"),
    ALLKEYS_RANDOM("allkeys_random"),
    VOLATILE_LRU("volatile_lru"),
    VOLATILE_RANDOM("volatile_random"),
    VOLATILE_TTL("volatile_ttl");

    public final String value;

    private Onev21databases1Percent7BdatabaseClusterUuidPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchemaEvictionPolicyEnum(String value) {
        this.value = value;
    }
}
