package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ItemRouting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public String[] destinations;
    public ItemRouting withDestinations(String[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportIndex")
    public Long reportIndex;
    public ItemRouting withReportIndex(Long reportIndex) {
        this.reportIndex = reportIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingId")
    public String trackingId;
    public ItemRouting withTrackingId(String trackingId) {
        this.trackingId = trackingId;
        return this;
    }
}