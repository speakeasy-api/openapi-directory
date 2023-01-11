package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeJobDefinitionsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobDefinitionName")
    public String jobDefinitionName;
    public DescribeJobDefinitionsRequestBody withJobDefinitionName(String jobDefinitionName) {
        this.jobDefinitionName = jobDefinitionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobDefinitions")
    public String[] jobDefinitions;
    public DescribeJobDefinitionsRequestBody withJobDefinitions(String[] jobDefinitions) {
        this.jobDefinitions = jobDefinitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeJobDefinitionsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeJobDefinitionsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public DescribeJobDefinitionsRequestBody withStatus(String status) {
        this.status = status;
        return this;
    }
}