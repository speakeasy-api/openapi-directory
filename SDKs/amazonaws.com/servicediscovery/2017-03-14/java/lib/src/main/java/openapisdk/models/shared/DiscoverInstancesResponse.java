package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DiscoverInstancesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Instances")
    public HttpInstanceSummary[] instances;
    public DiscoverInstancesResponse withInstances(HttpInstanceSummary[] instances) {
        this.instances = instances;
        return this;
    }
}