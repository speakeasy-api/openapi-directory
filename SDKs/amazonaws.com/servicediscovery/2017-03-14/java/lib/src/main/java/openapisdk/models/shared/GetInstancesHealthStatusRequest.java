package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInstancesHealthStatusRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Instances")
    public String[] instances;
    public GetInstancesHealthStatusRequest withInstances(String[] instances) {
        this.instances = instances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetInstancesHealthStatusRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetInstancesHealthStatusRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ServiceId")
    public String serviceId;
    public GetInstancesHealthStatusRequest withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}