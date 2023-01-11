package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeReplicationConfigurationTemplatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ReplicationConfigurationTemplate[] items;
    public DescribeReplicationConfigurationTemplatesResponse withItems(ReplicationConfigurationTemplate[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeReplicationConfigurationTemplatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}