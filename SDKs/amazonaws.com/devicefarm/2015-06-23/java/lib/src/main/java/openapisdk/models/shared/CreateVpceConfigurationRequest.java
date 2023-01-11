package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVpceConfigurationRequest {
    @JsonProperty("serviceDnsName")
    public String serviceDnsName;
    public CreateVpceConfigurationRequest withServiceDnsName(String serviceDnsName) {
        this.serviceDnsName = serviceDnsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpceConfigurationDescription")
    public String vpceConfigurationDescription;
    public CreateVpceConfigurationRequest withVpceConfigurationDescription(String vpceConfigurationDescription) {
        this.vpceConfigurationDescription = vpceConfigurationDescription;
        return this;
    }
    @JsonProperty("vpceConfigurationName")
    public String vpceConfigurationName;
    public CreateVpceConfigurationRequest withVpceConfigurationName(String vpceConfigurationName) {
        this.vpceConfigurationName = vpceConfigurationName;
        return this;
    }
    @JsonProperty("vpceServiceName")
    public String vpceServiceName;
    public CreateVpceConfigurationRequest withVpceServiceName(String vpceServiceName) {
        this.vpceServiceName = vpceServiceName;
        return this;
    }
}