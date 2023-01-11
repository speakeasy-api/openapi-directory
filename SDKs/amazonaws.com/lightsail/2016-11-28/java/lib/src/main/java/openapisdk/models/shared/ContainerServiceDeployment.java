package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ContainerServiceDeployment
 * <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>
**/
public class ContainerServiceDeployment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containers")
    public java.util.Map<String, Container> containers;
    public ContainerServiceDeployment withContainers(java.util.Map<String, Container> containers) {
        this.containers = containers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public ContainerServiceDeployment withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicEndpoint")
    public ContainerServiceEndpoint publicEndpoint;
    public ContainerServiceDeployment withPublicEndpoint(ContainerServiceEndpoint publicEndpoint) {
        this.publicEndpoint = publicEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ContainerServiceDeploymentStateEnum state;
    public ContainerServiceDeployment withState(ContainerServiceDeploymentStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Long version;
    public ContainerServiceDeployment withVersion(Long version) {
        this.version = version;
        return this;
    }
}