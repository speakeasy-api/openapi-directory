package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProjectsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListProjectsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("projectSummaries")
    public ProjectSummary[] projectSummaries;
    public ListProjectsResponse withProjectSummaries(ProjectSummary[] projectSummaries) {
        this.projectSummaries = projectSummaries;
        return this;
    }
}