package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeContainerInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContainerName")
    public String containerName;
    public DescribeContainerInput withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
}