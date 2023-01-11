package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContainerServiceDeploymentRequest
 * <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>
**/
public class ContainerServiceDeploymentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containers")
    public java.util.Map<String, Container> containers;
    public ContainerServiceDeploymentRequest withContainers(java.util.Map<String, Container> containers) {
        this.containers = containers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicEndpoint")
    public EndpointRequest publicEndpoint;
    public ContainerServiceDeploymentRequest withPublicEndpoint(EndpointRequest publicEndpoint) {
        this.publicEndpoint = publicEndpoint;
        return this;
    }
}