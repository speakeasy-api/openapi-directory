package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAlertsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlertSummaryList")
    public AlertSummary[] alertSummaryList;
    public ListAlertsResponse withAlertSummaryList(AlertSummary[] alertSummaryList) {
        this.alertSummaryList = alertSummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAlertsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}