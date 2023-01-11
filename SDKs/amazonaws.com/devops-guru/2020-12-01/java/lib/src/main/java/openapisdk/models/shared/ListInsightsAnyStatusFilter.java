package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListInsightsAnyStatusFilter
 *  Used to filter for insights that have any status. 
**/
public class ListInsightsAnyStatusFilter {
    @JsonProperty("StartTimeRange")
    public StartTimeRange startTimeRange;
    public ListInsightsAnyStatusFilter withStartTimeRange(StartTimeRange startTimeRange) {
        this.startTimeRange = startTimeRange;
        return this;
    }
    @JsonProperty("Type")
    public InsightTypeEnum type;
    public ListInsightsAnyStatusFilter withType(InsightTypeEnum type) {
        this.type = type;
        return this;
    }
}