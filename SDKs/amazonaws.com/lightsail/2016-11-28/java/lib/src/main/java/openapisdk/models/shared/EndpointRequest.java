package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointRequest
 * Describes the settings of a public endpoint for an Amazon Lightsail container service.
**/
public class EndpointRequest {
    @JsonProperty("containerName")
    public String containerName;
    public EndpointRequest withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
    @JsonProperty("containerPort")
    public Long containerPort;
    public EndpointRequest withContainerPort(Long containerPort) {
        this.containerPort = containerPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthCheck")
    public ContainerServiceHealthCheckConfig healthCheck;
    public EndpointRequest withHealthCheck(ContainerServiceHealthCheckConfig healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
}