package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAppsListsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppsLists")
    public AppsListDataSummary[] appsLists;
    public ListAppsListsResponse withAppsLists(AppsListDataSummary[] appsLists) {
        this.appsLists = appsLists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAppsListsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}