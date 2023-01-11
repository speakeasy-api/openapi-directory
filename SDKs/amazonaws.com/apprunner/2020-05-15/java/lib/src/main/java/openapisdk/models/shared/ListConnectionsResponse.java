package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConnectionsResponse {
    @JsonProperty("ConnectionSummaryList")
    public ConnectionSummary[] connectionSummaryList;
    public ListConnectionsResponse withConnectionSummaryList(ConnectionSummary[] connectionSummaryList) {
        this.connectionSummaryList = connectionSummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListConnectionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}