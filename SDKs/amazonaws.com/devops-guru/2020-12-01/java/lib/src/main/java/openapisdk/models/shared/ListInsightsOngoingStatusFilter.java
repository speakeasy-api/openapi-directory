package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListInsightsOngoingStatusFilter
 *  Used to filter for insights that have the status <code>ONGOING</code>. 
**/
public class ListInsightsOngoingStatusFilter {
    @JsonProperty("Type")
    public InsightTypeEnum type;
    public ListInsightsOngoingStatusFilter withType(InsightTypeEnum type) {
        this.type = type;
        return this;
    }
}