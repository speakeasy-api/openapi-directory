package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeProjectsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeProjectsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProjectDescriptions")
    public ProjectDescription[] projectDescriptions;
    public DescribeProjectsResponse withProjectDescriptions(ProjectDescription[] projectDescriptions) {
        this.projectDescriptions = projectDescriptions;
        return this;
    }
}