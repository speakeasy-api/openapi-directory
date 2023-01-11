package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContainerServicesListResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerServices")
    public ContainerService[] containerServices;
    public ContainerServicesListResult withContainerServices(ContainerService[] containerServices) {
        this.containerServices = containerServices;
        return this;
    }
}