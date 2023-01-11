package openapisdk.models.operations;


public enum CreateApiCacheRequestBodyApiCachingBehaviorEnum {
    FULL_REQUEST_CACHING("FULL_REQUEST_CACHING"),
    PER_RESOLVER_CACHING("PER_RESOLVER_CACHING");

    public final String value;

    private CreateApiCacheRequestBodyApiCachingBehaviorEnum(String value) {
        this.value = value;
    }
}
