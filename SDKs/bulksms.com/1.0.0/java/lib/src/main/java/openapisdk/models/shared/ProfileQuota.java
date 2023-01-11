package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProfileQuota {
    @JsonProperty("remaining")
    public Integer remaining;
    public ProfileQuota withRemaining(Integer remaining) {
        this.remaining = remaining;
        return this;
    }
    @JsonProperty("size")
    public Integer size;
    public ProfileQuota withSize(Integer size) {
        this.size = size;
        return this;
    }
}