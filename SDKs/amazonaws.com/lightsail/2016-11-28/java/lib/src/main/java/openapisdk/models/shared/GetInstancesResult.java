package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInstancesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instances")
    public Instance[] instances;
    public GetInstancesResult withInstances(Instance[] instances) {
        this.instances = instances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetInstancesResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}