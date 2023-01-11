package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InboxPlacementTrackingOption
 * An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain.
**/
public class InboxPlacementTrackingOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Global")
    public Boolean global;
    public InboxPlacementTrackingOption withGlobal(Boolean global) {
        this.global = global;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrackedIsps")
    public String[] trackedIsps;
    public InboxPlacementTrackingOption withTrackedIsps(String[] trackedIsps) {
        this.trackedIsps = trackedIsps;
        return this;
    }
}