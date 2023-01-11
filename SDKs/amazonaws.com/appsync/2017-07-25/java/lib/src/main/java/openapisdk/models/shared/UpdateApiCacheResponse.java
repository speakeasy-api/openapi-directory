package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateApiCacheResponse
 * Represents the output of a <code>UpdateApiCache</code> operation.
**/
public class UpdateApiCacheResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiCache")
    public ApiCache apiCache;
    public UpdateApiCacheResponse withApiCache(ApiCache apiCache) {
        this.apiCache = apiCache;
        return this;
    }
}