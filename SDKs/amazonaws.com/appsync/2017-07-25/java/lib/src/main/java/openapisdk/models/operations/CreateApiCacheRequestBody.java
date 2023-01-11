package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApiCacheRequestBody {
    @JsonProperty("apiCachingBehavior")
    public CreateApiCacheRequestBodyApiCachingBehaviorEnum apiCachingBehavior;
    public CreateApiCacheRequestBody withApiCachingBehavior(CreateApiCacheRequestBodyApiCachingBehaviorEnum apiCachingBehavior) {
        this.apiCachingBehavior = apiCachingBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("atRestEncryptionEnabled")
    public Boolean atRestEncryptionEnabled;
    public CreateApiCacheRequestBody withAtRestEncryptionEnabled(Boolean atRestEncryptionEnabled) {
        this.atRestEncryptionEnabled = atRestEncryptionEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transitEncryptionEnabled")
    public Boolean transitEncryptionEnabled;
    public CreateApiCacheRequestBody withTransitEncryptionEnabled(Boolean transitEncryptionEnabled) {
        this.transitEncryptionEnabled = transitEncryptionEnabled;
        return this;
    }
    @JsonProperty("ttl")
    public Long ttl;
    public CreateApiCacheRequestBody withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonProperty("type")
    public CreateApiCacheRequestBodyTypeEnum type;
    public CreateApiCacheRequestBody withType(CreateApiCacheRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}