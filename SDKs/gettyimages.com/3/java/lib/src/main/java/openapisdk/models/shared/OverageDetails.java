package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OverageDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public OverageDetails withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public OverageDetails withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overages_reached")
    public Boolean overagesReached;
    public OverageDetails withOveragesReached(Boolean overagesReached) {
        this.overagesReached = overagesReached;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remaining")
    public Integer remaining;
    public OverageDetails withRemaining(Integer remaining) {
        this.remaining = remaining;
        return this;
    }
}