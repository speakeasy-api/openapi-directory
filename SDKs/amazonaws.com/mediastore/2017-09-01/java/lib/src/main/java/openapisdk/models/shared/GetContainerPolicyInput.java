package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetContainerPolicyInput {
    @JsonProperty("ContainerName")
    public String containerName;
    public GetContainerPolicyInput withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
}