package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateVpceConfigurationRequest {
    @JsonProperty("arn")
    public String arn;
    public UpdateVpceConfigurationRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDnsName")
    public String serviceDnsName;
    public UpdateVpceConfigurationRequest withServiceDnsName(String serviceDnsName) {
        this.serviceDnsName = serviceDnsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpceConfigurationDescription")
    public String vpceConfigurationDescription;
    public UpdateVpceConfigurationRequest withVpceConfigurationDescription(String vpceConfigurationDescription) {
        this.vpceConfigurationDescription = vpceConfigurationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpceConfigurationName")
    public String vpceConfigurationName;
    public UpdateVpceConfigurationRequest withVpceConfigurationName(String vpceConfigurationName) {
        this.vpceConfigurationName = vpceConfigurationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpceServiceName")
    public String vpceServiceName;
    public UpdateVpceConfigurationRequest withVpceServiceName(String vpceServiceName) {
        this.vpceServiceName = vpceServiceName;
        return this;
    }
}