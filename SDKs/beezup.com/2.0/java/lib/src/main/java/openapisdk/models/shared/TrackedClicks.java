package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TrackedClicks {
    @JsonProperty("clicks")
    public TrackedClick[] clicks;
    public TrackedClicks withClicks(TrackedClick[] clicks) {
        this.clicks = clicks;
        return this;
    }
}