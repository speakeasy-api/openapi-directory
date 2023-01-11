package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeProjectVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeProjectVersionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProjectVersionDescriptions")
    public ProjectVersionDescription[] projectVersionDescriptions;
    public DescribeProjectVersionsResponse withProjectVersionDescriptions(ProjectVersionDescription[] projectVersionDescriptions) {
        this.projectVersionDescriptions = projectVersionDescriptions;
        return this;
    }
}