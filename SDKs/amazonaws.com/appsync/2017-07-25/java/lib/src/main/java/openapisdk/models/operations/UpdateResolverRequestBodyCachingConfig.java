package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateResolverRequestBodyCachingConfig
 * The caching configuration for a resolver that has caching enabled.
**/
public class UpdateResolverRequestBodyCachingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cachingKeys")
    public String[] cachingKeys;
    public UpdateResolverRequestBodyCachingConfig withCachingKeys(String[] cachingKeys) {
        this.cachingKeys = cachingKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public UpdateResolverRequestBodyCachingConfig withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}