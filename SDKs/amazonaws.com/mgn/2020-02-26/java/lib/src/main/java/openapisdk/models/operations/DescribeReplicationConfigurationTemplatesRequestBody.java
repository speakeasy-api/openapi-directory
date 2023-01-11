package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeReplicationConfigurationTemplatesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeReplicationConfigurationTemplatesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeReplicationConfigurationTemplatesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("replicationConfigurationTemplateIDs")
    public String[] replicationConfigurationTemplateIDs;
    public DescribeReplicationConfigurationTemplatesRequestBody withReplicationConfigurationTemplateIDs(String[] replicationConfigurationTemplateIDs) {
        this.replicationConfigurationTemplateIDs = replicationConfigurationTemplateIDs;
        return this;
    }
}