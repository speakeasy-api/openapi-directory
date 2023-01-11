package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails
 * A port mapping for the container.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContainerPort")
    public Long containerPort;
    public AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails withContainerPort(Long containerPort) {
        this.containerPort = containerPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HostPort")
    public Long hostPort;
    public AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails withHostPort(Long hostPort) {
        this.hostPort = hostPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Protocol")
    public String protocol;
    public AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
}