package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateContainerServiceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDisabled")
    public Boolean isDisabled;
    public UpdateContainerServiceRequest withIsDisabled(Boolean isDisabled) {
        this.isDisabled = isDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("power")
    public ContainerServicePowerNameEnum power;
    public UpdateContainerServiceRequest withPower(ContainerServicePowerNameEnum power) {
        this.power = power;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicDomainNames")
    public java.util.Map<String, String[]> publicDomainNames;
    public UpdateContainerServiceRequest withPublicDomainNames(java.util.Map<String, String[]> publicDomainNames) {
        this.publicDomainNames = publicDomainNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scale")
    public Long scale;
    public UpdateContainerServiceRequest withScale(Long scale) {
        this.scale = scale;
        return this;
    }
    @JsonProperty("serviceName")
    public String serviceName;
    public UpdateContainerServiceRequest withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}