package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartAccessLoggingInput {
    @JsonProperty("ContainerName")
    public String containerName;
    public StartAccessLoggingInput withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
}