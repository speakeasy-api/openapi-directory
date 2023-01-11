package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiCache
 * The <code>ApiCache</code> object.
**/
public class ApiCache {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiCachingBehavior")
    public ApiCachingBehaviorEnum apiCachingBehavior;
    public ApiCache withApiCachingBehavior(ApiCachingBehaviorEnum apiCachingBehavior) {
        this.apiCachingBehavior = apiCachingBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("atRestEncryptionEnabled")
    public Boolean atRestEncryptionEnabled;
    public ApiCache withAtRestEncryptionEnabled(Boolean atRestEncryptionEnabled) {
        this.atRestEncryptionEnabled = atRestEncryptionEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ApiCacheStatusEnum status;
    public ApiCache withStatus(ApiCacheStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transitEncryptionEnabled")
    public Boolean transitEncryptionEnabled;
    public ApiCache withTransitEncryptionEnabled(Boolean transitEncryptionEnabled) {
        this.transitEncryptionEnabled = transitEncryptionEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public ApiCache withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ApiCacheTypeEnum type;
    public ApiCache withType(ApiCacheTypeEnum type) {
        this.type = type;
        return this;
    }
}