package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListInsightsRequestBodyStatusFilter
 *  A filter used by <code>ListInsights</code> to specify which insights to return. 
**/
public class ListInsightsRequestBodyStatusFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Any")
    public openapisdk.models.shared.ListInsightsAnyStatusFilter any;
    public ListInsightsRequestBodyStatusFilter withAny(openapisdk.models.shared.ListInsightsAnyStatusFilter any) {
        this.any = any;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Closed")
    public openapisdk.models.shared.ListInsightsClosedStatusFilter closed;
    public ListInsightsRequestBodyStatusFilter withClosed(openapisdk.models.shared.ListInsightsClosedStatusFilter closed) {
        this.closed = closed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ongoing")
    public openapisdk.models.shared.ListInsightsOngoingStatusFilter ongoing;
    public ListInsightsRequestBodyStatusFilter withOngoing(openapisdk.models.shared.ListInsightsOngoingStatusFilter ongoing) {
        this.ongoing = ongoing;
        return this;
    }
}