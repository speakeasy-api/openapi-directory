package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApiCacheRequestBody {
    @JsonProperty("apiCachingBehavior")
    public UpdateApiCacheRequestBodyApiCachingBehaviorEnum apiCachingBehavior;
    public UpdateApiCacheRequestBody withApiCachingBehavior(UpdateApiCacheRequestBodyApiCachingBehaviorEnum apiCachingBehavior) {
        this.apiCachingBehavior = apiCachingBehavior;
        return this;
    }
    @JsonProperty("ttl")
    public Long ttl;
    public UpdateApiCacheRequestBody withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonProperty("type")
    public UpdateApiCacheRequestBodyTypeEnum type;
    public UpdateApiCacheRequestBody withType(UpdateApiCacheRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}