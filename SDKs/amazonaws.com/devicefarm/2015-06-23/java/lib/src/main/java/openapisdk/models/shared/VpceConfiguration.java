package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VpceConfiguration
 * Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration.
**/
public class VpceConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public VpceConfiguration withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDnsName")
    public String serviceDnsName;
    public VpceConfiguration withServiceDnsName(String serviceDnsName) {
        this.serviceDnsName = serviceDnsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpceConfigurationDescription")
    public String vpceConfigurationDescription;
    public VpceConfiguration withVpceConfigurationDescription(String vpceConfigurationDescription) {
        this.vpceConfigurationDescription = vpceConfigurationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpceConfigurationName")
    public String vpceConfigurationName;
    public VpceConfiguration withVpceConfigurationName(String vpceConfigurationName) {
        this.vpceConfigurationName = vpceConfigurationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpceServiceName")
    public String vpceServiceName;
    public VpceConfiguration withVpceServiceName(String vpceServiceName) {
        this.vpceServiceName = vpceServiceName;
        return this;
    }
}