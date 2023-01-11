package openapisdk.models.operations;


public enum UpdateApiCacheRequestBodyApiCachingBehaviorEnum {
    FULL_REQUEST_CACHING("FULL_REQUEST_CACHING"),
    PER_RESOLVER_CACHING("PER_RESOLVER_CACHING");

    public final String value;

    private UpdateApiCacheRequestBodyApiCachingBehaviorEnum(String value) {
        this.value = value;
    }
}
