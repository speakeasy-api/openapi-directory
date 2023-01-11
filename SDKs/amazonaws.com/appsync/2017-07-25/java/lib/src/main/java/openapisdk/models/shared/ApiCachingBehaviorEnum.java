package openapisdk.models.shared;


public enum ApiCachingBehaviorEnum {
    FULL_REQUEST_CACHING("FULL_REQUEST_CACHING"),
    PER_RESOLVER_CACHING("PER_RESOLVER_CACHING");

    public final String value;

    private ApiCachingBehaviorEnum(String value) {
        this.value = value;
    }
}
