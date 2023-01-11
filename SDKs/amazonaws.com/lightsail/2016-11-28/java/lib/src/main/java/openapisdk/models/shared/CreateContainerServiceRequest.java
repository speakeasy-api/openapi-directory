package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateContainerServiceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployment")
    public ContainerServiceDeploymentRequest deployment;
    public CreateContainerServiceRequest withDeployment(ContainerServiceDeploymentRequest deployment) {
        this.deployment = deployment;
        return this;
    }
    @JsonProperty("power")
    public ContainerServicePowerNameEnum power;
    public CreateContainerServiceRequest withPower(ContainerServicePowerNameEnum power) {
        this.power = power;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicDomainNames")
    public java.util.Map<String, String[]> publicDomainNames;
    public CreateContainerServiceRequest withPublicDomainNames(java.util.Map<String, String[]> publicDomainNames) {
        this.publicDomainNames = publicDomainNames;
        return this;
    }
    @JsonProperty("scale")
    public Long scale;
    public CreateContainerServiceRequest withScale(Long scale) {
        this.scale = scale;
        return this;
    }
    @JsonProperty("serviceName")
    public String serviceName;
    public CreateContainerServiceRequest withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateContainerServiceRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}