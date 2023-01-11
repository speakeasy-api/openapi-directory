package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeContainerOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Container")
    public Container container;
    public DescribeContainerOutput withContainer(Container container) {
        this.container = container;
        return this;
    }
}