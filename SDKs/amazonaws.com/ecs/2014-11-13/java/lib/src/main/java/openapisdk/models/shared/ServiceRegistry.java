package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceRegistry
 * Details of the service registry.
**/
public class ServiceRegistry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerName")
    public String containerName;
    public ServiceRegistry withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerPort")
    public Long containerPort;
    public ServiceRegistry withContainerPort(Long containerPort) {
        this.containerPort = containerPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public ServiceRegistry withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryArn")
    public String registryArn;
    public ServiceRegistry withRegistryArn(String registryArn) {
        this.registryArn = registryArn;
        return this;
    }
}