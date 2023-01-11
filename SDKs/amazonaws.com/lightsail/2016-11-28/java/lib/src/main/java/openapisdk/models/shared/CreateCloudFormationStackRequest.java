package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateCloudFormationStackRequest {
    @JsonProperty("instances")
    public InstanceEntry[] instances;
    public CreateCloudFormationStackRequest withInstances(InstanceEntry[] instances) {
        this.instances = instances;
        return this;
    }
}