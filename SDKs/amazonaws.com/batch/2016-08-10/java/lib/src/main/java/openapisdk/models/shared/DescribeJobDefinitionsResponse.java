package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeJobDefinitionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobDefinitions")
    public JobDefinition[] jobDefinitions;
    public DescribeJobDefinitionsResponse withJobDefinitions(JobDefinition[] jobDefinitions) {
        this.jobDefinitions = jobDefinitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeJobDefinitionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}