package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListInsightsClosedStatusFilter
 *  Used to filter for insights that have the status <code>CLOSED</code>. 
**/
public class ListInsightsClosedStatusFilter {
    @JsonProperty("EndTimeRange")
    public EndTimeRange endTimeRange;
    public ListInsightsClosedStatusFilter withEndTimeRange(EndTimeRange endTimeRange) {
        this.endTimeRange = endTimeRange;
        return this;
    }
    @JsonProperty("Type")
    public InsightTypeEnum type;
    public ListInsightsClosedStatusFilter withType(InsightTypeEnum type) {
        this.type = type;
        return this;
    }
}