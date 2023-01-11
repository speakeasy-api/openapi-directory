package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInstancesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Instances")
    public InstanceSummary[] instances;
    public ListInstancesResponse withInstances(InstanceSummary[] instances) {
        this.instances = instances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListInstancesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}