package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAppsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apps")
    public AppSummary[] apps;
    public ListAppsResponse withApps(AppSummary[] apps) {
        this.apps = apps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAppsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}