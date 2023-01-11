package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMetricPolicyInput {
    @JsonProperty("ContainerName")
    public String containerName;
    public GetMetricPolicyInput withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
}