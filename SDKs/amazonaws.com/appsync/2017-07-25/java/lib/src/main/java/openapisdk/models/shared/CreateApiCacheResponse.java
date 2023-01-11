package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateApiCacheResponse
 * Represents the output of a <code>CreateApiCache</code> operation.
**/
public class CreateApiCacheResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiCache")
    public ApiCache apiCache;
    public CreateApiCacheResponse withApiCache(ApiCache apiCache) {
        this.apiCache = apiCache;
        return this;
    }
}