package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AnalyticsIndexLinks {
    @JsonProperty("self")
    public LinksAnalyticsIndexLink self;
    public AnalyticsIndexLinks withSelf(LinksAnalyticsIndexLink self) {
        this.self = self;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingStatus")
    public LinksGetTrackingStatusLink trackingStatus;
    public AnalyticsIndexLinks withTrackingStatus(LinksGetTrackingStatusLink trackingStatus) {
        this.trackingStatus = trackingStatus;
        return this;
    }
}