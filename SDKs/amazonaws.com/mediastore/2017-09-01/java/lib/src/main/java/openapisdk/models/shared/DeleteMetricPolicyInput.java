package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteMetricPolicyInput {
    @JsonProperty("ContainerName")
    public String containerName;
    public DeleteMetricPolicyInput withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
}