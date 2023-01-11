package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListApplicationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationSummaries")
    public ApplicationSummary[] applicationSummaries;
    public ListApplicationsResponse withApplicationSummaries(ApplicationSummary[] applicationSummaries) {
        this.applicationSummaries = applicationSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListApplicationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}