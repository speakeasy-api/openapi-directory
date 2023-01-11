package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDashboardsResponse {
    @JsonProperty("dashboardSummaries")
    public DashboardSummary[] dashboardSummaries;
    public ListDashboardsResponse withDashboardSummaries(DashboardSummary[] dashboardSummaries) {
        this.dashboardSummaries = dashboardSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDashboardsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}