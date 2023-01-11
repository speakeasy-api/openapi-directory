package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTestGridProjectsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTestGridProjectsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testGridProjects")
    public TestGridProject[] testGridProjects;
    public ListTestGridProjectsResult withTestGridProjects(TestGridProject[] testGridProjects) {
        this.testGridProjects = testGridProjects;
        return this;
    }
}