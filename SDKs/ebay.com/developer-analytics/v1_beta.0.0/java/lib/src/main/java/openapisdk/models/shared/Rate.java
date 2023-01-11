package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Rate
 * This complex type defines a &quot;rate&quot; as the quota of calls that can be made to a resource per time window, the remaining number of calls before the threshold is met, the amount of time until the time window resets, and the length of the time window (in seconds).
**/
public class Rate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public Rate withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remaining")
    public Integer remaining;
    public Rate withRemaining(Integer remaining) {
        this.remaining = remaining;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reset")
    public String reset;
    public Rate withReset(String reset) {
        this.reset = reset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeWindow")
    public Integer timeWindow;
    public Rate withTimeWindow(Integer timeWindow) {
        this.timeWindow = timeWindow;
        return this;
    }
}