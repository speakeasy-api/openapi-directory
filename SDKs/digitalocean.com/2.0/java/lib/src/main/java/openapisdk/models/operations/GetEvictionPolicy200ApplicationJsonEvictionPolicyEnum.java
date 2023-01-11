package openapisdk.models.operations;


public enum GetEvictionPolicy200ApplicationJsonEvictionPolicyEnum {
    NOEVICTION("noeviction"),
    ALLKEYS_LRU("allkeys_lru"),
    ALLKEYS_RANDOM("allkeys_random"),
    VOLATILE_LRU("volatile_lru"),
    VOLATILE_RANDOM("volatile_random"),
    VOLATILE_TTL("volatile_ttl");

    public final String value;

    private GetEvictionPolicy200ApplicationJsonEvictionPolicyEnum(String value) {
        this.value = value;
    }
}
