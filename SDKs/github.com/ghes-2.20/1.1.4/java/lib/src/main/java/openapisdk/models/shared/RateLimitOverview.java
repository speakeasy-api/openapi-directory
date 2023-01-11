package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RateLimitOverview
 * Rate Limit Overview
**/
public class RateLimitOverview {
    @JsonProperty("rate")
    public RateLimit rate;
    public RateLimitOverview withRate(RateLimit rate) {
        this.rate = rate;
        return this;
    }
    @JsonProperty("resources")
    public RateLimitOverviewResources resources;
    public RateLimitOverview withResources(RateLimitOverviewResources resources) {
        this.resources = resources;
        return this;
    }
}