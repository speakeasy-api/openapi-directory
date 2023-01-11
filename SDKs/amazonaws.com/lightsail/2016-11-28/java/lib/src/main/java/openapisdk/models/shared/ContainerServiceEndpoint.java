package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContainerServiceEndpoint
 * Describes the public endpoint configuration of a deployment of an Amazon Lightsail container service.
**/
public class ContainerServiceEndpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerName")
    public String containerName;
    public ContainerServiceEndpoint withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerPort")
    public Long containerPort;
    public ContainerServiceEndpoint withContainerPort(Long containerPort) {
        this.containerPort = containerPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthCheck")
    public ContainerServiceHealthCheckConfig healthCheck;
    public ContainerServiceEndpoint withHealthCheck(ContainerServiceHealthCheckConfig healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
}