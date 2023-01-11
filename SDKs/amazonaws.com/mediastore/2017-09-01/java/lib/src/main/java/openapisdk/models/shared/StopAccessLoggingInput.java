package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopAccessLoggingInput {
    @JsonProperty("ContainerName")
    public String containerName;
    public StopAccessLoggingInput withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
}