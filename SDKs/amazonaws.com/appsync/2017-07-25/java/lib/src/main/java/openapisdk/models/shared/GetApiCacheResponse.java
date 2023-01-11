package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetApiCacheResponse
 * Represents the output of a <code>GetApiCache</code> operation.
**/
public class GetApiCacheResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiCache")
    public ApiCache apiCache;
    public GetApiCacheResponse withApiCache(ApiCache apiCache) {
        this.apiCache = apiCache;
        return this;
    }
}