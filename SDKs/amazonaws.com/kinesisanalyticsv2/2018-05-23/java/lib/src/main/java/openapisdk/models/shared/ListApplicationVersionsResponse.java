package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListApplicationVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationVersionSummaries")
    public ApplicationVersionSummary[] applicationVersionSummaries;
    public ListApplicationVersionsResponse withApplicationVersionSummaries(ApplicationVersionSummary[] applicationVersionSummaries) {
        this.applicationVersionSummaries = applicationVersionSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListApplicationVersionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}