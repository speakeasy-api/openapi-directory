package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CachingConfig
 * The caching configuration for a resolver that has caching enabled.
**/
public class CachingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cachingKeys")
    public String[] cachingKeys;
    public CachingConfig withCachingKeys(String[] cachingKeys) {
        this.cachingKeys = cachingKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public CachingConfig withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}