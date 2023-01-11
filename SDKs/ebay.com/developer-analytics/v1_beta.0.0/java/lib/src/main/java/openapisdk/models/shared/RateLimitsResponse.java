package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RateLimitsResponse
 * This complex type defines a list of rate-limit data as it pertains to a method within the specified version of an API.
**/
public class RateLimitsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateLimits")
    public RateLimit[] rateLimits;
    public RateLimitsResponse withRateLimits(RateLimit[] rateLimits) {
        this.rateLimits = rateLimits;
        return this;
    }
}